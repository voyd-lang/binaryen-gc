# Binaryen GC

Contains tools necessary for using Binaryen's GC API with javascript.

Includes a `TypeBuilder` for defining gc `struct` and `array` types, as well
as a `gc` namespace for initializing and interacting said types.

Not affiliated with the official Binaryen project.

The bulk of this repo is a modified port of code from [this PR to add support For GC to Binaryen JS](https://github.com/WebAssembly/binaryen/pull/6192). [Permalink](https://github.com/WebAssembly/binaryen/blob/e6bbbc1cadce319eacec6ac6ebbd71d86f3d1082/src/ts/binaryen.ts#L2269).

Inspiration was also taken from AssemblyScript's internal binaryen library
and this [comment](https://github.com/WebAssembly/binaryen/issues/5921#issuecomment-1838961862).

## API

See `./src/index.ts` for the full API.

## Example Usage

```typescript
import { TypeBuilder, gc } from "binaryen-gc";
import binaryen from "binaryen";

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
  binaryen.structref(),
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
  binaryen.structref(),
  [],
  mod.call("getVec", [], binaryen.structref())
);

mod.addFunctionExport("main", "main");

mod.autoDrop();

mod.validate();

console.log(mod.emitText());
```
