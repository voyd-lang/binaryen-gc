/**
 * @fileoverview This is a custom port of
 * https://github.com/WebAssembly/binaryen/blob/e6bbbc1cadce319eacec6ac6ebbd71d86f3d1082/src/ts/binaryen.ts#L2269
 */

import binaryen, {
  Module,
  ExpressionRef,
  TypeBuilderRef,
  HeapTypeRef,
  Type,
  PackedType,
} from "binaryen";

export interface TypeBuilderResult {
  heapTypes: HeapTypeRef[];
  errorIndex: number | null;
  errorReason: number | null;
}

export interface FieldType {
  type: Type;
  packedType: PackedType;
  mutable: boolean;
}

export class TypeBuilder {
  static typeFromTempHeapType(heapType: HeapTypeRef, nullable: boolean): Type {
    return binaryen["_BinaryenTypeFromHeapType"](heapType, nullable);
  }

  static heapTypeFromType(type: Type): HeapTypeRef {
    return binaryen["_BinaryenTypeGetHeapType"](type);
  }

  static arrayElementType(heapType: HeapTypeRef): Type {
    return binaryen["_BinaryenArrayTypeGetElementType"](heapType);
  }

  static structMemberCount(heapType: HeapTypeRef): number {
    return binaryen["_BinaryenStructTypeGetNumFields"](heapType);
  }

  static structMemberType(heapType: HeapTypeRef, index: number): Type {
    return binaryen["_BinaryenStructTypeGetFieldType"](heapType, index);
  }

  readonly ref: TypeBuilderRef;

  constructor(slots: number) {
    this.ref = binaryen["_TypeBuilderCreate"](slots);
  }

  setArrayType(slot: number, elementType: FieldType): TypeBuilder {
    binaryen["_TypeBuilderSetArrayType"](
      this.ref,
      slot,
      elementType.type,
      elementType.packedType,
      elementType.mutable
    );
    return this;
  }

  setStructType(slot: number, fieldTypes: FieldType[]): TypeBuilder {
    const types = binaryen._malloc(4 * fieldTypes.length);
    const packedTypes = binaryen._malloc(4 * fieldTypes.length);
    // assume sizeof(bool) is 1
    const mutables = binaryen._malloc(fieldTypes.length);
    let typesPtr = types,
      packedTypesPtr = packedTypes,
      mutablesPtr = mutables;
    fieldTypes.forEach((field) => {
      binaryen.__i32_store(typesPtr, field.type);
      typesPtr += 4;
      binaryen.__i32_store(packedTypesPtr, field.packedType);
      packedTypesPtr += 4;
      binaryen.__i32_store(mutablesPtr, field.mutable ? 1 : 0);
      mutablesPtr++;
    });
    binaryen["_TypeBuilderSetStructType"](
      this.ref,
      slot,
      types,
      packedTypes,
      mutables,
      fieldTypes.length
    );
    binaryen._free(mutables);
    binaryen._free(packedTypes);
    binaryen._free(types);
    return this;
  }

  getTempHeapType(slot: number): HeapTypeRef {
    return binaryen["_TypeBuilderGetTempHeapType"](this.ref, slot);
  }

  buildAndDispose(): TypeBuilderResult {
    const size = binaryen["_TypeBuilderGetSize"](this.ref) as number;
    const ptr = binaryen._malloc(4 + 4 + 4 * size); // assume 4-bytes memory reference
    const errorIndexPtr = ptr;
    const errorReasonPtr = ptr + 4;
    const heapTypesPtr = ptr + 8;
    const ok = binaryen["_TypeBuilderBuildAndDispose"](
      this.ref,
      heapTypesPtr,
      errorIndexPtr,
      errorReasonPtr
    );
    const errorIndex = binaryen.__i32_load(errorIndexPtr);
    const errorReason = binaryen.__i32_load(errorReasonPtr);
    const heapTypes: HeapTypeRef[] = [];
    if (ok) {
      for (let i = 0, offset = heapTypesPtr; i < size; i++, offset += 4) {
        const type = binaryen.__i32_load(offset);
        heapTypes.push(type);
      }
    }
    binaryen._free(ptr);
    return { heapTypes, errorIndex, errorReason };
  }
}

function strToStack(str: string) {
  return str ? binaryen.allocateUTF8OnStack(str) : 0;
}

export const gc = {
  arrays: {
    newFromInit: (
      mod: Module,
      heapType: HeapTypeRef,
      size: binaryen.ExpressionRef,
      init: ExpressionRef
    ): ExpressionRef => {
      return binaryen._BinaryenArrayNew(mod.ptr, heapType, size, init);
    },
    newFromData: (
      mod: Module,
      heapType: HeapTypeRef,
      name: string,
      offset: ExpressionRef,
      size: ExpressionRef
    ): ExpressionRef =>
      binaryen._BinaryenArrayNewData(
        mod.ptr,
        heapType,
        strToStack(name),
        offset,
        size
      ),
    newFromItems: (
      mod: Module,
      heapType: HeapTypeRef,
      values: ExpressionRef[]
    ): ExpressionRef => {
      const ptr = binaryen._malloc(Math.max(8, values.length * 4));
      let offset = ptr;
      values.forEach((value) => {
        binaryen.__i32_store(offset, value);
        offset += 4;
      });
      const result = binaryen["_BinaryenArrayNewFixed"](
        mod.ptr,
        heapType,
        ptr,
        values.length
      );
      binaryen._free(ptr);
      return result;
    },
    copy: (
      mod: Module,
      destArray: ExpressionRef,
      destItem: ExpressionRef,
      srcArray: ExpressionRef,
      srcItem: ExpressionRef,
      numItems: ExpressionRef
    ): ExpressionRef =>
      binaryen["_BinaryenArrayCopy"](
        mod.ptr,
        destArray,
        destItem,
        srcArray,
        srcItem,
        numItems
      ),
    getItem: (
      mod: Module,
      array: ExpressionRef,
      item: ExpressionRef,
      type: number,
      signed: boolean
    ): ExpressionRef =>
      binaryen["_BinaryenArrayGet"](mod.ptr, array, item, type, signed),
    setItem: (
      mod: Module,
      array: ExpressionRef,
      index: ExpressionRef,
      value: ExpressionRef
    ): ExpressionRef =>
      binaryen["_BinaryenArraySet"](mod.ptr, array, index, value),
    length: (mod: Module, array: ExpressionRef): ExpressionRef =>
      binaryen["_BinaryenArrayLen"](mod.ptr, array),
  },
  structs: {
    newFromFields: (
      mod: Module,
      heapType: HeapTypeRef,
      values: ExpressionRef[]
    ): ExpressionRef => {
      const ptr = binaryen._malloc(4 * values.length);
      let offset = ptr;
      values.forEach((value) => {
        binaryen.__i32_store(offset, value);
        offset += 4;
      });
      const result = binaryen["_BinaryenStructNew"](
        mod.ptr,
        ptr,
        values.length,
        heapType
      );
      binaryen._free(ptr);
      return result;
    },
    getMember: (
      mod: Module,
      struct: ExpressionRef,
      memberIndex: number,
      resultType: number,
      signed: boolean
    ) =>
      binaryen["_BinaryenStructGet"](
        mod.ptr,
        memberIndex,
        struct,
        resultType,
        signed
      ),
    setMember: (
      mod: Module,
      struct: ExpressionRef,
      memberIndex: number,
      value: ExpressionRef
    ) => binaryen["_BinaryenStructSet"](mod.ptr, memberIndex, struct, value),
  },
};
