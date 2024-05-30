import { TypeBuilder, gc } from "./gc.mjs";
import binaryen from "binaryen";

export function internalTest() {
  // Simple Vec type { x: i32, y: i32, z: i32 }
  const builder = new TypeBuilder(1);
  builder.setStructType(0, [
    { type: binaryen.i32, packedType: 0, mutable: false },
    { type: binaryen.i32, packedType: 0, mutable: false },
    { type: binaryen.i32, packedType: 0, mutable: false },
  ]);
  const types = builder.buildAndDispose();

  const vecType = types.heapTypes[0];

  // Simple module with a function that returns a Vec, and a main function that reads the x value
  const mod = new binaryen.Module();
  mod.setFeatures(binaryen.Features.All);

  // Simple function that returns a Vec
  mod.addFunction(
    "getVec",
    binaryen.none,
    binaryen._BinaryenTypeStructref(),
    [],
    mod.block(
      null,
      [
        gc.structs.newFromFields(mod, vecType, [
          mod.i32.const(1),
          mod.i32.const(2),
          mod.i32.const(3),
        ]),
      ],
      binaryen.auto
    )
  );

  // // Main function that reads the x value of the Vec
  mod.addFunction(
    "main",
    binaryen.none,
    binaryen._BinaryenTypeStructref(),
    [],
    mod.call("getVec", [], binaryen._BinaryenTypeStructref())
  );

  mod.addFunctionExport("main", "main");

  mod.autoDrop();

  mod.validate();

  console.log(mod.emitText());
}

// export function internalTest() {
//   const module = new binaryen.Module();
//   module.setFeatures(binaryen.Features.All);

//   function allocU32Array(u32s: number[]): number {
//     const { length } = u32s;
//     const ptr = binaryen._malloc(length << 2);
//     let offset = ptr;
//     for (let i = 0; i < length; i++) {
//       const value = u32s[i];
//       binaryen.__i32_store(offset, value);
//       offset += 4;
//     }
//     return ptr;
//   }

//   const tempStructIndex = 0;
//   const typeBuilder = binaryen._TypeBuilderCreate(1);
//   // I always use temps so that I can potentially create recursive types.
//   const tempStructHeapType = binaryen._TypeBuilderGetTempHeapType(
//     typeBuilder,
//     tempStructIndex
//   );

//   const fieldTypes = [binaryen.i32];
//   const cFieldTypes = allocU32Array(fieldTypes);
//   const cFieldPackedTypes = allocU32Array(
//     fieldTypes.map(() => binaryen._BinaryenPackedTypeNotPacked())
//   );
//   const cFieldMutables = allocU32Array(fieldTypes.map(() => 0));
//   binaryen._TypeBuilderSetStructType(
//     typeBuilder,
//     tempStructIndex,
//     cFieldTypes,
//     cFieldPackedTypes,
//     cFieldMutables,
//     fieldTypes.length
//   );
//   binaryen._free(cFieldTypes);
//   binaryen._free(cFieldPackedTypes);
//   binaryen._free(cFieldMutables);

//   const size = binaryen._TypeBuilderGetSize(typeBuilder);
//   const out = binaryen._malloc(Math.max(4 * size, 8));
//   if (!binaryen._TypeBuilderBuildAndDispose(typeBuilder, out, out, out + 4)) {
//     binaryen._free(out);
//     throw new Error("_TypeBuilderBuildAndDispose failed");
//   }
//   // const structHeapType = binaryen.__i32_load(out + 4 * tempStructIndex);
//   // const structBinaryenType = binaryen._BinaryenTypeFromHeapType(structHeapType, false);
//   // const signatureHeapType = binaryen.__i32_load(out + 4 * tempSignatureIndex);
//   binaryen._free(out);

//   const structNewArgs = allocU32Array([module.i32.const(1337)]);
//   const structNew = binaryen._BinaryenStructNew(
//     module.ptr,
//     structNewArgs,
//     1,
//     tempStructHeapType
//   );
//   binaryen._free(structNewArgs);

//   module.addFunction(
//     "_start",
//     binaryen.createType([]),
//     binaryen._BinaryenTypeStructref(),
//     [],
//     structNew
//   );

//   module.addFunctionExport("_start", "_start");

//   module.validate();

//   console.log(module.emitText());
// }
