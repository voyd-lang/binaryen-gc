/**
 * @fileoverview This is a custom port of
 * https://github.com/WebAssembly/bin/blob/e6bbbc1cadce319eacec6ac6ebbd71d86f3d1082/src/ts/bin.ts#L2269
 */

import binaryen from "binaryen";
import {
  AugmentedBinaryen,
  ExpressionRef,
  HeapTypeRef,
  PackedType,
  Type,
  TypeBuilderRef,
} from "./types";

const bin = binaryen as AugmentedBinaryen;

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
    return bin["_BinaryenTypeFromHeapType"](heapType, nullable);
  }

  static heapTypeFromType(type: Type): HeapTypeRef {
    return bin["_BinaryenTypeGetHeapType"](type);
  }

  static arrayElementType(heapType: HeapTypeRef): Type {
    return bin["_BinaryenArrayTypeGetElementType"](heapType);
  }

  static structMemberCount(heapType: HeapTypeRef): number {
    return bin["_BinaryenStructTypeGetNumFields"](heapType);
  }

  static structMemberType(heapType: HeapTypeRef, index: number): Type {
    return bin["_BinaryenStructTypeGetFieldType"](heapType, index);
  }

  readonly ref: TypeBuilderRef;

  constructor(slots: number) {
    this.ref = bin["_TypeBuilderCreate"](slots);
  }

  setArrayType(slot: number, elementType: FieldType): TypeBuilder {
    bin["_TypeBuilderSetArrayType"](
      this.ref,
      slot,
      elementType.type,
      elementType.packedType,
      elementType.mutable
    );
    return this;
  }

  setStructType(slot: number, fieldTypes: FieldType[]): TypeBuilder {
    const types = bin._malloc(4 * fieldTypes.length);
    const packedTypes = bin._malloc(4 * fieldTypes.length);
    // assume sizeof(bool) is 1
    const mutables = bin._malloc(fieldTypes.length);
    let typesPtr = types,
      packedTypesPtr = packedTypes,
      mutablesPtr = mutables;
    fieldTypes.forEach((field) => {
      bin.__i32_store(typesPtr, field.type);
      typesPtr += 4;
      bin.__i32_store(packedTypesPtr, field.packedType);
      packedTypesPtr += 4;
      bin.__i32_store(mutablesPtr, field.mutable ? 1 : 0);
      mutablesPtr++;
    });
    bin["_TypeBuilderSetStructType"](
      this.ref,
      slot,
      types,
      packedTypes,
      mutables,
      fieldTypes.length
    );
    bin._free(mutables);
    bin._free(packedTypes);
    bin._free(types);
    return this;
  }

  getTempHeapType(slot: number): HeapTypeRef {
    return bin["_TypeBuilderGetTempHeapType"](this.ref, slot);
  }

  buildAndDispose(): TypeBuilderResult {
    const size = bin["_TypeBuilderGetSize"](this.ref) as number;
    const ptr = bin._malloc(4 + 4 + 4 * size); // assume 4-bytes memory reference
    const errorIndexPtr = ptr;
    const errorReasonPtr = ptr + 4;
    const heapTypesPtr = ptr + 8;
    const ok = bin["_TypeBuilderBuildAndDispose"](
      this.ref,
      heapTypesPtr,
      errorIndexPtr,
      errorReasonPtr
    );
    const errorIndex = bin.__i32_load(errorIndexPtr);
    const errorReason = bin.__i32_load(errorReasonPtr);
    const heapTypes: HeapTypeRef[] = [];
    if (ok) {
      for (let i = 0, offset = heapTypesPtr; i < size; i++, offset += 4) {
        const type = bin.__i32_load(offset);
        heapTypes.push(type);
      }
    }
    bin._free(ptr);
    return { heapTypes, errorIndex, errorReason };
  }
}

function strToStack(str: string) {
  return str ? bin.allocateUTF8OnStack(str) : 0;
}

export const gc = {
  arrays: {
    newFromInit: (
      mod: Module,
      heapType: HeapTypeRef,
      size: bin.ExpressionRef,
      init: ExpressionRef
    ): ExpressionRef => {
      return bin._BinaryenArrayNew(mod.ptr, heapType, size, init);
    },
    newFromData: (
      mod: Module,
      heapType: HeapTypeRef,
      name: string,
      offset: ExpressionRef,
      size: ExpressionRef
    ): ExpressionRef =>
      bin._BinaryenArrayNewData(
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
      const ptr = bin._malloc(Math.max(8, values.length * 4));
      let offset = ptr;
      values.forEach((value) => {
        bin.__i32_store(offset, value);
        offset += 4;
      });
      const result = bin["_BinaryenArrayNewFixed"](
        mod.ptr,
        heapType,
        ptr,
        values.length
      );
      bin._free(ptr);
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
      bin["_BinaryenArrayCopy"](
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
      bin["_BinaryenArrayGet"](mod.ptr, array, item, type, signed),
    setItem: (
      mod: Module,
      array: ExpressionRef,
      index: ExpressionRef,
      value: ExpressionRef
    ): ExpressionRef => bin["_BinaryenArraySet"](mod.ptr, array, index, value),
    length: (mod: Module, array: ExpressionRef): ExpressionRef =>
      bin["_BinaryenArrayLen"](mod.ptr, array),
  },
  structs: {
    newFromFields: (
      mod: Module,
      heapType: HeapTypeRef,
      values: ExpressionRef[]
    ): ExpressionRef => {
      const ptr = bin._malloc(4 * values.length);
      let offset = ptr;
      values.forEach((value) => {
        bin.__i32_store(offset, value);
        offset += 4;
      });
      const result = bin["_BinaryenStructNew"](
        mod.ptr,
        ptr,
        values.length,
        heapType
      );
      bin._free(ptr);
      return result;
    },
    getMember: (
      mod: Module,
      struct: ExpressionRef,
      memberIndex: number,
      resultType: number,
      signed: boolean
    ) =>
      bin["_BinaryenStructGet"](
        mod.ptr,
        memberIndex,
        struct,
        resultType,
        signed
      ),
    setMember: (
      mod: binaryen.Module,
      struct: ExpressionRef,
      memberIndex: number,
      value: ExpressionRef
    ) => bin["_BinaryenStructSet"](mod.ptr, memberIndex, struct, value),
  },
};
