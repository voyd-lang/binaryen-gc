declare module "binaryen" {
  type Type = number;

  const none: Type;
  const i32: Type;
  const i64: Type;
  const f32: Type;
  const f64: Type;
  const v128: Type;
  const funcref: Type;
  const externref: Type;
  const anyref: Type;
  const eqref: Type;
  const i31ref: Type;
  const dataref: Type;
  const stringref: Type;
  const stringview_wtf8: Type;
  const stringview_wtf16: Type;
  const stringview_iter: Type;
  const unreachable: Type;
  const auto: Type;

  function createType(types: Type[]): Type;
  function expandType(type: Type): Type[];

  const enum ExpressionIds {
    Invalid,
    Block,
    If,
    Loop,
    Break,
    Switch,
    Call,
    CallIndirect,
    LocalGet,
    LocalSet,
    GlobalGet,
    GlobalSet,
    Load,
    Store,
    Const,
    Unary,
    Binary,
    Select,
    Drop,
    Return,
    MemorySize,
    MemoryGrow,
    Nop,
    Unreachable,
    AtomicCmpxchg,
    AtomicRMW,
    AtomicWait,
    AtomicNotify,
    AtomicFence,
    SIMDExtract,
    SIMDReplace,
    SIMDShuffle,
    SIMDTernary,
    SIMDShift,
    SIMDLoad,
    MemoryInit,
    DataDrop,
    MemoryCopy,
    MemoryFill,
    RefNull,
    RefIsNull,
    RefFunc,
    RefEq,
    Try,
    Throw,
    Rethrow,
    TupleMake,
    TupleExtract,
    Pop,
    I31New,
    I31Get,
    CallRef,
    RefTest,
    RefCast,
    BrOnCast,
    RttCanon,
    RttSub,
    StructNew,
    StructGet,
    StructSet,
    ArrayNew,
    ArrayGet,
    ArraySet,
    ArrayLen,
  }

  const InvalidId: ExpressionIds;
  const BlockId: ExpressionIds;
  const IfId: ExpressionIds;
  const LoopId: ExpressionIds;
  const BreakId: ExpressionIds;
  const SwitchId: ExpressionIds;
  const CallId: ExpressionIds;
  const CallIndirectId: ExpressionIds;
  const LocalGetId: ExpressionIds;
  const LocalSetId: ExpressionIds;
  const GlobalGetId: ExpressionIds;
  const GlobalSetId: ExpressionIds;
  const TableGetId: ExpressionIds;
  const TableSetId: ExpressionIds;
  const TableSizeId: ExpressionIds;
  const TableGrowId: ExpressionIds;
  const LoadId: ExpressionIds;
  const StoreId: ExpressionIds;
  const ConstId: ExpressionIds;
  const UnaryId: ExpressionIds;
  const BinaryId: ExpressionIds;
  const SelectId: ExpressionIds;
  const DropId: ExpressionIds;
  const ReturnId: ExpressionIds;
  const NopId: ExpressionIds;
  const UnreachableId: ExpressionIds;
  const PopId: ExpressionIds;
  const MemorySizeId: ExpressionIds;
  const MemoryGrowId: ExpressionIds;
  const AtomicRMWId: ExpressionIds;
  const AtomicCmpxchgId: ExpressionIds;
  const AtomicWaitId: ExpressionIds;
  const AtomicNotifyId: ExpressionIds;
  const AtomicFenceId: ExpressionIds;
  const SIMDExtractId: ExpressionIds;
  const SIMDReplaceId: ExpressionIds;
  const SIMDShuffleId: ExpressionIds;
  const SIMDTernaryId: ExpressionIds;
  const SIMDShiftId: ExpressionIds;
  const SIMDLoadId: ExpressionIds;
  const SIMDLoadStoreLaneId: ExpressionIds;
  const MemoryInitId: ExpressionIds;
  const DataDropId: ExpressionIds;
  const MemoryCopyId: ExpressionIds;
  const MemoryFillId: ExpressionIds;
  const RefNullId: ExpressionIds;
  const RefIsId: ExpressionIds;
  const RefAsId: ExpressionIds;
  const RefFuncId: ExpressionIds;
  const RefEqId: ExpressionIds;
  const TryId: ExpressionIds;
  const ThrowId: ExpressionIds;
  const RethrowId: ExpressionIds;
  const TupleMakeId: ExpressionIds;
  const TupleExtractId: ExpressionIds;
  const I31NewId: ExpressionIds;
  const I31GetId: ExpressionIds;
  const CallRefId: ExpressionIds;
  const RefTestId: ExpressionIds;
  const RefCastId: ExpressionIds;
  const BrOnCastId: ExpressionIds;
  const RttCanonId: ExpressionIds;
  const RttSubId: ExpressionIds;
  const StructNewId: ExpressionIds;
  const StructGetId: ExpressionIds;
  const StructSetId: ExpressionIds;
  const ArrayNewId: ExpressionIds;
  const ArrayGetId: ExpressionIds;
  const ArraySetId: ExpressionIds;
  const ArrayLenId: ExpressionIds;

  const enum ExternalKinds {
    Function,
    Table,
    Memory,
    Global,
    Tag,
  }

  const ExternalFunction: ExternalKinds;
  const ExternalTable: ExternalKinds;
  const ExternalMemory: ExternalKinds;
  const ExternalGlobal: ExternalKinds;
  const ExternalTag: ExternalKinds;

  enum Features {
    MVP,
    Atomics,
    BulkMemory,
    MutableGlobals,
    NontrappingFPToInt,
    SignExt,
    SIMD128,
    ExceptionHandling,
    TailCall,
    ReferenceTypes,
    Multivalue,
    GC,
    Memory64,
    RelaxedSIMD,
    ExtendedConst,
    Strings,
    All,
  }

  const enum Operations {
    ClzInt32,
    CtzInt32,
    PopcntInt32,
    NegFloat32,
    AbsFloat32,
    CeilFloat32,
    FloorFloat32,
    TruncFloat32,
    NearestFloat32,
    SqrtFloat32,
    EqZInt32,
    ClzInt64,
    CtzInt64,
    PopcntInt64,
    NegFloat64,
    AbsFloat64,
    CeilFloat64,
    FloorFloat64,
    TruncFloat64,
    NearestFloat64,
    SqrtFloat64,
    EqZInt64,
    ExtendSInt32,
    ExtendUInt32,
    WrapInt64,
    TruncSFloat32ToInt32,
    TruncSFloat32ToInt64,
    TruncUFloat32ToInt32,
    TruncUFloat32ToInt64,
    TruncSFloat64ToInt32,
    TruncSFloat64ToInt64,
    TruncUFloat64ToInt32,
    TruncUFloat64ToInt64,
    TruncSatSFloat32ToInt32,
    TruncSatSFloat32ToInt64,
    TruncSatUFloat32ToInt32,
    TruncSatUFloat32ToInt64,
    TruncSatSFloat64ToInt32,
    TruncSatSFloat64ToInt64,
    TruncSatUFloat64ToInt32,
    TruncSatUFloat64ToInt64,
    ReinterpretFloat32,
    ReinterpretFloat64,
    ConvertSInt32ToFloat32,
    ConvertSInt32ToFloat64,
    ConvertUInt32ToFloat32,
    ConvertUInt32ToFloat64,
    ConvertSInt64ToFloat32,
    ConvertSInt64ToFloat64,
    ConvertUInt64ToFloat32,
    ConvertUInt64ToFloat64,
    PromoteFloat32,
    DemoteFloat64,
    ReinterpretInt32,
    ReinterpretInt64,
    ExtendS8Int32,
    ExtendS16Int32,
    ExtendS8Int64,
    ExtendS16Int64,
    ExtendS32Int64,
    AddInt32,
    SubInt32,
    MulInt32,
    DivSInt32,
    DivUInt32,
    RemSInt32,
    RemUInt32,
    AndInt32,
    OrInt32,
    XorInt32,
    ShlInt32,
    ShrUInt32,
    ShrSInt32,
    RotLInt32,
    RotRInt32,
    EqInt32,
    NeInt32,
    LtSInt32,
    LtUInt32,
    LeSInt32,
    LeUInt32,
    GtSInt32,
    GtUInt32,
    GeSInt32,
    GeUInt32,
    AddInt64,
    SubInt64,
    MulInt64,
    DivSInt64,
    DivUInt64,
    RemSInt64,
    RemUInt64,
    AndInt64,
    OrInt64,
    XorInt64,
    ShlInt64,
    ShrUInt64,
    ShrSInt64,
    RotLInt64,
    RotRInt64,
    EqInt64,
    NeInt64,
    LtSInt64,
    LtUInt64,
    LeSInt64,
    LeUInt64,
    GtSInt64,
    GtUInt64,
    GeSInt64,
    GeUInt64,
    AddFloat32,
    SubFloat32,
    MulFloat32,
    DivFloat32,
    CopySignFloat32,
    MinFloat32,
    MaxFloat32,
    EqFloat32,
    NeFloat32,
    LtFloat32,
    LeFloat32,
    GtFloat32,
    GeFloat32,
    AddFloat64,
    SubFloat64,
    MulFloat64,
    DivFloat64,
    CopySignFloat64,
    MinFloat64,
    MaxFloat64,
    EqFloat64,
    NeFloat64,
    LtFloat64,
    LeFloat64,
    GtFloat64,
    GeFloat64,
    AtomicRMWAdd,
    AtomicRMWSub,
    AtomicRMWAnd,
    AtomicRMWOr,
    AtomicRMWXor,
    AtomicRMWXchg,
    SplatVecI8x16,
    ExtractLaneSVecI8x16,
    ExtractLaneUVecI8x16,
    ReplaceLaneVecI8x16,
    SplatVecI16x8,
    ExtractLaneSVecI16x8,
    ExtractLaneUVecI16x8,
    ReplaceLaneVecI16x8,
    SplatVecI32x4,
    ExtractLaneVecI32x4,
    ReplaceLaneVecI32x4,
    SplatVecI64x2,
    ExtractLaneVecI64x2,
    ReplaceLaneVecI64x2,
    SplatVecF32x4,
    ExtractLaneVecF32x4,
    ReplaceLaneVecF32x4,
    SplatVecF64x2,
    ExtractLaneVecF64x2,
    ReplaceLaneVecF64x2,
    EqVecI8x16,
    NeVecI8x16,
    LtSVecI8x16,
    LtUVecI8x16,
    GtSVecI8x16,
    GtUVecI8x16,
    LeSVecI8x16,
    LeUVecI8x16,
    GeSVecI8x16,
    GeUVecI8x16,
    EqVecI16x8,
    NeVecI16x8,
    LtSVecI16x8,
    LtUVecI16x8,
    GtSVecI16x8,
    GtUVecI16x8,
    LeSVecI16x8,
    LeUVecI16x8,
    GeSVecI16x8,
    GeUVecI16x8,
    EqVecI32x4,
    NeVecI32x4,
    LtSVecI32x4,
    LtUVecI32x4,
    GtSVecI32x4,
    GtUVecI32x4,
    LeSVecI32x4,
    LeUVecI32x4,
    GeSVecI32x4,
    GeUVecI32x4,
    EqVecI64x2,
    NeVecI64x2,
    LtSVecI64x2,
    GtSVecI64x2,
    LeSVecI64x2,
    GeSVecI64x2,
    EqVecF32x4,
    NeVecF32x4,
    LtVecF32x4,
    GtVecF32x4,
    LeVecF32x4,
    GeVecF32x4,
    EqVecF64x2,
    NeVecF64x2,
    LtVecF64x2,
    GtVecF64x2,
    LeVecF64x2,
    GeVecF64x2,
    NotVec128,
    AndVec128,
    OrVec128,
    XorVec128,
    AndNotVec128,
    BitselectVec128,
    AnyTrueVec128,
    PopcntVecI8x16,
    AbsVecI8x16,
    NegVecI8x16,
    AllTrueVecI8x16,
    BitmaskVecI8x16,
    ShlVecI8x16,
    ShrSVecI8x16,
    ShrUVecI8x16,
    AddVecI8x16,
    AddSatSVecI8x16,
    AddSatUVecI8x16,
    SubVecI8x16,
    SubSatSVecI8x16,
    SubSatUVecI8x16,
    MinSVecI8x16,
    MinUVecI8x16,
    MaxSVecI8x16,
    MaxUVecI8x16,
    AvgrUVecI8x16,
    AbsVecI16x8,
    NegVecI16x8,
    AllTrueVecI16x8,
    BitmaskVecI16x8,
    ShlVecI16x8,
    ShrSVecI16x8,
    ShrUVecI16x8,
    AddVecI16x8,
    AddSatSVecI16x8,
    AddSatUVecI16x8,
    SubVecI16x8,
    SubSatSVecI16x8,
    SubSatUVecI16x8,
    MulVecI16x8,
    MinSVecI16x8,
    MinUVecI16x8,
    MaxSVecI16x8,
    MaxUVecI16x8,
    AvgrUVecI16x8,
    Q15MulrSatSVecI16x8,
    ExtMulLowSVecI16x8,
    ExtMulHighSVecI16x8,
    ExtMulLowUVecI16x8,
    ExtMulHighUVecI16x8,
    DotSVecI16x8ToVecI32x4,
    ExtMulLowSVecI32x4,
    ExtMulHighSVecI32x4,
    ExtMulLowUVecI32x4,
    ExtMulHighUVecI32x4,
    AbsVecI32x4,
    NegVecI32x4,
    AllTrueVecI32x4,
    BitmaskVecI32x4,
    ShlVecI32x4,
    ShrSVecI32x4,
    ShrUVecI32x4,
    AddVecI32x4,
    SubVecI32x4,
    MulVecI32x4,
    MinSVecI32x4,
    MinUVecI32x4,
    MaxSVecI32x4,
    MaxUVecI32x4,
    AbsVecI64x2,
    NegVecI64x2,
    AllTrueVecI64x2,
    BitmaskVecI64x2,
    ShlVecI64x2,
    ShrSVecI64x2,
    ShrUVecI64x2,
    AddVecI64x2,
    SubVecI64x2,
    MulVecI64x2,
    ExtMulLowSVecI64x2,
    ExtMulHighSVecI64x2,
    ExtMulLowUVecI64x2,
    ExtMulHighUVecI64x2,
    AbsVecF32x4,
    NegVecF32x4,
    SqrtVecF32x4,
    AddVecF32x4,
    SubVecF32x4,
    MulVecF32x4,
    DivVecF32x4,
    MinVecF32x4,
    MaxVecF32x4,
    PMinVecF32x4,
    PMaxVecF32x4,
    CeilVecF32x4,
    FloorVecF32x4,
    TruncVecF32x4,
    NearestVecF32x4,
    AbsVecF64x2,
    NegVecF64x2,
    SqrtVecF64x2,
    AddVecF64x2,
    SubVecF64x2,
    MulVecF64x2,
    DivVecF64x2,
    MinVecF64x2,
    MaxVecF64x2,
    PMinVecF64x2,
    PMaxVecF64x2,
    CeilVecF64x2,
    FloorVecF64x2,
    TruncVecF64x2,
    NearestVecF64x2,
    ExtAddPairwiseSVecI8x16ToI16x8,
    ExtAddPairwiseUVecI8x16ToI16x8,
    ExtAddPairwiseSVecI16x8ToI32x4,
    ExtAddPairwiseUVecI16x8ToI32x4,
    TruncSatSVecF32x4ToVecI32x4,
    TruncSatUVecF32x4ToVecI32x4,
    ConvertSVecI32x4ToVecF32x4,
    ConvertUVecI32x4ToVecF32x4,
    Load8SplatVec128,
    Load16SplatVec128,
    Load32SplatVec128,
    Load64SplatVec128,
    Load8x8SVec128,
    Load8x8UVec128,
    Load16x4SVec128,
    Load16x4UVec128,
    Load32x2SVec128,
    Load32x2UVec128,
    Load32ZeroVec128,
    Load64ZeroVec128,
    Load8LaneVec128,
    Load16LaneVec128,
    Load32LaneVec128,
    Load64LaneVec128,
    Store8LaneVec128,
    Store16LaneVec128,
    Store32LaneVec128,
    Store64LaneVec128,
    NarrowSVecI16x8ToVecI8x16,
    NarrowUVecI16x8ToVecI8x16,
    NarrowSVecI32x4ToVecI16x8,
    NarrowUVecI32x4ToVecI16x8,
    ExtendLowSVecI8x16ToVecI16x8,
    ExtendHighSVecI8x16ToVecI16x8,
    ExtendLowUVecI8x16ToVecI16x8,
    ExtendHighUVecI8x16ToVecI16x8,
    ExtendLowSVecI16x8ToVecI32x4,
    ExtendHighSVecI16x8ToVecI32x4,
    ExtendLowUVecI16x8ToVecI32x4,
    ExtendHighUVecI16x8ToVecI32x4,
    ExtendLowSVecI32x4ToVecI64x2,
    ExtendHighSVecI32x4ToVecI64x2,
    ExtendLowUVecI32x4ToVecI64x2,
    ExtendHighUVecI32x4ToVecI64x2,
    ConvertLowSVecI32x4ToVecF64x2,
    ConvertLowUVecI32x4ToVecF64x2,
    TruncSatZeroSVecF64x2ToVecI32x4,
    TruncSatZeroUVecF64x2ToVecI32x4,
    DemoteZeroVecF64x2ToVecF32x4,
    PromoteLowVecF32x4ToVecF64x2,
    SwizzleVecI8x16,
    RefIsNull,
    RefIsFunc,
    RefIsData,
    RefIsI31,
    RefAsNonNull,
    RefAsFunc,
    RefAsData,
    RefAsI31,
  }

  const ClzInt32: Operations;
  const CtzInt32: Operations;
  const PopcntInt32: Operations;
  const NegFloat32: Operations;
  const AbsFloat32: Operations;
  const CeilFloat32: Operations;
  const FloorFloat32: Operations;
  const TruncFloat32: Operations;
  const NearestFloat32: Operations;
  const SqrtFloat32: Operations;
  const EqZInt32: Operations;
  const ClzInt64: Operations;
  const CtzInt64: Operations;
  const PopcntInt64: Operations;
  const NegFloat64: Operations;
  const AbsFloat64: Operations;
  const CeilFloat64: Operations;
  const FloorFloat64: Operations;
  const TruncFloat64: Operations;
  const NearestFloat64: Operations;
  const SqrtFloat64: Operations;
  const EqZInt64: Operations;
  const ExtendSInt32: Operations;
  const ExtendUInt32: Operations;
  const WrapInt64: Operations;
  const TruncSFloat32ToInt32: Operations;
  const TruncSFloat32ToInt64: Operations;
  const TruncUFloat32ToInt32: Operations;
  const TruncUFloat32ToInt64: Operations;
  const TruncSFloat64ToInt32: Operations;
  const TruncSFloat64ToInt64: Operations;
  const TruncUFloat64ToInt32: Operations;
  const TruncUFloat64ToInt64: Operations;
  const TruncSatSFloat32ToInt32: Operations;
  const TruncSatSFloat32ToInt64: Operations;
  const TruncSatUFloat32ToInt32: Operations;
  const TruncSatUFloat32ToInt64: Operations;
  const TruncSatSFloat64ToInt32: Operations;
  const TruncSatSFloat64ToInt64: Operations;
  const TruncSatUFloat64ToInt32: Operations;
  const TruncSatUFloat64ToInt64: Operations;
  const ReinterpretFloat32: Operations;
  const ReinterpretFloat64: Operations;
  const ConvertSInt32ToFloat32: Operations;
  const ConvertSInt32ToFloat64: Operations;
  const ConvertUInt32ToFloat32: Operations;
  const ConvertUInt32ToFloat64: Operations;
  const ConvertSInt64ToFloat32: Operations;
  const ConvertSInt64ToFloat64: Operations;
  const ConvertUInt64ToFloat32: Operations;
  const ConvertUInt64ToFloat64: Operations;
  const PromoteFloat32: Operations;
  const DemoteFloat64: Operations;
  const ReinterpretInt32: Operations;
  const ReinterpretInt64: Operations;
  const ExtendS8Int32: Operations;
  const ExtendS16Int32: Operations;
  const ExtendS8Int64: Operations;
  const ExtendS16Int64: Operations;
  const ExtendS32Int64: Operations;
  const AddInt32: Operations;
  const SubInt32: Operations;
  const MulInt32: Operations;
  const DivSInt32: Operations;
  const DivUInt32: Operations;
  const RemSInt32: Operations;
  const RemUInt32: Operations;
  const AndInt32: Operations;
  const OrInt32: Operations;
  const XorInt32: Operations;
  const ShlInt32: Operations;
  const ShrUInt32: Operations;
  const ShrSInt32: Operations;
  const RotLInt32: Operations;
  const RotRInt32: Operations;
  const EqInt32: Operations;
  const NeInt32: Operations;
  const LtSInt32: Operations;
  const LtUInt32: Operations;
  const LeSInt32: Operations;
  const LeUInt32: Operations;
  const GtSInt32: Operations;
  const GtUInt32: Operations;
  const GeSInt32: Operations;
  const GeUInt32: Operations;
  const AddInt64: Operations;
  const SubInt64: Operations;
  const MulInt64: Operations;
  const DivSInt64: Operations;
  const DivUInt64: Operations;
  const RemSInt64: Operations;
  const RemUInt64: Operations;
  const AndInt64: Operations;
  const OrInt64: Operations;
  const XorInt64: Operations;
  const ShlInt64: Operations;
  const ShrUInt64: Operations;
  const ShrSInt64: Operations;
  const RotLInt64: Operations;
  const RotRInt64: Operations;
  const EqInt64: Operations;
  const NeInt64: Operations;
  const LtSInt64: Operations;
  const LtUInt64: Operations;
  const LeSInt64: Operations;
  const LeUInt64: Operations;
  const GtSInt64: Operations;
  const GtUInt64: Operations;
  const GeSInt64: Operations;
  const GeUInt64: Operations;
  const AddFloat32: Operations;
  const SubFloat32: Operations;
  const MulFloat32: Operations;
  const DivFloat32: Operations;
  const CopySignFloat32: Operations;
  const MinFloat32: Operations;
  const MaxFloat32: Operations;
  const EqFloat32: Operations;
  const NeFloat32: Operations;
  const LtFloat32: Operations;
  const LeFloat32: Operations;
  const GtFloat32: Operations;
  const GeFloat32: Operations;
  const AddFloat64: Operations;
  const SubFloat64: Operations;
  const MulFloat64: Operations;
  const DivFloat64: Operations;
  const CopySignFloat64: Operations;
  const MinFloat64: Operations;
  const MaxFloat64: Operations;
  const EqFloat64: Operations;
  const NeFloat64: Operations;
  const LtFloat64: Operations;
  const LeFloat64: Operations;
  const GtFloat64: Operations;
  const GeFloat64: Operations;
  const AtomicRMWAdd: Operations;
  const AtomicRMWSub: Operations;
  const AtomicRMWAnd: Operations;
  const AtomicRMWOr: Operations;
  const AtomicRMWXor: Operations;
  const AtomicRMWXchg: Operations;
  const SplatVecI8x16: Operations;
  const ExtractLaneSVecI8x16: Operations;
  const ExtractLaneUVecI8x16: Operations;
  const ReplaceLaneVecI8x16: Operations;
  const SplatVecI16x8: Operations;
  const ExtractLaneSVecI16x8: Operations;
  const ExtractLaneUVecI16x8: Operations;
  const ReplaceLaneVecI16x8: Operations;
  const SplatVecI32x4: Operations;
  const ExtractLaneVecI32x4: Operations;
  const ReplaceLaneVecI32x4: Operations;
  const SplatVecI64x2: Operations;
  const ExtractLaneVecI64x2: Operations;
  const ReplaceLaneVecI64x2: Operations;
  const SplatVecF32x4: Operations;
  const ExtractLaneVecF32x4: Operations;
  const ReplaceLaneVecF32x4: Operations;
  const SplatVecF64x2: Operations;
  const ExtractLaneVecF64x2: Operations;
  const ReplaceLaneVecF64x2: Operations;
  const EqVecI8x16: Operations;
  const NeVecI8x16: Operations;
  const LtSVecI8x16: Operations;
  const LtUVecI8x16: Operations;
  const GtSVecI8x16: Operations;
  const GtUVecI8x16: Operations;
  const LeSVecI8x16: Operations;
  const LeUVecI8x16: Operations;
  const GeSVecI8x16: Operations;
  const GeUVecI8x16: Operations;
  const EqVecI16x8: Operations;
  const NeVecI16x8: Operations;
  const LtSVecI16x8: Operations;
  const LtUVecI16x8: Operations;
  const GtSVecI16x8: Operations;
  const GtUVecI16x8: Operations;
  const LeSVecI16x8: Operations;
  const LeUVecI16x8: Operations;
  const GeSVecI16x8: Operations;
  const GeUVecI16x8: Operations;
  const EqVecI32x4: Operations;
  const NeVecI32x4: Operations;
  const LtSVecI32x4: Operations;
  const LtUVecI32x4: Operations;
  const GtSVecI32x4: Operations;
  const GtUVecI32x4: Operations;
  const LeSVecI32x4: Operations;
  const LeUVecI32x4: Operations;
  const GeSVecI32x4: Operations;
  const GeUVecI32x4: Operations;
  const EqVecI64x2: Operations;
  const NeVecI64x2: Operations;
  const LtSVecI64x2: Operations;
  const GtSVecI64x2: Operations;
  const LeSVecI64x2: Operations;
  const GeSVecI64x2: Operations;
  const EqVecF32x4: Operations;
  const NeVecF32x4: Operations;
  const LtVecF32x4: Operations;
  const GtVecF32x4: Operations;
  const LeVecF32x4: Operations;
  const GeVecF32x4: Operations;
  const EqVecF64x2: Operations;
  const NeVecF64x2: Operations;
  const LtVecF64x2: Operations;
  const GtVecF64x2: Operations;
  const LeVecF64x2: Operations;
  const GeVecF64x2: Operations;
  const NotVec128: Operations;
  const AndVec128: Operations;
  const OrVec128: Operations;
  const XorVec128: Operations;
  const AndNotVec128: Operations;
  const BitselectVec128: Operations;
  const AnyTrueVec128: Operations;
  const PopcntVecI8x16: Operations;
  const AbsVecI8x16: Operations;
  const NegVecI8x16: Operations;
  const AllTrueVecI8x16: Operations;
  const BitmaskVecI8x16: Operations;
  const ShlVecI8x16: Operations;
  const ShrSVecI8x16: Operations;
  const ShrUVecI8x16: Operations;
  const AddVecI8x16: Operations;
  const AddSatSVecI8x16: Operations;
  const AddSatUVecI8x16: Operations;
  const SubVecI8x16: Operations;
  const SubSatSVecI8x16: Operations;
  const SubSatUVecI8x16: Operations;
  const MinSVecI8x16: Operations;
  const MinUVecI8x16: Operations;
  const MaxSVecI8x16: Operations;
  const MaxUVecI8x16: Operations;
  const AvgrUVecI8x16: Operations;
  const AbsVecI16x8: Operations;
  const NegVecI16x8: Operations;
  const AllTrueVecI16x8: Operations;
  const BitmaskVecI16x8: Operations;
  const ShlVecI16x8: Operations;
  const ShrSVecI16x8: Operations;
  const ShrUVecI16x8: Operations;
  const AddVecI16x8: Operations;
  const AddSatSVecI16x8: Operations;
  const AddSatUVecI16x8: Operations;
  const SubVecI16x8: Operations;
  const SubSatSVecI16x8: Operations;
  const SubSatUVecI16x8: Operations;
  const MulVecI16x8: Operations;
  const MinSVecI16x8: Operations;
  const MinUVecI16x8: Operations;
  const MaxSVecI16x8: Operations;
  const MaxUVecI16x8: Operations;
  const AvgrUVecI16x8: Operations;
  const Q15MulrSatSVecI16x8: Operations;
  const ExtMulLowSVecI16x8: Operations;
  const ExtMulHighSVecI16x8: Operations;
  const ExtMulLowUVecI16x8: Operations;
  const ExtMulHighUVecI16x8: Operations;
  const DotSVecI16x8ToVecI32x4: Operations;
  const ExtMulLowSVecI32x4: Operations;
  const ExtMulHighSVecI32x4: Operations;
  const ExtMulLowUVecI32x4: Operations;
  const ExtMulHighUVecI32x4: Operations;
  const AbsVecI32x4: Operations;
  const NegVecI32x4: Operations;
  const AllTrueVecI32x4: Operations;
  const BitmaskVecI32x4: Operations;
  const ShlVecI32x4: Operations;
  const ShrSVecI32x4: Operations;
  const ShrUVecI32x4: Operations;
  const AddVecI32x4: Operations;
  const SubVecI32x4: Operations;
  const MulVecI32x4: Operations;
  const MinSVecI32x4: Operations;
  const MinUVecI32x4: Operations;
  const MaxSVecI32x4: Operations;
  const MaxUVecI32x4: Operations;
  const AbsVecI64x2: Operations;
  const NegVecI64x2: Operations;
  const AllTrueVecI64x2: Operations;
  const BitmaskVecI64x2: Operations;
  const ShlVecI64x2: Operations;
  const ShrSVecI64x2: Operations;
  const ShrUVecI64x2: Operations;
  const AddVecI64x2: Operations;
  const SubVecI64x2: Operations;
  const MulVecI64x2: Operations;
  const ExtMulLowSVecI64x2: Operations;
  const ExtMulHighSVecI64x2: Operations;
  const ExtMulLowUVecI64x2: Operations;
  const ExtMulHighUVecI64x2: Operations;
  const AbsVecF32x4: Operations;
  const NegVecF32x4: Operations;
  const SqrtVecF32x4: Operations;
  const AddVecF32x4: Operations;
  const SubVecF32x4: Operations;
  const MulVecF32x4: Operations;
  const DivVecF32x4: Operations;
  const MinVecF32x4: Operations;
  const MaxVecF32x4: Operations;
  const PMinVecF32x4: Operations;
  const PMaxVecF32x4: Operations;
  const CeilVecF32x4: Operations;
  const FloorVecF32x4: Operations;
  const TruncVecF32x4: Operations;
  const NearestVecF32x4: Operations;
  const AbsVecF64x2: Operations;
  const NegVecF64x2: Operations;
  const SqrtVecF64x2: Operations;
  const AddVecF64x2: Operations;
  const SubVecF64x2: Operations;
  const MulVecF64x2: Operations;
  const DivVecF64x2: Operations;
  const MinVecF64x2: Operations;
  const MaxVecF64x2: Operations;
  const PMinVecF64x2: Operations;
  const PMaxVecF64x2: Operations;
  const CeilVecF64x2: Operations;
  const FloorVecF64x2: Operations;
  const TruncVecF64x2: Operations;
  const NearestVecF64x2: Operations;
  const ExtAddPairwiseSVecI8x16ToI16x8: Operations;
  const ExtAddPairwiseUVecI8x16ToI16x8: Operations;
  const ExtAddPairwiseSVecI16x8ToI32x4: Operations;
  const ExtAddPairwiseUVecI16x8ToI32x4: Operations;
  const TruncSatSVecF32x4ToVecI32x4: Operations;
  const TruncSatUVecF32x4ToVecI32x4: Operations;
  const ConvertSVecI32x4ToVecF32x4: Operations;
  const ConvertUVecI32x4ToVecF32x4: Operations;
  const Load8SplatVec128: Operations;
  const Load16SplatVec128: Operations;
  const Load32SplatVec128: Operations;
  const Load64SplatVec128: Operations;
  const Load8x8SVec128: Operations;
  const Load8x8UVec128: Operations;
  const Load16x4SVec128: Operations;
  const Load16x4UVec128: Operations;
  const Load32x2SVec128: Operations;
  const Load32x2UVec128: Operations;
  const Load32ZeroVec128: Operations;
  const Load64ZeroVec128: Operations;
  const Load8LaneVec128: Operations;
  const Load16LaneVec128: Operations;
  const Load32LaneVec128: Operations;
  const Load64LaneVec128: Operations;
  const Store8LaneVec128: Operations;
  const Store16LaneVec128: Operations;
  const Store32LaneVec128: Operations;
  const Store64LaneVec128: Operations;
  const NarrowSVecI16x8ToVecI8x16: Operations;
  const NarrowUVecI16x8ToVecI8x16: Operations;
  const NarrowSVecI32x4ToVecI16x8: Operations;
  const NarrowUVecI32x4ToVecI16x8: Operations;
  const ExtendLowSVecI8x16ToVecI16x8: Operations;
  const ExtendHighSVecI8x16ToVecI16x8: Operations;
  const ExtendLowUVecI8x16ToVecI16x8: Operations;
  const ExtendHighUVecI8x16ToVecI16x8: Operations;
  const ExtendLowSVecI16x8ToVecI32x4: Operations;
  const ExtendHighSVecI16x8ToVecI32x4: Operations;
  const ExtendLowUVecI16x8ToVecI32x4: Operations;
  const ExtendHighUVecI16x8ToVecI32x4: Operations;
  const ExtendLowSVecI32x4ToVecI64x2: Operations;
  const ExtendHighSVecI32x4ToVecI64x2: Operations;
  const ExtendLowUVecI32x4ToVecI64x2: Operations;
  const ExtendHighUVecI32x4ToVecI64x2: Operations;
  const ConvertLowSVecI32x4ToVecF64x2: Operations;
  const ConvertLowUVecI32x4ToVecF64x2: Operations;
  const TruncSatZeroSVecF64x2ToVecI32x4: Operations;
  const TruncSatZeroUVecF64x2ToVecI32x4: Operations;
  const DemoteZeroVecF64x2ToVecF32x4: Operations;
  const PromoteLowVecF32x4ToVecF64x2: Operations;
  const SwizzleVecI8x16: Operations;
  const RefIsNull: Operations;
  const RefIsFunc: Operations;
  const RefIsData: Operations;
  const RefIsI31: Operations;
  const RefAsNonNull: Operations;
  const RefAsFunc: Operations;
  const RefAsData: Operations;
  const RefAsI31: Operations;

  type ElementSegmentRef = number;
  type ExpressionRef = number;
  type FunctionRef = number;
  type GlobalRef = number;
  type ExportRef = number;
  type TableRef = number;
  type TagRef = number;

  class Module {
    constructor();
    readonly ptr: number;
    block(
      label: string | null,
      children: ExpressionRef[],
      resultType?: Type
    ): ExpressionRef;
    if(
      condition: ExpressionRef,
      ifTrue: ExpressionRef,
      ifFalse?: ExpressionRef
    ): ExpressionRef;
    loop(label: string | null, body: ExpressionRef): ExpressionRef;
    br(
      label: string,
      condition?: ExpressionRef,
      value?: ExpressionRef
    ): ExpressionRef;
    br_if(
      label: string,
      condition?: ExpressionRef,
      value?: ExpressionRef
    ): ExpressionRef;
    switch(
      labels: string[],
      defaultLabel: string,
      condition: ExpressionRef,
      value?: ExpressionRef
    ): ExpressionRef;
    call(
      name: string,
      operands: ExpressionRef[],
      returnType: Type
    ): ExpressionRef;
    return_call(
      name: string,
      operands: ExpressionRef[],
      returnType: Type
    ): ExpressionRef;
    call_indirect(
      target: ExpressionRef,
      operands: ExpressionRef[],
      params: Type,
      results: Type
    ): ExpressionRef;
    return_call_indirect(
      target: ExpressionRef,
      operands: ExpressionRef[],
      params: Type,
      results: Type
    ): ExpressionRef;
    local: {
      get(index: number, type: Type): ExpressionRef;
      set(index: number, value: ExpressionRef): ExpressionRef;
      tee(index: number, value: ExpressionRef, type: Type): ExpressionRef;
    };
    global: {
      get(name: string, type: Type): ExpressionRef;
      set(name: string, value: ExpressionRef): ExpressionRef;
    };
    table: {
      get(name: string, index: ExpressionRef, type: Type): ExpressionRef;
      set(
        name: string,
        index: ExpressionRef,
        value: ExpressionRef
      ): ExpressionRef;
      size(name: string): ExpressionRef;
      grow(
        name: string,
        value: ExpressionRef,
        delta: ExpressionRef
      ): ExpressionRef;
      // TODO: init, fill, copy
    };
    memory: {
      size(name?: string, memory64?: boolean): ExpressionRef;
      grow(
        value: ExpressionRef,
        name?: string,
        memory64?: boolean
      ): ExpressionRef;
      init(
        segment: number,
        dest: ExpressionRef,
        offset: ExpressionRef,
        size: ExpressionRef,
        name?: string
      ): ExpressionRef;
      copy(
        dest: ExpressionRef,
        source: ExpressionRef,
        size: ExpressionRef,
        destName?: string,
        sourceName?: string
      ): ExpressionRef;
      fill(
        dest: ExpressionRef,
        value: ExpressionRef,
        size: ExpressionRef,
        name?: string
      ): ExpressionRef;
      atomic: {
        notify(
          ptr: ExpressionRef,
          notifyCount: ExpressionRef,
          name?: string
        ): ExpressionRef;
        wait32(
          ptr: ExpressionRef,
          expected: ExpressionRef,
          timeout: ExpressionRef,
          name?: string
        ): ExpressionRef;
        wait64(
          ptr: ExpressionRef,
          expected: ExpressionRef,
          timeout: ExpressionRef,
          name?: string
        ): ExpressionRef;
      };
    };
    data: {
      drop(segment: number): ExpressionRef;
    };
    i32: {
      load(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load8_s(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load8_u(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load16_s(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load16_u(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      store(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        value: ExpressionRef,
        name?: string
      ): ExpressionRef;
      store8(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        value: ExpressionRef,
        name?: string
      ): ExpressionRef;
      store16(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        value: ExpressionRef,
        name?: string
      ): ExpressionRef;
      const(value: number): ExpressionRef;
      clz(value: ExpressionRef): ExpressionRef;
      ctz(value: ExpressionRef): ExpressionRef;
      popcnt(value: ExpressionRef): ExpressionRef;
      eqz(value: ExpressionRef): ExpressionRef;
      trunc_s: {
        f32(value: ExpressionRef): ExpressionRef;
        f64(value: ExpressionRef): ExpressionRef;
      };
      trunc_u: {
        f32(value: ExpressionRef): ExpressionRef;
        f64(value: ExpressionRef): ExpressionRef;
      };
      trunc_s_sat: {
        f32(value: ExpressionRef): ExpressionRef;
        f64(value: ExpressionRef): ExpressionRef;
      };
      trunc_u_sat: {
        f32(value: ExpressionRef): ExpressionRef;
        f64(value: ExpressionRef): ExpressionRef;
      };
      reinterpret(value: ExpressionRef): ExpressionRef;
      extend8_s(value: ExpressionRef): ExpressionRef;
      extend16_s(value: ExpressionRef): ExpressionRef;
      wrap(value: ExpressionRef): ExpressionRef;
      add(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      sub(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      mul(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      div_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      div_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      rem_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      rem_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      and(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      or(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      xor(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      shl(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      shr_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      shr_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      rotl(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      rotr(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      eq(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ne(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      lt_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      lt_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      le_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      le_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      gt_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      gt_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ge_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ge_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      atomic: {
        load(offset: number, ptr: ExpressionRef, name?: string): ExpressionRef;
        load8_u(
          offset: number,
          ptr: ExpressionRef,
          name?: string
        ): ExpressionRef;
        load16_u(
          offset: number,
          ptr: ExpressionRef,
          name?: string
        ): ExpressionRef;
        store(
          offset: number,
          ptr: ExpressionRef,
          value: ExpressionRef,
          name?: string
        ): ExpressionRef;
        store8(
          offset: number,
          ptr: ExpressionRef,
          value: ExpressionRef,
          name?: string
        ): ExpressionRef;
        store16(
          offset: number,
          ptr: ExpressionRef,
          value: ExpressionRef,
          name?: string
        ): ExpressionRef;
        rmw: {
          add(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          sub(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          and(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          or(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          xor(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          xchg(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          cmpxchg(
            offset: number,
            ptr: ExpressionRef,
            expected: ExpressionRef,
            replacement: ExpressionRef,
            name?: string
          ): ExpressionRef;
        };
        rmw8_u: {
          add(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          sub(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          and(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          or(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          xor(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          xchg(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          cmpxchg(
            offset: number,
            ptr: ExpressionRef,
            expected: ExpressionRef,
            replacement: ExpressionRef,
            name?: string
          ): ExpressionRef;
        };
        rmw16_u: {
          add(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          sub(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          and(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          or(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          xor(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          xchg(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          cmpxchg(
            offset: number,
            ptr: ExpressionRef,
            expected: ExpressionRef,
            replacement: ExpressionRef,
            name?: string
          ): ExpressionRef;
        };
      };
      pop(): ExpressionRef;
    };
    i64: {
      load(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load8_s(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load8_u(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load16_s(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load16_u(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load32_s(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load32_u(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      store(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        value: ExpressionRef,
        name?: string
      ): ExpressionRef;
      store8(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        value: ExpressionRef,
        name?: string
      ): ExpressionRef;
      store16(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        value: ExpressionRef,
        name?: string
      ): ExpressionRef;
      store32(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        value: ExpressionRef,
        name?: string
      ): ExpressionRef;
      const(low: number, high: number): ExpressionRef;
      clz(value: ExpressionRef): ExpressionRef;
      ctz(value: ExpressionRef): ExpressionRef;
      popcnt(value: ExpressionRef): ExpressionRef;
      eqz(value: ExpressionRef): ExpressionRef;
      trunc_s: {
        f32(value: ExpressionRef): ExpressionRef;
        f64(value: ExpressionRef): ExpressionRef;
      };
      trunc_u: {
        f32(value: ExpressionRef): ExpressionRef;
        f64(value: ExpressionRef): ExpressionRef;
      };
      trunc_s_sat: {
        f32(value: ExpressionRef): ExpressionRef;
        f64(value: ExpressionRef): ExpressionRef;
      };
      trunc_u_sat: {
        f32(value: ExpressionRef): ExpressionRef;
        f64(value: ExpressionRef): ExpressionRef;
      };
      reinterpret(value: ExpressionRef): ExpressionRef;
      extend8_s(value: ExpressionRef): ExpressionRef;
      extend16_s(value: ExpressionRef): ExpressionRef;
      extend32_s(value: ExpressionRef): ExpressionRef;
      extend_s(value: ExpressionRef): ExpressionRef;
      extend_u(value: ExpressionRef): ExpressionRef;
      add(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      sub(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      mul(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      div_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      div_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      rem_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      rem_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      and(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      or(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      xor(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      shl(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      shr_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      shr_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      rotl(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      rotr(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      eq(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ne(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      lt_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      lt_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      le_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      le_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      gt_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      gt_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ge_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ge_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      atomic: {
        load(offset: number, ptr: ExpressionRef, name?: string): ExpressionRef;
        load8_u(
          offset: number,
          ptr: ExpressionRef,
          name?: string
        ): ExpressionRef;
        load16_u(
          offset: number,
          ptr: ExpressionRef,
          name?: string
        ): ExpressionRef;
        load32_u(
          offset: number,
          ptr: ExpressionRef,
          name?: string
        ): ExpressionRef;
        store(
          offset: number,
          ptr: ExpressionRef,
          value: ExpressionRef,
          name?: string
        ): ExpressionRef;
        store8(
          offset: number,
          ptr: ExpressionRef,
          value: ExpressionRef,
          name?: string
        ): ExpressionRef;
        store16(
          offset: number,
          ptr: ExpressionRef,
          value: ExpressionRef,
          name?: string
        ): ExpressionRef;
        store32(
          offset: number,
          ptr: ExpressionRef,
          value: ExpressionRef,
          name?: string
        ): ExpressionRef;
        rmw: {
          add(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          sub(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          and(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          or(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          xor(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          xchg(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          cmpxchg(
            offset: number,
            ptr: ExpressionRef,
            expected: ExpressionRef,
            replacement: ExpressionRef,
            name?: string
          ): ExpressionRef;
        };
        rmw8_u: {
          add(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          sub(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          and(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          or(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          xor(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          xchg(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          cmpxchg(
            offset: number,
            ptr: ExpressionRef,
            expected: ExpressionRef,
            replacement: ExpressionRef,
            name?: string
          ): ExpressionRef;
        };
        rmw16_u: {
          add(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          sub(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          and(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          or(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          xor(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          xchg(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          cmpxchg(
            offset: number,
            ptr: ExpressionRef,
            expected: ExpressionRef,
            replacement: ExpressionRef,
            name?: string
          ): ExpressionRef;
        };
        rmw32_u: {
          add(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          sub(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          and(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          or(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          xor(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          xchg(
            offset: number,
            ptr: ExpressionRef,
            value: ExpressionRef,
            name?: string
          ): ExpressionRef;
          cmpxchg(
            offset: number,
            ptr: ExpressionRef,
            expected: ExpressionRef,
            replacement: ExpressionRef,
            name?: string
          ): ExpressionRef;
        };
      };
      pop(): ExpressionRef;
    };
    f32: {
      load(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      store(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        value: ExpressionRef,
        name?: string
      ): ExpressionRef;
      const(value: number): ExpressionRef;
      const_bits(value: number): ExpressionRef;
      neg(value: ExpressionRef): ExpressionRef;
      abs(value: ExpressionRef): ExpressionRef;
      ceil(value: ExpressionRef): ExpressionRef;
      floor(value: ExpressionRef): ExpressionRef;
      trunc(value: ExpressionRef): ExpressionRef;
      nearest(value: ExpressionRef): ExpressionRef;
      sqrt(value: ExpressionRef): ExpressionRef;
      reinterpret(value: ExpressionRef): ExpressionRef;
      convert_s: {
        i32(value: ExpressionRef): ExpressionRef;
        i64(value: ExpressionRef): ExpressionRef;
      };
      convert_u: {
        i32(value: ExpressionRef): ExpressionRef;
        i64(value: ExpressionRef): ExpressionRef;
      };
      demote(value: ExpressionRef): ExpressionRef;
      add(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      sub(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      mul(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      div(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      copysign(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      min(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      max(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      eq(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ne(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      lt(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      le(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      gt(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ge(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      pop(): ExpressionRef;
    };
    f64: {
      load(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      store(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        value: ExpressionRef,
        name?: string
      ): ExpressionRef;
      const(value: number): ExpressionRef;
      const_bits(low: number, high: number): ExpressionRef;
      neg(value: ExpressionRef): ExpressionRef;
      abs(value: ExpressionRef): ExpressionRef;
      ceil(value: ExpressionRef): ExpressionRef;
      floor(value: ExpressionRef): ExpressionRef;
      trunc(value: ExpressionRef): ExpressionRef;
      nearest(value: ExpressionRef): ExpressionRef;
      sqrt(value: ExpressionRef): ExpressionRef;
      reinterpret(value: ExpressionRef): ExpressionRef;
      convert_s: {
        i32(value: ExpressionRef): ExpressionRef;
        i64(value: ExpressionRef): ExpressionRef;
      };
      convert_u: {
        i32(value: ExpressionRef): ExpressionRef;
        i64(value: ExpressionRef): ExpressionRef;
      };
      promote(value: ExpressionRef): ExpressionRef;
      add(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      sub(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      mul(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      div(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      copysign(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      min(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      max(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      eq(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ne(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      lt(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      le(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      gt(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ge(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      pop(): ExpressionRef;
    };
    v128: {
      load(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load8_splat(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load16_splat(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load32_splat(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load64_splat(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load8x8_s(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load8x8_u(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load16x4_s(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load16x4_u(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load32x2_s(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load32x2_u(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load32_zero(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load64_zero(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load8_lane(
        offset: number,
        align: number,
        index: number,
        ptr: ExpressionRef,
        vec: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load16_lane(
        offset: number,
        align: number,
        index: number,
        ptr: ExpressionRef,
        vec: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load32_lane(
        offset: number,
        align: number,
        index: number,
        ptr: ExpressionRef,
        vec: ExpressionRef,
        name?: string
      ): ExpressionRef;
      load64_lane(
        offset: number,
        align: number,
        index: number,
        ptr: ExpressionRef,
        vec: ExpressionRef,
        name?: string
      ): ExpressionRef;
      store8_lane(
        offset: number,
        align: number,
        index: number,
        pt: ExpressionRef,
        vec: ExpressionRef,
        name?: string
      ): ExpressionRef;
      store16_lane(
        offset: number,
        align: number,
        index: number,
        pt: ExpressionRef,
        vec: ExpressionRef,
        name?: string
      ): ExpressionRef;
      store32_lane(
        offset: number,
        align: number,
        index: number,
        pt: ExpressionRef,
        vec: ExpressionRef,
        name?: string
      ): ExpressionRef;
      store64_lane(
        offset: number,
        align: number,
        index: number,
        pt: ExpressionRef,
        vec: ExpressionRef,
        name?: string
      ): ExpressionRef;
      store(
        offset: number,
        align: number,
        ptr: ExpressionRef,
        value: ExpressionRef,
        name?: string
      ): ExpressionRef;
      const(value: ArrayLike<number>): ExpressionRef;
      not(value: ExpressionRef): ExpressionRef;
      any_true(value: ExpressionRef): ExpressionRef;
      and(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      or(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      xor(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      andnot(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      bitselect(
        left: ExpressionRef,
        right: ExpressionRef,
        cond: ExpressionRef
      ): ExpressionRef;
      pop(): ExpressionRef;
    };
    i8x16: {
      shuffle(
        left: ExpressionRef,
        right: ExpressionRef,
        mask: ArrayLike<number>
      ): ExpressionRef;
      swizzle(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      splat(value: ExpressionRef): ExpressionRef;
      extract_lane_s(vec: ExpressionRef, index: ExpressionRef): ExpressionRef;
      extract_lane_u(vec: ExpressionRef, index: ExpressionRef): ExpressionRef;
      replace_lane(
        vec: ExpressionRef,
        index: ExpressionRef,
        value: ExpressionRef
      ): ExpressionRef;
      eq(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ne(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      lt_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      lt_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      gt_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      gt_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      le_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      le_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ge_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ge_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      abs(value: ExpressionRef): ExpressionRef;
      neg(value: ExpressionRef): ExpressionRef;
      all_true(value: ExpressionRef): ExpressionRef;
      bitmask(value: ExpressionRef): ExpressionRef;
      popcnt(value: ExpressionRef): ExpressionRef;
      shl(vec: ExpressionRef, shift: ExpressionRef): ExpressionRef;
      shr_s(vec: ExpressionRef, shift: ExpressionRef): ExpressionRef;
      shr_u(vec: ExpressionRef, shift: ExpressionRef): ExpressionRef;
      add(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      add_saturate_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      add_saturate_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      sub(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      sub_saturate_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      sub_saturate_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      mul(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      min_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      min_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      max_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      max_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      avgr_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      narrow_i16x8_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      narrow_i16x8_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
    };
    i16x8: {
      splat(value: ExpressionRef): ExpressionRef;
      extract_lane_s(vec: ExpressionRef, index: ExpressionRef): ExpressionRef;
      extract_lane_u(vec: ExpressionRef, index: ExpressionRef): ExpressionRef;
      replace_lane(
        vec: ExpressionRef,
        index: ExpressionRef,
        value: ExpressionRef
      ): ExpressionRef;
      eq(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ne(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      lt_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      lt_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      gt_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      gt_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      le_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      le_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ge_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ge_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      abs(value: ExpressionRef): ExpressionRef;
      neg(value: ExpressionRef): ExpressionRef;
      all_true(value: ExpressionRef): ExpressionRef;
      bitmask(value: ExpressionRef): ExpressionRef;
      shl(vec: ExpressionRef, shift: ExpressionRef): ExpressionRef;
      shr_s(vec: ExpressionRef, shift: ExpressionRef): ExpressionRef;
      shr_u(vec: ExpressionRef, shift: ExpressionRef): ExpressionRef;
      add(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      add_saturate_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      add_saturate_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      sub(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      sub_saturate_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      sub_saturate_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      mul(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      min_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      min_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      max_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      max_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      avgr_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      q15mulr_sat_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      extmul_low_i8x16_s(
        left: ExpressionRef,
        right: ExpressionRef
      ): ExpressionRef;
      extmul_high_i8x16_s(
        left: ExpressionRef,
        right: ExpressionRef
      ): ExpressionRef;
      extmul_low_i8x16_u(
        left: ExpressionRef,
        right: ExpressionRef
      ): ExpressionRef;
      extmul_high_i8x16_u(
        left: ExpressionRef,
        right: ExpressionRef
      ): ExpressionRef;
      extadd_pairwise_i8x16_s(value: ExpressionRef): ExpressionRef;
      extadd_pairwise_i8x16_u(value: ExpressionRef): ExpressionRef;
      narrow_i32x4_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      narrow_i32x4_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      extend_low_i8x16_s(value: ExpressionRef): ExpressionRef;
      extend_high_i8x16_s(value: ExpressionRef): ExpressionRef;
      extend_low_i8x16_u(value: ExpressionRef): ExpressionRef;
      extend_high_i8x16_u(value: ExpressionRef): ExpressionRef;
    };
    i32x4: {
      splat(value: ExpressionRef): ExpressionRef;
      extract_lane(vec: ExpressionRef, index: ExpressionRef): ExpressionRef;
      replace_lane(
        vec: ExpressionRef,
        index: ExpressionRef,
        value: ExpressionRef
      ): ExpressionRef;
      eq(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ne(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      lt_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      lt_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      gt_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      gt_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      le_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      le_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ge_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ge_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      abs(value: ExpressionRef): ExpressionRef;
      neg(value: ExpressionRef): ExpressionRef;
      all_true(value: ExpressionRef): ExpressionRef;
      bitmask(value: ExpressionRef): ExpressionRef;
      shl(vec: ExpressionRef, shift: ExpressionRef): ExpressionRef;
      shr_s(vec: ExpressionRef, shift: ExpressionRef): ExpressionRef;
      shr_u(vec: ExpressionRef, shift: ExpressionRef): ExpressionRef;
      add(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      sub(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      mul(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      min_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      min_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      max_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      max_u(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      dot_i16x8_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      extmul_low_i16x8_s(
        left: ExpressionRef,
        right: ExpressionRef
      ): ExpressionRef;
      extmul_high_i16x8_s(
        left: ExpressionRef,
        right: ExpressionRef
      ): ExpressionRef;
      extmul_low_i16x8_u(
        left: ExpressionRef,
        right: ExpressionRef
      ): ExpressionRef;
      extmul_high_i16x8_u(
        left: ExpressionRef,
        right: ExpressionRef
      ): ExpressionRef;
      extadd_pairwise_i16x8_s(value: ExpressionRef): ExpressionRef;
      extadd_pairwise_i16x8_u(value: ExpressionRef): ExpressionRef;
      trunc_sat_f32x4_s(value: ExpressionRef): ExpressionRef;
      trunc_sat_f32x4_u(value: ExpressionRef): ExpressionRef;
      extend_low_i16x8_s(value: ExpressionRef): ExpressionRef;
      extend_high_i16x8_s(value: ExpressionRef): ExpressionRef;
      extend_low_i16x8_u(value: ExpressionRef): ExpressionRef;
      extend_high_i16x8_u(value: ExpressionRef): ExpressionRef;
      trunc_sat_f64x2_s_zero(value: ExpressionRef): ExpressionRef;
      trunc_sat_f64x2_u_zero(value: ExpressionRef): ExpressionRef;
    };
    i64x2: {
      splat(value: ExpressionRef): ExpressionRef;
      extract_lane(vec: ExpressionRef, index: ExpressionRef): ExpressionRef;
      replace_lane(
        vec: ExpressionRef,
        index: ExpressionRef,
        value: ExpressionRef
      ): ExpressionRef;
      eq(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ne(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      lt_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      gt_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      le_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ge_s(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      abs(value: ExpressionRef): ExpressionRef;
      neg(value: ExpressionRef): ExpressionRef;
      all_true(value: ExpressionRef): ExpressionRef;
      bitmask(value: ExpressionRef): ExpressionRef;
      shl(vec: ExpressionRef, shift: ExpressionRef): ExpressionRef;
      shr_s(vec: ExpressionRef, shift: ExpressionRef): ExpressionRef;
      shr_u(vec: ExpressionRef, shift: ExpressionRef): ExpressionRef;
      add(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      sub(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      mul(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      extmul_low_i32x4_s(
        left: ExpressionRef,
        right: ExpressionRef
      ): ExpressionRef;
      extmul_high_i32x4_s(
        left: ExpressionRef,
        right: ExpressionRef
      ): ExpressionRef;
      extmul_low_i32x4_u(
        left: ExpressionRef,
        right: ExpressionRef
      ): ExpressionRef;
      extmul_high_i32x4_u(
        left: ExpressionRef,
        right: ExpressionRef
      ): ExpressionRef;
      extend_low_i32x4_s(value: ExpressionRef): ExpressionRef;
      extend_high_i32x4_s(value: ExpressionRef): ExpressionRef;
      extend_low_i32x4_u(value: ExpressionRef): ExpressionRef;
      extend_high_i32x4_u(value: ExpressionRef): ExpressionRef;
    };
    f32x4: {
      splat(value: ExpressionRef): ExpressionRef;
      extract_lane(vec: ExpressionRef, index: ExpressionRef): ExpressionRef;
      replace_lane(
        vec: ExpressionRef,
        index: ExpressionRef,
        value: ExpressionRef
      ): ExpressionRef;
      eq(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ne(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      lt(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      gt(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      le(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ge(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      abs(value: ExpressionRef): ExpressionRef;
      neg(value: ExpressionRef): ExpressionRef;
      sqrt(value: ExpressionRef): ExpressionRef;
      add(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      sub(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      mul(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      div(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      min(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      max(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      pmin(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      pmax(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ceil(value: ExpressionRef): ExpressionRef;
      floor(value: ExpressionRef): ExpressionRef;
      trunc(value: ExpressionRef): ExpressionRef;
      nearest(value: ExpressionRef): ExpressionRef;
      convert_i32x4_s(value: ExpressionRef): ExpressionRef;
      convert_i32x4_u(value: ExpressionRef): ExpressionRef;
      demote_f64x2_zero(value: ExpressionRef): ExpressionRef;
    };
    f64x2: {
      splat(value: ExpressionRef): ExpressionRef;
      extract_lane(vec: ExpressionRef, index: ExpressionRef): ExpressionRef;
      replace_lane(
        vec: ExpressionRef,
        index: ExpressionRef,
        value: ExpressionRef
      ): ExpressionRef;
      eq(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ne(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      lt(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      gt(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      le(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ge(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      abs(value: ExpressionRef): ExpressionRef;
      neg(value: ExpressionRef): ExpressionRef;
      sqrt(value: ExpressionRef): ExpressionRef;
      add(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      sub(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      mul(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      div(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      min(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      max(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      pmin(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      pmax(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
      ceil(value: ExpressionRef): ExpressionRef;
      floor(value: ExpressionRef): ExpressionRef;
      trunc(value: ExpressionRef): ExpressionRef;
      nearest(value: ExpressionRef): ExpressionRef;
      convert_low_i32x4_s(value: ExpressionRef): ExpressionRef;
      convert_low_i32x4_u(value: ExpressionRef): ExpressionRef;
      promote_low_f32x4(value: ExpressionRef): ExpressionRef;
    };
    funcref: {
      pop(): ExpressionRef;
    };
    externref: {
      pop(): ExpressionRef;
    };
    anyref: {
      pop(): ExpressionRef;
    };
    eqref: {
      pop(): ExpressionRef;
    };
    i31ref: {
      pop(): ExpressionRef;
    };
    dataref: {
      pop(): ExpressionRef;
    };
    stringref: {
      pop(): ExpressionRef;
    };
    stringview_wtf8: {
      pop(): ExpressionRef;
    };
    stringview_wtf16: {
      pop(): ExpressionRef;
    };
    stringview_iter: {
      pop(): ExpressionRef;
    };
    ref: {
      null(type: Type): ExpressionRef;
      is_null(value: ExpressionRef): ExpressionRef;
      is_func(value: ExpressionRef): ExpressionRef;
      is_data(value: ExpressionRef): ExpressionRef;
      is_i31(value: ExpressionRef): ExpressionRef;
      as_non_null(value: ExpressionRef): ExpressionRef;
      as_func(value: ExpressionRef): ExpressionRef;
      as_data(value: ExpressionRef): ExpressionRef;
      as_i31(value: ExpressionRef): ExpressionRef;
      func(name: string, type: Type): ExpressionRef;
      eq(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
    };
    i31: {
      "new"(value: ExpressionRef): ExpressionRef;
      get_s(i31: ExpressionRef): ExpressionRef;
      get_u(i31: ExpressionRef): ExpressionRef;
    };
    atomic: {
      fence(): ExpressionRef;
    };
    tuple: {
      make(elements: ExportRef[]): ExpressionRef;
      extract(tuple: ExpressionRef, index: number): ExpressionRef;
    };
    try(
      name: string,
      body: ExpressionRef,
      catchTags: string[],
      catchBodies: ExpressionRef[],
      delegateTarget?: string
    ): ExpressionRef;
    throw(tag: string, operands: ExpressionRef[]): ExpressionRef;
    rethrow(target: string): ExpressionRef;
    select(
      condition: ExpressionRef,
      ifTrue: ExpressionRef,
      ifFalse: ExpressionRef,
      type?: Type
    ): ExpressionRef;
    drop(value: ExpressionRef): ExpressionRef;
    return(value?: ExpressionRef): ExpressionRef;
    nop(): ExpressionRef;
    unreachable(): ExpressionRef;
    addFunction(
      name: string,
      params: Type,
      results: Type,
      vars: Type[],
      body: ExpressionRef
    ): FunctionRef;
    getFunction(name: string): FunctionRef;
    removeFunction(name: string): void;
    getNumFunctions(): number;
    getFunctionByIndex(index: number): FunctionRef;
    addGlobal(
      name: string,
      type: Type,
      mutable: boolean,
      init: ExpressionRef
    ): GlobalRef;
    getGlobal(name: string): GlobalRef;
    removeGlobal(name: string): void;
    addTable(
      name: string,
      initial: number,
      maximum: number,
      type: Type
    ): TableRef;
    getTable(name: string): TableRef;
    removeTable(name: string): void;
    addTag(name: string, params: Type, results: Type): TagRef;
    getTag(name: string): TagRef;
    removeTag(name: string): void;
    addFunctionImport(
      internalName: string,
      externalModuleName: string,
      externalBaseName: string,
      params: Type,
      results: Type
    ): void;
    addTableImport(
      internalName: string,
      externalModuleName: string,
      externalBaseName: string
    ): void;
    addMemoryImport(
      internalName: string,
      externalModuleName: string,
      externalBaseName: string
    ): void;
    addGlobalImport(
      internalName: string,
      externalModuleName: string,
      externalBaseName: string,
      globalType: Type
    ): void;
    addTagImport(
      internalName: string,
      externalModuleName: string,
      externalBaseName: string,
      params: Type,
      results: Type
    ): void;
    addFunctionExport(internalName: string, externalName: string): ExportRef;
    addTableExport(internalName: string, externalName: string): ExportRef;
    addMemoryExport(internalName: string, externalName: string): ExportRef;
    addGlobalExport(internalName: string, externalName: string): ExportRef;
    addTagExport(internalName: string, externalName: string): ExportRef;
    removeExport(externalName: string): void;
    getExport(externalName: string): ExportRef;
    getNumExports(): number;
    getExportByIndex(index: number): ExportRef;
    setMemory(
      initial: number,
      maximum: number,
      exportName?: string | null,
      segments?: MemorySegment[] | null,
      shared?: boolean,
      memory64?: boolean,
      internalName?: string
    ): void;
    getMemorySegmentInfoByIndex(index: number): MemorySegmentInfo;
    setStart(start: FunctionRef): void;
    getFeatures(): Features;
    setFeatures(features: Features): void;
    addCustomSection(name: string, contents: Uint8Array): void;
    getNumGlobals(): number;
    getNumTables(): number;
    hasMemory(): boolean;
    getMemoryInfo(name?: string): MemoryInfo;
    getNumMemorySegments(): number;
    getNumElementSegments(): number;
    getGlobalByIndex(index: number): GlobalRef;
    getTableByIndex(index: number): TableRef;
    getElementSegmentByIndex(index: number): ElementSegmentRef;
    emitText(): string;
    emitStackIR(optimize?: boolean): string;
    emitAsmjs(): string;
    validate(): number;
    optimize(): void;
    optimizeFunction(func: string | FunctionRef): void;
    runPasses(passes: string[]): void;
    runPassesOnFunction(func: string | FunctionRef, passes: string[]): void;
    autoDrop(): void;
    dispose(): void;
    emitBinary(): Uint8Array;
    emitBinary(sourceMapUrl: string | null): {
      binary: Uint8Array;
      sourceMap: string | null;
    };
    interpret(): void;
    addDebugInfoFileName(filename: string): number;
    getDebugInfoFileName(index: number): string | null;
    setDebugLocation(
      func: FunctionRef,
      expr: ExpressionRef,
      fileIndex: number,
      lineNumber: number,
      columnNumber: number
    ): void;
    copyExpression(expr: ExpressionRef): ExpressionRef;
  }

  interface MemorySegment {
    offset: ExpressionRef;
    data: Uint8Array;
    passive?: boolean;
  }

  interface TableElement {
    offset: ExpressionRef;
    names: string[];
  }

  function wrapModule(ptr: number): Module;

  function getExpressionId(expression: ExpressionRef): number;
  function getExpressionType(expression: ExpressionRef): Type;
  function getExpressionInfo(expression: ExpressionRef): ExpressionInfo;

  interface MemorySegmentInfo {
    offset: ExpressionRef;
    data: Uint8Array;
    passive: boolean;
  }

  interface MemoryInfo {
    module: string | null;
    base: string | null;
    shared: boolean;
    is64: boolean;
    initial: number;
    max?: number;
  }

  interface ExpressionInfo {
    id: ExpressionIds;
    type: Type;
  }

  interface BlockInfo extends ExpressionInfo {
    name: string;
    children: ExpressionRef[];
  }

  interface IfInfo extends ExpressionInfo {
    condition: ExpressionRef;
    ifTrue: ExpressionRef;
    ifFalse: ExpressionRef;
  }

  interface LoopInfo extends ExpressionInfo {
    name: string;
    body: ExpressionRef;
  }

  interface BreakInfo extends ExpressionInfo {
    name: string;
    condition: ExpressionRef;
    value: ExpressionRef;
  }

  interface SwitchInfo extends ExpressionInfo {
    names: string[];
    defaultName: string | null;
    condition: ExpressionRef;
    value: ExpressionRef;
  }

  interface CallInfo extends ExpressionInfo {
    isReturn: boolean;
    target: string;
    operands: ExpressionRef[];
  }

  interface CallIndirectInfo extends ExpressionInfo {
    isReturn: boolean;
    target: ExpressionRef;
    operands: ExpressionRef[];
  }

  interface LocalGetInfo extends ExpressionInfo {
    index: number;
  }

  interface LocalSetInfo extends ExpressionInfo {
    isTee: boolean;
    index: number;
    value: ExpressionRef;
  }

  interface GlobalGetInfo extends ExpressionInfo {
    name: string;
  }

  interface GlobalSetInfo extends ExpressionInfo {
    name: string;
    value: ExpressionRef;
  }

  interface TableGetInfo extends ExpressionInfo {
    table: string;
    index: ExpressionRef;
  }

  interface TableSetInfo extends ExpressionInfo {
    table: string;
    index: ExpressionRef;
    value: ExpressionRef;
  }

  interface TableSizeInfo extends ExpressionInfo {
    table: string;
  }

  interface TableGrowInfo extends ExpressionInfo {
    table: string;
    value: ExpressionRef;
    delta: ExpressionRef;
  }

  interface LoadInfo extends ExpressionInfo {
    isAtomic: boolean;
    isSigned: boolean;
    offset: number;
    bytes: number;
    align: number;
    ptr: ExpressionRef;
  }

  interface StoreInfo extends ExpressionInfo {
    isAtomic: boolean;
    offset: number;
    bytes: number;
    align: number;
    ptr: ExpressionRef;
    value: ExpressionRef;
  }

  interface ConstInfo extends ExpressionInfo {
    value: number | { low: number; high: number } | Array<number>;
  }

  interface UnaryInfo extends ExpressionInfo {
    op: Operations;
    value: ExpressionRef;
  }

  interface BinaryInfo extends ExpressionInfo {
    op: Operations;
    left: ExpressionRef;
    right: ExpressionRef;
  }

  interface SelectInfo extends ExpressionInfo {
    ifTrue: ExpressionRef;
    ifFalse: ExpressionRef;
    condition: ExpressionRef;
  }

  interface DropInfo extends ExpressionInfo {
    value: ExpressionRef;
  }

  interface ReturnInfo extends ExpressionInfo {
    value: ExpressionRef;
  }

  interface NopInfo extends ExpressionInfo {}

  interface UnreachableInfo extends ExpressionInfo {}

  interface PopInfo extends ExpressionInfo {}

  interface MemorySizeInfo extends ExpressionInfo {}

  interface MemoryGrowInfo extends ExpressionInfo {
    delta: ExpressionRef;
  }

  interface AtomicRMWInfo extends ExpressionInfo {
    op: Operations;
    bytes: number;
    offset: number;
    ptr: ExpressionRef;
    value: ExpressionRef;
  }

  interface AtomicCmpxchgInfo extends ExpressionInfo {
    bytes: number;
    offset: number;
    ptr: ExpressionRef;
    expected: ExpressionRef;
    replacement: ExpressionRef;
  }

  interface AtomicWaitInfo extends ExpressionInfo {
    ptr: ExpressionRef;
    expected: ExpressionRef;
    timeout: ExpressionRef;
    expectedType: Type;
  }

  interface AtomicNotifyInfo extends ExpressionInfo {
    ptr: ExpressionRef;
    notifyCount: ExpressionRef;
  }

  interface AtomicFenceInfo extends ExpressionInfo {
    order: number;
  }

  interface SIMDExtractInfo extends ExpressionInfo {
    op: Operations;
    vec: ExpressionRef;
    index: ExpressionRef;
  }

  interface SIMDReplaceInfo extends ExpressionInfo {
    op: Operations;
    vec: ExpressionRef;
    index: ExpressionRef;
    value: ExpressionRef;
  }

  interface SIMDShuffleInfo extends ExpressionInfo {
    left: ExpressionRef;
    right: ExpressionRef;
    mask: number[];
  }

  interface SIMDTernaryInfo extends ExpressionInfo {
    op: Operations;
    a: ExpressionRef;
    b: ExpressionRef;
    c: ExpressionRef;
  }

  interface SIMDShiftInfo extends ExpressionInfo {
    op: Operations;
    vec: ExpressionRef;
    shift: ExpressionRef;
  }

  interface SIMDLoadInfo extends ExpressionInfo {
    op: Operations;
    offset: number;
    align: number;
    ptr: ExpressionRef;
  }

  interface SIMDLoadStoreLaneInfo extends ExpressionInfo {
    op: Operations;
    offset: number;
    align: number;
    index: number;
    ptr: ExpressionRef;
    vec: ExpressionRef;
  }

  interface MemoryInitInfo extends ExpressionInfo {
    segment: number;
    dest: ExpressionRef;
    offset: ExpressionRef;
    size: ExpressionRef;
  }

  interface DataDropInfo extends ExpressionInfo {
    segment: number;
  }

  interface MemoryCopyInfo extends ExpressionInfo {
    dest: ExpressionRef;
    source: ExpressionRef;
    size: ExpressionRef;
  }

  interface MemoryFillInfo extends ExpressionInfo {
    dest: ExpressionRef;
    value: ExpressionRef;
    size: ExpressionRef;
  }

  interface RefNullInfo extends ExpressionInfo {}

  interface RefIsInfo extends ExpressionInfo {
    op: Operations;
    value: ExpressionRef;
  }

  interface RefAsInfo extends ExpressionInfo {
    op: Operations;
    value: ExpressionRef;
  }

  interface RefFuncInfo extends ExpressionInfo {
    func: string;
  }

  interface RefEqInfo extends ExpressionInfo {
    left: ExpressionRef;
    right: ExpressionRef;
  }

  interface TryInfo extends ExpressionInfo {
    name: string;
    body: ExpressionRef;
    catchTags: string[];
    catchBodies: ExpressionRef[];
    hasCatchAll: boolean;
    delegateTarget: string;
    isDelegate: boolean;
  }

  interface ThrowInfo extends ExpressionInfo {
    tag: string;
    operands: ExpressionRef[];
  }

  interface RethrowInfo extends ExpressionInfo {
    target: string;
  }

  interface TupleMakeInfo extends ExpressionInfo {
    operands: ExpressionRef[];
  }

  interface TupleExtract extends ExpressionInfo {
    tuple: ExpressionRef;
    index: number;
  }

  interface I31NewInfo extends ExpressionInfo {
    value: ExpressionRef;
  }

  interface I31GetInfo extends ExpressionInfo {
    i31: ExpressionRef;
    isSigned: boolean;
  }

  function getFunctionInfo(func: FunctionRef): FunctionInfo;

  interface FunctionInfo {
    name: string;
    module: string | null;
    base: string | null;
    params: Type;
    results: Type;
    vars: Type[];
    body: ExpressionRef;
  }

  function getGlobalInfo(global: GlobalRef): GlobalInfo;

  interface GlobalInfo {
    name: string;
    module: string | null;
    base: string | null;
    type: Type;
    mutable: boolean;
    init: ExpressionRef;
  }

  function getTableInfo(table: TableRef): TableInfo;

  interface TableInfo {
    name: string;
    module: string | null;
    base: string | null;
    initial: number;
    max?: number;
  }

  function getElementSegmentInfo(
    segment: ElementSegmentRef
  ): ElementSegmentInfo;

  interface ElementSegmentInfo {
    name: string;
    table: string;
    offset: number;
    data: string[];
  }

  function getTagInfo(tag: TagRef): TagInfo;

  interface TagInfo {
    name: string;
    module: string | null;
    base: string | null;
    params: Type;
    results: Type;
  }

  function getExportInfo(export_: ExportRef): ExportInfo;

  interface ExportInfo {
    kind: ExternalKinds;
    name: string;
    value: string;
  }

  function getSideEffects(expr: ExpressionRef, features: Features): SideEffects;
  function emitText(expression: ExpressionRef | Module): string;
  function readBinary(data: Uint8Array): Module;
  function parseText(text: string): Module;
  function getOptimizeLevel(): number;
  function setOptimizeLevel(level: number): number;
  function getShrinkLevel(): number;
  function setShrinkLevel(level: number): number;
  function getDebugInfo(): boolean;
  function setDebugInfo(on: boolean): void;
  function getLowMemoryUnused(): boolean;
  function setLowMemoryUnused(on: boolean): void;
  function getZeroFilledMemory(): boolean;
  function setZeroFilledMemory(on: boolean): void;
  function getFastMath(): boolean;
  function setFastMath(on: boolean): void;
  function getPassArgument(key: string): string | null;
  function setPassArgument(key: string, value: string | null): void;
  function clearPassArguments(): void;
  function getAlwaysInlineMaxSize(): number;
  function setAlwaysInlineMaxSize(size: number): void;
  function getFlexibleInlineMaxSize(): number;
  function setFlexibleInlineMaxSize(size: number): void;
  function getOneCallerInlineMaxSize(): number;
  function setOneCallerInlineMaxSize(size: number): void;
  function getAllowInliningFunctionsWithLoops(): boolean;
  function setAllowInliningFunctionsWithLoops(on: boolean): void;
  function exit(status: number): void;

  type RelooperBlockRef = number;

  class Relooper {
    constructor(module: Module);
    addBlock(expression: ExpressionRef): RelooperBlockRef;
    addBranch(
      from: RelooperBlockRef,
      to: RelooperBlockRef,
      condition: ExpressionRef,
      code: ExpressionRef
    ): void;
    addBlockWithSwitch(
      code: ExpressionRef,
      condition: ExpressionRef
    ): RelooperBlockRef;
    addBranchForSwitch(
      from: RelooperBlockRef,
      to: RelooperBlockRef,
      indexes: number[],
      code: ExpressionRef
    ): void;
    renderAndDispose(
      entry: RelooperBlockRef,
      labelHelper: number
    ): ExpressionRef;
  }

  class ExpressionRunner {
    constructor(
      module: Module,
      flags: ExpressionRunnerFlags,
      maxDepth: number,
      maxLoopIterations: number
    );
    setLocalValue(index: number, valueExpr: ExpressionRef): boolean;
    setGlobalValue(name: string, valueExpr: ExpressionRef): boolean;
    runAndDispose(expr: ExpressionRef): ExpressionRef;
  }

  type usize = number;
  type u32 = number;
  type i32 = number;
  type u8 = number;
  type f32 = number;
  type f64 = number;
  type bool = boolean;
  type i8 = number;
  type i16 = number;
  type u16 = number;
  type SideEffects = u32;
  type ExpressionRunnerFlags = u32;

  type Ref = usize;

  type Index = u32;
  type ExpressionId = i32;
  type FeatureFlags = u32;
  type Op = i32;
  type ExternalKind = u32;

  export type StringRef = Ref;
  export type Pointer<T> = Ref;
  export type ArrayRef<T> = Ref;
  export type TypeRef = Ref;
  export type HeapTypeRef = Ref;
  export type PackedType = u32;
  export type ModuleRef = Ref;
  export type LiteralRef = Ref;
  export type ImportRef = Ref;
  export type RelooperRef = Ref;
  export type ExpressionRunnerRef = Ref;
  export type BinaryenModuleAllocateAndWriteResultRef = Ref;
  export type TypeBuilderRef = Ref;
  export type TypeBuilderErrorReason = u32;

  export const HEAP8: Int8Array;
  export const HEAPU8: Uint8Array;
  export const HEAP32: Int32Array;
  export const HEAPU32: Uint32Array;
  const stringToAscii: (s: string, ptr: number) => void;
  const stackSave: () => number;
  const stackAlloc: (size: number) => number;
  const stackRestore: (ref: number) => void;
  const allocateUTF8OnStack: (s: string) => number;
  const UTF8ToString: (ptr: number) => string | null;

  type Writer = (...data: any[]) => void;
  namespace utils {
    const swapOut: (func: Writer) => Writer;
    const swapErr: (func: Writer) => Writer;
    const _BinaryenSizeofLiteral: () => number;
    const BinaryenSizeofAllocateAndWriteResult: () => number;
  }
  export function _BinaryenTypeCreate(
    types: ArrayRef<TypeRef>,
    numTypes: u32
  ): TypeRef;
  export function _BinaryenTypeArity(type: TypeRef): u32;
  export function _BinaryenTypeExpand(
    type: TypeRef,
    typesOut: ArrayRef<TypeRef>
  ): void;
  export function _BinaryenTypeGetHeapType(type: TypeRef): HeapTypeRef;
  export function _BinaryenTypeFromHeapType(
    heapType: HeapTypeRef,
    nullable: bool
  ): TypeRef;
  export function _BinaryenTypeIsNullable(type: TypeRef): bool;

  export function _BinaryenTypeFuncref(): TypeRef;
  export function _BinaryenPackedTypeNotPacked(): number;
  export function _BinaryenTypeExternref(): TypeRef;
  export function _BinaryenTypeAnyref(): TypeRef;
  export function _BinaryenTypeEqref(): TypeRef;
  export function _BinaryenTypeStructref(): TypeRef;
  export function _BinaryenTypeArrayref(): TypeRef;
  export function _BinaryenTypeI31ref(): TypeRef;
  export function _BinaryenTypeStringref(): TypeRef;
  export function _BinaryenTypeStringviewWTF8(): TypeRef;
  export function _BinaryenTypeStringviewWTF16(): TypeRef;
  export function _BinaryenTypeStringviewIter(): TypeRef;
  export function _BinaryenTypeNullref(): TypeRef;
  export function _BinaryenTypeNullExternref(): TypeRef;
  export function _BinaryenTypeNullFuncref(): TypeRef;

  export function _BinaryenHeapTypeFunc(): HeapTypeRef;
  export function _BinaryenHeapTypeExt(): HeapTypeRef;
  export function _BinaryenHeapTypeAny(): HeapTypeRef;
  export function _BinaryenHeapTypeEq(): HeapTypeRef;
  export function _BinaryenHeapTypeI31(): HeapTypeRef;
  export function _BinaryenHeapTypeStruct(): HeapTypeRef;
  export function _BinaryenHeapTypeArray(): HeapTypeRef;
  export function _BinaryenHeapTypeString(): HeapTypeRef;
  export function _BinaryenHeapTypeStringviewWTF8(): HeapTypeRef;
  export function _BinaryenHeapTypeStringviewWTF16(): HeapTypeRef;
  export function _BinaryenHeapTypeStringviewIter(): HeapTypeRef;
  export function _BinaryenHeapTypeNone(): HeapTypeRef;
  export function _BinaryenHeapTypeNoext(): HeapTypeRef;
  export function _BinaryenHeapTypeNofunc(): HeapTypeRef;

  export function _BinaryenHeapTypeIsBasic(heapType: HeapTypeRef): bool;
  export function _BinaryenHeapTypeIsSignature(heapType: HeapTypeRef): bool;
  export function _BinaryenHeapTypeIsStruct(heapType: HeapTypeRef): bool;
  export function _BinaryenHeapTypeIsArray(heapType: HeapTypeRef): bool;
  export function _BinaryenHeapTypeIsBottom(heapType: HeapTypeRef): bool;
  export function _BinaryenHeapTypeGetBottom(
    heapType: HeapTypeRef
  ): HeapTypeRef;
  export function _BinaryenHeapTypeIsSubType(
    left: HeapTypeRef,
    right: HeapTypeRef
  ): bool;
  export function _BinaryenStructTypeGetNumFields(heapType: HeapTypeRef): Index;
  export function _BinaryenStructTypeGetFieldType(
    heapType: HeapTypeRef,
    index: Index
  ): TypeRef;
  export function _BinaryenStructTypeGetFieldPackedType(
    heapType: HeapTypeRef,
    index: Index
  ): PackedType;
  export function _BinaryenStructTypeIsFieldMutable(
    heapType: HeapTypeRef,
    index: Index
  ): bool;
  export function _BinaryenArrayTypeGetElementType(
    heapType: HeapTypeRef
  ): TypeRef;
  export function _BinaryenArrayTypeGetElementPackedType(
    heapType: HeapTypeRef
  ): PackedType;
  export function _BinaryenArrayTypeIsElementMutable(
    heapType: HeapTypeRef
  ): bool;
  export function _BinaryenSignatureTypeGetParams(
    heapType: HeapTypeRef
  ): TypeRef;
  export function _BinaryenSignatureTypeGetResults(
    heapType: HeapTypeRef
  ): TypeRef;

  export function _BinaryenModuleCreate(): ModuleRef;
  export function _BinaryenModuleDispose(module: ModuleRef): void;

  export function _BinaryenSizeofLiteral(): usize;
  export function _BinaryenLiteralInt32(literalOut: LiteralRef, x: i32): void;
  export function _BinaryenLiteralInt64(
    literalOut: LiteralRef,
    x: i32,
    y: i32
  ): void;
  export function _BinaryenLiteralFloat32(literalOut: LiteralRef, x: f32): void;
  export function _BinaryenLiteralFloat64(literalOut: LiteralRef, x: f64): void;
  export function _BinaryenLiteralVec128(
    literalOut: LiteralRef,
    x: ArrayRef<u8>
  ): void;
  export function _BinaryenLiteralFloat32Bits(
    literalOut: LiteralRef,
    x: i32
  ): void;
  export function _BinaryenLiteralFloat64Bits(
    literalOut: LiteralRef,
    x: i32,
    y: i32
  ): void;

  export function _BinaryenExpressionGetId(expr: ExpressionRef): ExpressionId;
  export function _BinaryenExpressionGetType(expr: ExpressionRef): TypeRef;
  export function _BinaryenExpressionSetType(
    expr: ExpressionRef,
    type: TypeRef
  ): void;
  export function _BinaryenExpressionPrint(expr: ExpressionRef): void;
  export function _BinaryenExpressionCopy(
    expr: ExpressionRef,
    module: ModuleRef
  ): ExpressionRef;
  export function _BinaryenExpressionFinalize(expr: ExpressionRef): void;

  export function _BinaryenBlock(
    module: ModuleRef,
    name: StringRef,
    childExprs: ArrayRef<ExpressionRef>,
    numChildren: Index,
    type: TypeRef
  ): ExpressionRef;
  export function _BinaryenBlockGetName(expr: ExpressionRef): StringRef;
  export function _BinaryenBlockSetName(
    expr: ExpressionRef,
    name: StringRef
  ): void;
  export function _BinaryenBlockGetNumChildren(expr: ExpressionRef): Index;
  export function _BinaryenBlockGetChildAt(
    expr: ExpressionRef,
    index: Index
  ): ExpressionRef;
  export function _BinaryenBlockSetChildAt(
    expr: ExpressionRef,
    index: Index,
    childExpr: ExpressionRef
  ): void;
  export function _BinaryenBlockAppendChild(
    expr: ExpressionRef,
    childExpr: ExpressionRef
  ): Index;
  export function _BinaryenBlockInsertChildAt(
    expr: ExpressionRef,
    index: Index,
    childExpr: ExpressionRef
  ): void;
  export function _BinaryenBlockRemoveChildAt(
    expr: ExpressionRef,
    index: Index
  ): ExpressionRef;

  export function _BinaryenIf(
    module: ModuleRef,
    conditionExpr: ExpressionRef,
    ifTrueExpr: ExpressionRef,
    ifFalseExpr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenIfGetCondition(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenIfSetCondition(
    expr: ExpressionRef,
    conditionExpr: ExpressionRef
  ): void;
  export function _BinaryenIfGetIfTrue(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenIfSetIfTrue(
    expr: ExpressionRef,
    ifTrueExpr: ExpressionRef
  ): void;
  export function _BinaryenIfGetIfFalse(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenIfSetIfFalse(
    expr: ExpressionRef,
    ifFalseExpr: ExpressionRef
  ): void;

  export function _BinaryenLoop(
    module: ModuleRef,
    name: StringRef,
    bodyExpr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenLoopGetName(expr: ExpressionRef): StringRef;
  export function _BinaryenLoopSetName(
    expr: ExpressionRef,
    name: StringRef
  ): void;
  export function _BinaryenLoopGetBody(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenLoopSetBody(
    expr: ExpressionRef,
    bodyExpr: ExpressionRef
  ): void;

  export function _BinaryenBreak(
    module: ModuleRef,
    name: StringRef,
    conditionExpr: ExpressionRef,
    valueExpr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenBreakGetName(expr: ExpressionRef): StringRef;
  export function _BinaryenBreakSetName(
    expr: ExpressionRef,
    name: StringRef
  ): void;
  export function _BinaryenBreakGetCondition(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenBreakSetCondition(
    expr: ExpressionRef,
    conditionExpr: ExpressionRef
  ): void;
  export function _BinaryenBreakGetValue(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenBreakSetValue(
    expr: ExpressionRef,
    valueExpr: ExpressionRef
  ): void;

  export function _BinaryenSwitch(
    module: ModuleRef,
    names: ArrayRef<StringRef>,
    numNames: Index,
    defaultName: StringRef,
    conditionExpr: ExpressionRef,
    valueExpr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenSwitchGetNumNames(expr: ExpressionRef): Index;
  export function _BinaryenSwitchGetNameAt(
    expr: ExpressionRef,
    index: Index
  ): StringRef;
  export function _BinaryenSwitchSetNameAt(
    expr: ExpressionRef,
    index: Index,
    name: StringRef
  ): void;
  export function _BinaryenSwitchAppendName(
    expr: ExpressionRef,
    name: StringRef
  ): Index;
  export function _BinaryenSwitchInsertNameAt(
    expr: ExpressionRef,
    index: Index,
    name: StringRef
  ): void;
  export function _BinaryenSwitchRemoveNameAt(
    expr: ExpressionRef,
    index: Index
  ): StringRef;
  export function _BinaryenSwitchGetDefaultName(expr: ExpressionRef): StringRef;
  export function _BinaryenSwitchSetDefaultName(
    expr: ExpressionRef,
    defaultName: StringRef
  ): void;
  export function _BinaryenSwitchGetCondition(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenSwitchSetCondition(
    expr: ExpressionRef,
    conditionExpr: ExpressionRef
  ): void;
  export function _BinaryenSwitchGetValue(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenSwitchSetValue(
    expr: ExpressionRef,
    valueExpr: ExpressionRef
  ): void;

  export function _BinaryenCall(
    module: ModuleRef,
    targetName: StringRef,
    operandExprs: ArrayRef<ExpressionRef>,
    numOperands: Index,
    returnType: TypeRef
  ): ExpressionRef;
  export function _BinaryenCallGetTarget(expr: ExpressionRef): StringRef;
  export function _BinaryenCallSetTarget(
    expr: ExpressionRef,
    targetName: StringRef
  ): void;
  export function _BinaryenCallGetNumOperands(expr: ExpressionRef): Index;
  export function _BinaryenCallGetOperandAt(
    expr: ExpressionRef,
    index: Index
  ): ExpressionRef;
  export function _BinaryenCallSetOperandAt(
    expr: ExpressionRef,
    index: Index,
    operandExpr: ExpressionRef
  ): void;
  export function _BinaryenCallAppendOperand(
    expr: ExpressionRef,
    operandExpr: ExpressionRef
  ): Index;
  export function _BinaryenCallInsertOperandAt(
    expr: ExpressionRef,
    index: Index,
    operandExpr: ExpressionRef
  ): void;
  export function _BinaryenCallRemoveOperandAt(
    expr: ExpressionRef,
    index: Index
  ): ExpressionRef;
  export function _BinaryenCallIsReturn(expr: ExpressionRef): bool;
  export function _BinaryenCallSetReturn(
    expr: ExpressionRef,
    isReturn: bool
  ): void;
  // ^ with return = true
  export function _BinaryenReturnCall(
    module: ModuleRef,
    targetName: StringRef,
    operandExprs: ArrayRef<ExpressionRef>,
    numOperands: Index,
    returnType: TypeRef
  ): ExpressionRef;

  export function _BinaryenCallIndirect(
    module: ModuleRef,
    table: StringRef,
    targetExpr: ExpressionRef,
    operandExprs: ArrayRef<ExpressionRef>,
    numOperands: Index,
    params: TypeRef,
    results: TypeRef
  ): ExpressionRef;
  export function _BinaryenCallIndirectGetTable(expr: ExpressionRef): StringRef;
  export function _BinaryenCallIndirectSetTable(
    expr: ExpressionRef,
    table: StringRef
  ): void;
  export function _BinaryenCallIndirectGetTarget(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenCallIndirectSetTarget(
    expr: ExpressionRef,
    targetExpr: ExpressionRef
  ): void;
  export function _BinaryenCallIndirectGetNumOperands(
    expr: ExpressionRef
  ): Index;
  export function _BinaryenCallIndirectGetOperandAt(
    expr: ExpressionRef,
    index: Index
  ): ExpressionRef;
  export function _BinaryenCallIndirectSetOperandAt(
    expr: ExpressionRef,
    index: Index,
    operandExpr: ExpressionRef
  ): void;
  export function _BinaryenCallIndirectAppendOperand(
    expr: ExpressionRef,
    operandExpr: ExpressionRef
  ): Index;
  export function _BinaryenCallIndirectInsertOperandAt(
    expr: ExpressionRef,
    index: Index,
    operandExpr: ExpressionRef
  ): void;
  export function _BinaryenCallIndirectRemoveOperandAt(
    expr: ExpressionRef,
    index: Index
  ): ExpressionRef;
  export function _BinaryenCallIndirectIsReturn(expr: ExpressionRef): bool;
  export function _BinaryenCallIndirectSetReturn(
    expr: ExpressionRef,
    isReturn: bool
  ): void;
  // ^ with return = true
  export function _BinaryenReturnCallIndirect(
    module: ModuleRef,
    table: StringRef,
    targetExpr: ExpressionRef,
    operandExprs: ArrayRef<ExpressionRef>,
    numOperands: Index,
    params: TypeRef,
    results: TypeRef
  ): ExpressionRef;

  export function _BinaryenLocalGet(
    module: ModuleRef,
    index: Index,
    type: TypeRef
  ): ExpressionRef;
  export function _BinaryenLocalGetGetIndex(expr: ExpressionRef): Index;
  export function _BinaryenLocalGetSetIndex(
    expr: ExpressionRef,
    index: Index
  ): void;

  export function _BinaryenLocalSet(
    module: ModuleRef,
    index: Index,
    valueExpr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenLocalSetIsTee(expr: ExpressionRef): bool;
  export function _BinaryenLocalSetGetIndex(expr: ExpressionRef): Index;
  export function _BinaryenLocalSetSetIndex(
    expr: ExpressionRef,
    index: Index
  ): void;
  export function _BinaryenLocalSetGetValue(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenLocalSetSetValue(
    expr: ExpressionRef,
    valueExpr: ExpressionRef
  ): void;
  // ^ with type != none
  export function _BinaryenLocalTee(
    module: ModuleRef,
    index: Index,
    valueExpr: ExpressionRef,
    type: TypeRef
  ): ExpressionRef;

  export function _BinaryenGlobalGet(
    module: ModuleRef,
    name: StringRef,
    type: TypeRef
  ): ExpressionRef;
  export function _BinaryenGlobalGetGetName(expr: ExpressionRef): StringRef;
  export function _BinaryenGlobalGetSetName(
    expr: ExpressionRef,
    name: StringRef
  ): void;

  export function _BinaryenGlobalSet(
    module: ModuleRef,
    name: StringRef,
    value: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenGlobalSetGetName(expr: ExpressionRef): StringRef;
  export function _BinaryenGlobalSetSetName(
    expr: ExpressionRef,
    name: StringRef
  ): void;
  export function _BinaryenGlobalSetGetValue(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenGlobalSetSetValue(
    expr: ExpressionRef,
    valueExpr: ExpressionRef
  ): void;

  export function _BinaryenMemorySize(
    module: ModuleRef,
    memoryName: StringRef,
    memoryIs64: bool
  ): ExpressionRef;

  export function _BinaryenMemoryGrow(
    module: ModuleRef,
    delta: ExpressionRef,
    memoryName: StringRef,
    memoryIs64: bool
  ): ExpressionRef;
  export function _BinaryenMemoryGrowGetDelta(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenMemoryGrowSetDelta(
    expr: ExpressionRef,
    delta: ExpressionRef
  ): void;

  export function _BinaryenLoad(
    module: ModuleRef,
    bytes: u32,
    signed: bool,
    offset: u32,
    align: u32,
    type: TypeRef,
    ptrExpr: ExpressionRef,
    memoryName: StringRef
  ): ExpressionRef;
  export function _BinaryenLoadIsAtomic(expr: ExpressionRef): bool;
  export function _BinaryenLoadSetAtomic(
    expr: ExpressionRef,
    isAtomic: bool
  ): void;
  export function _BinaryenLoadIsSigned(expr: ExpressionRef): bool;
  export function _BinaryenLoadSetSigned(
    expr: ExpressionRef,
    isSigned: bool
  ): void;
  export function _BinaryenLoadGetOffset(expr: ExpressionRef): u32;
  export function _BinaryenLoadSetOffset(
    expr: ExpressionRef,
    offset: u32
  ): void;
  export function _BinaryenLoadGetBytes(expr: ExpressionRef): u32;
  export function _BinaryenLoadSetBytes(expr: ExpressionRef, bytes: u32): void;
  export function _BinaryenLoadGetAlign(expr: ExpressionRef): u32;
  export function _BinaryenLoadSetAlign(expr: ExpressionRef, align: u32): void;
  export function _BinaryenLoadGetPtr(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenLoadSetPtr(
    expr: ExpressionRef,
    ptrExpr: ExpressionRef
  ): void;
  // ^ with atomic = true
  export function _BinaryenAtomicLoad(
    module: ModuleRef,
    bytes: Index,
    offset: Index,
    type: TypeRef,
    ptrExpr: ExpressionRef,
    memoryName: StringRef
  ): ExpressionRef;

  export function _BinaryenStore(
    module: ModuleRef,
    bytes: u32,
    offset: u32,
    align: u32,
    ptrExpr: ExpressionRef,
    valueExpr: ExpressionRef,
    type: TypeRef,
    memoryName: StringRef
  ): ExpressionRef;
  export function _BinaryenStoreIsAtomic(expr: ExpressionRef): bool;
  export function _BinaryenStoreSetAtomic(
    expr: ExpressionRef,
    isAtomic: bool
  ): void;
  export function _BinaryenStoreGetBytes(expr: ExpressionRef): u32;
  export function _BinaryenStoreSetBytes(expr: ExpressionRef, bytes: u32): void;
  export function _BinaryenStoreGetOffset(expr: ExpressionRef): u32;
  export function _BinaryenStoreSetOffset(
    expr: ExpressionRef,
    offset: u32
  ): void;
  export function _BinaryenStoreGetAlign(expr: ExpressionRef): u32;
  export function _BinaryenStoreSetAlign(expr: ExpressionRef, align: u32): void;
  export function _BinaryenStoreGetPtr(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenStoreSetPtr(
    expr: ExpressionRef,
    ptrExpr: ExpressionRef
  ): void;
  export function _BinaryenStoreGetValue(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenStoreSetValue(
    expr: ExpressionRef,
    valueExpr: ExpressionRef
  ): void;
  export function _BinaryenStoreGetValueType(expr: ExpressionRef): TypeRef;
  export function _BinaryenStoreSetValueType(
    expr: ExpressionRef,
    valueType: TypeRef
  ): void;
  // ^ with atomic = true
  export function _BinaryenAtomicStore(
    module: ModuleRef,
    bytes: Index,
    offset: Index,
    ptrExpr: ExpressionRef,
    valueExpr: ExpressionRef,
    type: TypeRef,
    memoryName: StringRef
  ): ExpressionRef;

  export function _BinaryenConst(
    module: ModuleRef,
    value: LiteralRef
  ): ExpressionRef;
  export function _BinaryenConstGetValueI32(expr: ExpressionRef): i32;
  export function _BinaryenConstSetValueI32(
    expr: ExpressionRef,
    value: i32
  ): void;
  export function _BinaryenConstGetValueI64Low(expr: ExpressionRef): i32;
  export function _BinaryenConstSetValueI64Low(
    expr: ExpressionRef,
    value: i32
  ): void;
  export function _BinaryenConstGetValueI64High(expr: ExpressionRef): i32;
  export function _BinaryenConstSetValueI64High(
    expr: ExpressionRef,
    value: i32
  ): void;
  export function _BinaryenConstGetValueF32(expr: ExpressionRef): f32;
  export function _BinaryenConstSetValueF32(
    expr: ExpressionRef,
    value: f32
  ): void;
  export function _BinaryenConstGetValueF64(expr: ExpressionRef): f64;
  export function _BinaryenConstSetValueF64(
    expr: ExpressionRef,
    value: f64
  ): void;
  export function _BinaryenConstGetValueV128(
    expr: ExpressionRef,
    valueOut: ArrayRef<u8>
  ): void;
  export function _BinaryenConstSetValueV128(
    expr: ExpressionRef,
    value: ArrayRef<u8>
  ): void;

  export function _BinaryenUnary(
    module: ModuleRef,
    op: Op,
    valueExpr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenUnaryGetOp(expr: ExpressionRef): Op;
  export function _BinaryenUnarySetOp(expr: ExpressionRef, op: Op): void;
  export function _BinaryenUnaryGetValue(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenUnarySetValue(
    expr: ExpressionRef,
    valueExpr: ExpressionRef
  ): void;

  export function _BinaryenBinary(
    module: ModuleRef,
    op: Op,
    leftExpr: ExpressionRef,
    rightExpr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenBinaryGetOp(expr: ExpressionRef): Op;
  export function _BinaryenBinarySetOp(expr: ExpressionRef, op: Op): void;
  export function _BinaryenBinaryGetLeft(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenBinarySetLeft(
    expr: ExpressionRef,
    leftExpr: ExpressionRef
  ): void;
  export function _BinaryenBinaryGetRight(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenBinarySetRight(
    expr: ExpressionRef,
    rightExpr: ExpressionRef
  ): void;

  export function _BinaryenSelect(
    module: ModuleRef,
    conditionExpr: ExpressionRef,
    ifTrueExpr: ExpressionRef,
    ifFalseExpr: ExpressionRef,
    type: TypeRef
  ): ExpressionRef;
  export function _BinaryenSelectGetIfTrue(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenSelectSetIfTrue(
    expr: ExpressionRef,
    ifTrueExpr: ExpressionRef
  ): void;
  export function _BinaryenSelectGetIfFalse(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenSelectSetIfFalse(
    expr: ExpressionRef,
    ifFalseExpr: ExpressionRef
  ): void;
  export function _BinaryenSelectGetCondition(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenSelectSetCondition(
    expr: ExpressionRef,
    conditionExpr: ExpressionRef
  ): void;

  export function _BinaryenDrop(
    module: ModuleRef,
    valueExpr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenDropGetValue(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenDropSetValue(
    expr: ExpressionRef,
    valueExpr: ExpressionRef
  ): void;

  export function _BinaryenReturn(
    module: ModuleRef,
    valueExpr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenReturnGetValue(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenReturnSetValue(
    expr: ExpressionRef,
    valueExpr: ExpressionRef
  ): void;

  export function _BinaryenNop(module: ModuleRef): ExpressionRef;

  export function _BinaryenUnreachable(module: ModuleRef): ExpressionRef;

  export function _BinaryenAtomicRMW(
    module: ModuleRef,
    op: Op,
    bytes: u32,
    offset: u32,
    ptrExpr: ExpressionRef,
    valueExpr: ExpressionRef,
    type: TypeRef,
    memoryName: StringRef
  ): ExpressionRef;
  export function _BinaryenAtomicRMWGetOp(expr: ExpressionRef): Op;
  export function _BinaryenAtomicRMWSetOp(expr: ExpressionRef, op: Op): void;
  export function _BinaryenAtomicRMWGetBytes(expr: ExpressionRef): u32;
  export function _BinaryenAtomicRMWSetBytes(
    expr: ExpressionRef,
    bytes: u32
  ): void;
  export function _BinaryenAtomicRMWGetOffset(expr: ExpressionRef): u32;
  export function _BinaryenAtomicRMWSetOffset(
    expr: ExpressionRef,
    offset: u32
  ): void;
  export function _BinaryenAtomicRMWGetPtr(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenAtomicRMWSetPtr(
    expr: ExpressionRef,
    ptrExpr: ExpressionRef
  ): void;
  export function _BinaryenAtomicRMWGetValue(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenAtomicRMWSetValue(
    expr: ExpressionRef,
    valueExpr: ExpressionRef
  ): void;

  export function _BinaryenAtomicCmpxchg(
    module: ModuleRef,
    bytes: u32,
    offset: u32,
    ptrExpr: ExpressionRef,
    expectedExpr: ExpressionRef,
    replacementExpr: ExpressionRef,
    type: TypeRef,
    memoryName: StringRef
  ): ExpressionRef;
  export function _BinaryenAtomicCmpxchgGetBytes(expr: ExpressionRef): u32;
  export function _BinaryenAtomicCmpxchgSetBytes(
    expr: ExpressionRef,
    bytes: u32
  ): void;
  export function _BinaryenAtomicCmpxchgGetOffset(expr: ExpressionRef): u32;
  export function _BinaryenAtomicCmpxchgSetOffset(
    expr: ExpressionRef,
    offset: u32
  ): void;
  export function _BinaryenAtomicCmpxchgGetPtr(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenAtomicCmpxchgSetPtr(
    expr: ExpressionRef,
    ptrExpr: ExpressionRef
  ): void;
  export function _BinaryenAtomicCmpxchgGetExpected(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenAtomicCmpxchgSetExpected(
    expr: ExpressionRef,
    expectedExpr: ExpressionRef
  ): void;
  export function _BinaryenAtomicCmpxchgGetReplacement(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenAtomicCmpxchgSetReplacement(
    expr: ExpressionRef,
    replacementExpr: ExpressionRef
  ): void;

  export function _BinaryenAtomicWait(
    module: ModuleRef,
    ptrExpr: ExpressionRef,
    expectedExpr: ExpressionRef,
    timeoutExpr: ExpressionRef,
    expectedType: TypeRef,
    memoryName: StringRef
  ): ExpressionRef;
  export function _BinaryenAtomicWaitGetPtr(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenAtomicWaitSetPtr(
    expr: ExpressionRef,
    ptrExpr: ExpressionRef
  ): void;
  export function _BinaryenAtomicWaitGetExpected(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenAtomicWaitSetExpected(
    expr: ExpressionRef,
    expectedExpr: ExpressionRef
  ): void;
  export function _BinaryenAtomicWaitGetTimeout(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenAtomicWaitSetTimeout(
    expr: ExpressionRef,
    timeoutExpr: ExpressionRef
  ): void;
  export function _BinaryenAtomicWaitGetExpectedType(
    expr: ExpressionRef
  ): TypeRef;
  export function _BinaryenAtomicWaitSetExpectedType(
    expr: ExpressionRef,
    expectedType: TypeRef
  ): void;

  export function _BinaryenAtomicNotify(
    module: ModuleRef,
    ptrExpr: ExpressionRef,
    notifyCountExpr: ExpressionRef,
    memoryName: StringRef
  ): ExpressionRef;
  export function _BinaryenAtomicNotifyGetPtr(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenAtomicNotifySetPtr(
    expr: ExpressionRef,
    ptrExpr: ExpressionRef
  ): void;
  export function _BinaryenAtomicNotifyGetNotifyCount(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenAtomicNotifySetNotifyCount(
    expr: ExpressionRef,
    notifyCountExpr: ExpressionRef
  ): void;

  export function _BinaryenAtomicFence(
    module: ModuleRef,
    memoryName: StringRef
  ): ExpressionRef;
  export function _BinaryenAtomicFenceGetOrder(expr: ExpressionRef): u8; // unused
  export function _BinaryenAtomicFenceSetOrder(
    expr: ExpressionRef,
    order: u8
  ): void; // unused

  export function _BinaryenSIMDExtract(
    module: ModuleRef,
    op: Op,
    vecExpr: ExpressionRef,
    index: u8
  ): ExpressionRef;
  export function _BinaryenSIMDExtractGetOp(expr: ExpressionRef): Op;
  export function _BinaryenSIMDExtractSetOp(expr: ExpressionRef, op: Op): void;
  export function _BinaryenSIMDExtractGetVec(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenSIMDExtractSetVec(
    expr: ExpressionRef,
    vecExpr: ExpressionRef
  ): void;
  export function _BinaryenSIMDExtractGetIndex(expr: ExpressionRef): u8;
  export function _BinaryenSIMDExtractSetIndex(
    expr: ExpressionRef,
    index: u8
  ): void;

  export function _BinaryenSIMDReplace(
    module: ModuleRef,
    op: Op,
    vecEpr: ExpressionRef,
    index: u8,
    valueExpr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenSIMDReplaceGetOp(expr: ExpressionRef): Op;
  export function _BinaryenSIMDReplaceSetOp(expr: ExpressionRef, op: Op): void;
  export function _BinaryenSIMDReplaceGetVec(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenSIMDReplaceSetVec(
    expr: ExpressionRef,
    vecExpr: ExpressionRef
  ): void;
  export function _BinaryenSIMDReplaceGetIndex(expr: ExpressionRef): u8;
  export function _BinaryenSIMDReplaceSetIndex(
    expr: ExpressionRef,
    index: u8
  ): void;
  export function _BinaryenSIMDReplaceGetValue(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenSIMDReplaceSetValue(
    expr: ExpressionRef,
    valueExpr: ExpressionRef
  ): void;

  export function _BinaryenSIMDShuffle(
    module: ModuleRef,
    leftExpr: ExpressionRef,
    rightExpr: ExpressionRef,
    mask: ArrayRef<u8>
  ): ExpressionRef;
  export function _BinaryenSIMDShuffleGetLeft(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenSIMDShuffleSetLeft(
    expr: ExpressionRef,
    leftExpr: ExpressionRef
  ): void;
  export function _BinaryenSIMDShuffleGetRight(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenSIMDShuffleSetRight(
    expr: ExpressionRef,
    rightExpr: ExpressionRef
  ): void;
  export function _BinaryenSIMDShuffleGetMask(
    expr: ExpressionRef,
    maskOut: ArrayRef<u8>
  ): void;
  export function _BinaryenSIMDShuffleSetMask(
    expr: ExpressionRef,
    mask: ArrayRef<u8>
  ): void;

  export function _BinaryenSIMDTernary(
    module: ModuleRef,
    op: Op,
    aExpr: ExpressionRef,
    bExpr: ExpressionRef,
    cExpr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenSIMDTernaryGetOp(expr: ExpressionRef): Op;
  export function _BinaryenSIMDTernarySetOp(expr: ExpressionRef, op: Op): void;
  export function _BinaryenSIMDTernaryGetA(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenSIMDTernarySetA(
    expr: ExpressionRef,
    aExpr: ExpressionRef
  ): void;
  export function _BinaryenSIMDTernaryGetB(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenSIMDTernarySetB(
    expr: ExpressionRef,
    bExpr: ExpressionRef
  ): void;
  export function _BinaryenSIMDTernaryGetC(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenSIMDTernarySetC(
    expr: ExpressionRef,
    cExpr: ExpressionRef
  ): void;

  export function _BinaryenSIMDShift(
    module: ModuleRef,
    op: Op,
    vecExpr: ExpressionRef,
    shiftExpr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenSIMDShiftGetOp(expr: ExpressionRef): Op;
  export function _BinaryenSIMDShiftSetOp(expr: ExpressionRef, op: Op): void;
  export function _BinaryenSIMDShiftGetVec(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenSIMDShiftSetVec(
    expr: ExpressionRef,
    vecExpr: ExpressionRef
  ): void;
  export function _BinaryenSIMDShiftGetShift(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenSIMDShiftSetShift(
    expr: ExpressionRef,
    shiftExpr: ExpressionRef
  ): void;

  export function _BinaryenSIMDLoad(
    module: ModuleRef,
    op: Op,
    offset: u32,
    align: u32,
    ptrExpr: ExpressionRef,
    memoryName: StringRef
  ): ExpressionRef;
  export function _BinaryenSIMDLoadGetOp(expr: ExpressionRef): Op;
  export function _BinaryenSIMDLoadSetOp(expr: ExpressionRef, op: Op): void;
  export function _BinaryenSIMDLoadGetOffset(expr: ExpressionRef): u32;
  export function _BinaryenSIMDLoadSetOffset(
    expr: ExpressionRef,
    offset: u32
  ): void;
  export function _BinaryenSIMDLoadGetAlign(expr: ExpressionRef): u32;
  export function _BinaryenSIMDLoadSetAlign(
    expr: ExpressionRef,
    align: u32
  ): void;
  export function _BinaryenSIMDLoadGetPtr(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenSIMDLoadSetPtr(
    expr: ExpressionRef,
    ptrExpr: ExpressionRef
  ): void;

  export function _BinaryenSIMDLoadStoreLane(
    module: ModuleRef,
    op: Op,
    offset: u32,
    align: u32,
    index: u8,
    ptr: ExpressionRef,
    vec: ExpressionRef,
    memoryName: StringRef
  ): ExpressionRef;
  export function _BinaryenSIMDLoadStoreLaneGetOp(expr: ExpressionRef): Op;
  export function _BinaryenSIMDLoadStoreLaneSetOp(
    expr: ExpressionRef,
    op: Op
  ): void;
  export function _BinaryenSIMDLoadStoreLaneGetOffset(expr: ExpressionRef): u32;
  export function _BinaryenSIMDLoadStoreLaneSetOffset(
    expr: ExpressionRef,
    offset: u32
  ): void;
  export function _BinaryenSIMDLoadStoreLaneGetAlign(expr: ExpressionRef): u32;
  export function _BinaryenSIMDLoadStoreLaneSetAlign(
    expr: ExpressionRef,
    align: u32
  ): void;
  export function _BinaryenSIMDLoadStoreLaneGetIndex(expr: ExpressionRef): u8;
  export function _BinaryenSIMDLoadStoreLaneSetIndex(
    expr: ExpressionRef,
    index: u8
  ): void;
  export function _BinaryenSIMDLoadStoreLaneGetPtr(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenSIMDLoadStoreLaneSetPtr(
    expr: ExpressionRef,
    ptrExpr: ExpressionRef
  ): void;
  export function _BinaryenSIMDLoadStoreLaneGetVec(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenSIMDLoadStoreLaneSetVec(
    expr: ExpressionRef,
    vecExpr: ExpressionRef
  ): void;
  export function _BinaryenSIMDLoadStoreLaneIsStore(expr: ExpressionRef): bool;

  export function _BinaryenMemoryInit(
    module: ModuleRef,
    segmentName: StringRef,
    destExpr: ExpressionRef,
    offsetExpr: ExpressionRef,
    sizeExpr: ExpressionRef,
    memoryName: StringRef
  ): ExpressionRef;
  export function _BinaryenMemoryInitGetSegment(expr: ExpressionRef): StringRef;
  export function _BinaryenMemoryInitSetSegment(
    expr: ExpressionRef,
    segmentName: StringRef
  ): void;
  export function _BinaryenMemoryInitGetDest(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenMemoryInitSetDest(
    expr: ExpressionRef,
    destExpr: ExpressionRef
  ): void;
  export function _BinaryenMemoryInitGetOffset(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenMemoryInitSetOffset(
    expr: ExpressionRef,
    offsetExpr: ExpressionRef
  ): void;
  export function _BinaryenMemoryInitGetSize(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenMemoryInitSetSize(
    expr: ExpressionRef,
    sizeExpr: ExpressionRef
  ): void;

  export function _BinaryenDataDrop(
    module: ModuleRef,
    segmentName: StringRef
  ): ExpressionRef;
  export function _BinaryenDataDropGetSegment(expr: ExpressionRef): StringRef;
  export function _BinaryenDataDropSetSegment(
    expr: ExpressionRef,
    segmentName: StringRef
  ): void;

  export function _BinaryenMemoryCopy(
    module: ModuleRef,
    destExpr: ExpressionRef,
    sourceExpr: ExpressionRef,
    sizeExpr: ExpressionRef,
    destMemoryName: StringRef,
    sourceMemoryName: StringRef
  ): ExpressionRef;
  export function _BinaryenMemoryCopyGetDest(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenMemoryCopySetDest(
    expr: ExpressionRef,
    destExpr: ExpressionRef
  ): void;
  export function _BinaryenMemoryCopyGetSource(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenMemoryCopySetSource(
    expr: ExpressionRef,
    sourceExpr: ExpressionRef
  ): void;
  export function _BinaryenMemoryCopyGetSize(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenMemoryCopySetSize(
    expr: ExpressionRef,
    sizeExpr: ExpressionRef
  ): void;

  export function _BinaryenMemoryFill(
    module: ModuleRef,
    destExpr: ExpressionRef,
    valueExpr: ExpressionRef,
    sizeExpr: ExpressionRef,
    memoryName: StringRef
  ): ExpressionRef;
  export function _BinaryenMemoryFillGetDest(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenMemoryFillSetDest(
    expr: ExpressionRef,
    destExpr: ExpressionRef
  ): void;
  export function _BinaryenMemoryFillGetValue(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenMemoryFillSetValue(
    expr: ExpressionRef,
    valueExpr: ExpressionRef
  ): void;
  export function _BinaryenMemoryFillGetSize(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenMemoryFillSetSize(
    expr: ExpressionRef,
    sizeExpr: ExpressionRef
  ): void;

  export function _BinaryenRefNull(
    module: ModuleRef,
    type: TypeRef
  ): ExpressionRef;

  export function _BinaryenRefIsNull(
    module: ModuleRef,
    valueExpr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenRefIsNullGetValue(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenRefIsNullSetValue(
    expr: ExpressionRef,
    valueExpr: ExpressionRef
  ): void;

  export function _BinaryenRefAs(
    module: ModuleRef,
    op: Op,
    valueExpr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenRefAsGetOp(expr: ExpressionRef): Op;
  export function _BinaryenRefAsSetOp(expr: ExpressionRef, op: Op): void;
  export function _BinaryenRefAsGetValue(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenRefAsSetValue(
    expr: ExpressionRef,
    valueExpr: ExpressionRef
  ): void;

  export function _BinaryenRefFunc(
    module: ModuleRef,
    funcName: StringRef,
    type: TypeRef
  ): ExpressionRef;
  export function _BinaryenRefFuncGetFunc(expr: ExpressionRef): StringRef;
  export function _BinaryenRefFuncSetFunc(
    expr: ExpressionRef,
    funcName: StringRef
  ): void;

  export function _BinaryenRefEq(
    module: ModuleRef,
    leftExpr: ExpressionRef,
    rightExpr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenRefEqGetLeft(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenRefEqSetLeft(
    expr: ExpressionRef,
    leftExpr: ExpressionRef
  ): void;
  export function _BinaryenRefEqGetRight(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenRefEqSetRight(
    expr: ExpressionRef,
    rightExpr: ExpressionRef
  ): void;

  export function _BinaryenTableGet(
    module: ModuleRef,
    name: StringRef,
    index: ExpressionRef,
    type: TypeRef
  ): ExpressionRef;
  export function _BinaryenTableGetGetTable(expr: ExpressionRef): StringRef;
  export function _BinaryenTableGetSetTable(
    expr: ExpressionRef,
    table: StringRef
  ): void;
  export function _BinaryenTableGetGetIndex(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenTableGetSetIndex(
    expr: ExpressionRef,
    index: ExpressionRef
  ): void;

  export function _BinaryenTableSet(
    module: ModuleRef,
    name: StringRef,
    index: ExpressionRef,
    value: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenTableSetGetTable(expr: ExpressionRef): StringRef;
  export function _BinaryenTableSetSetTable(
    expr: ExpressionRef,
    table: StringRef
  ): void;
  export function _BinaryenTableSetGetIndex(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenTableSetSetIndex(
    expr: ExpressionRef,
    index: ExpressionRef
  ): void;
  export function _BinaryenTableSetGetValue(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenTableSetSetValue(
    expr: ExpressionRef,
    value: ExpressionRef
  ): void;

  export function _BinaryenTableSize(
    module: ModuleRef,
    name: StringRef
  ): ExpressionRef;
  export function _BinaryenTableSizeGetTable(expr: ExpressionRef): StringRef;
  export function _BinaryenTableSizeSetTable(
    expr: ExpressionRef,
    table: StringRef
  ): void;

  export function _BinaryenTableGrow(
    module: ModuleRef,
    name: StringRef,
    value: ExpressionRef,
    delta: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenTableGrowGetTable(expr: ExpressionRef): StringRef;
  export function _BinaryenTableGrowSetTable(
    expr: ExpressionRef,
    table: StringRef
  ): void;
  export function _BinaryenTableGrowGetValue(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenTableGrowSetValue(
    expr: ExpressionRef,
    value: ExpressionRef
  ): void;
  export function _BinaryenTableGrowGetDelta(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenTableGrowSetDelta(
    expr: ExpressionRef,
    delta: ExpressionRef
  ): void;

  export function _BinaryenTry(
    module: ModuleRef,
    name: StringRef,
    bodyExpr: ExpressionRef,
    catchTags: ArrayRef<StringRef>,
    numCatchTags: Index,
    catchBodies: ArrayRef<ExpressionRef>,
    numCatchBodies: Index,
    delegateTarget: StringRef
  ): ExpressionRef;
  export function _BinaryenTryGetName(expr: ExpressionRef): StringRef;
  export function _BinaryenTrySetName(
    expr: ExpressionRef,
    name: StringRef
  ): void;
  export function _BinaryenTryGetBody(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenTrySetBody(
    expr: ExpressionRef,
    bodyExpr: ExpressionRef
  ): void;
  export function _BinaryenTryGetNumCatchTags(expr: ExpressionRef): Index;
  export function _BinaryenTryGetNumCatchBodies(expr: ExpressionRef): Index;
  export function _BinaryenTryGetCatchTagAt(
    expr: ExpressionRef,
    index: Index
  ): StringRef;
  export function _BinaryenTrySetCatchTagAt(
    expr: ExpressionRef,
    index: Index,
    catchTag: StringRef
  ): void;
  export function _BinaryenTryAppendCatchTag(
    expr: ExpressionRef,
    catchTag: StringRef
  ): Index;
  export function _BinaryenTryInsertCatchTagAt(
    expr: ExpressionRef,
    index: Index,
    catchTag: StringRef
  ): void;
  export function _BinaryenTryRemoveCatchTagAt(
    expr: ExpressionRef,
    index: Index
  ): StringRef;
  export function _BinaryenTryGetCatchBodyAt(
    expr: ExpressionRef,
    index: Index
  ): ExpressionRef;
  export function _BinaryenTrySetCatchBodyAt(
    expr: ExpressionRef,
    index: Index,
    catchExpr: ExpressionRef
  ): void;
  export function _BinaryenTryAppendCatchBody(
    expr: ExpressionRef,
    catchExpr: ExpressionRef
  ): Index;
  export function _BinaryenTryInsertCatchBodyAt(
    expr: ExpressionRef,
    index: Index,
    catchExpr: ExpressionRef
  ): void;
  export function _BinaryenTryRemoveCatchBodyAt(
    expr: ExpressionRef,
    index: Index
  ): ExpressionRef;
  export function _BinaryenTryHasCatchAll(expr: ExpressionRef): bool;
  export function _BinaryenTryGetDelegateTarget(expr: ExpressionRef): StringRef;
  export function _BinaryenTrySetDelegateTarget(
    expr: ExpressionRef,
    delegateTarget: StringRef
  ): void;
  export function _BinaryenTryIsDelegate(expr: ExpressionRef): bool;

  export function _BinaryenThrow(
    module: ModuleRef,
    tagName: StringRef,
    operands: ArrayRef<ExpressionRef>,
    numOperands: Index
  ): ExpressionRef;
  export function _BinaryenThrowGetTag(expr: ExpressionRef): StringRef;
  export function _BinaryenThrowSetTag(
    expr: ExpressionRef,
    tagName: StringRef
  ): void;
  export function _BinaryenThrowGetNumOperands(expr: ExpressionRef): Index;
  export function _BinaryenThrowGetOperandAt(
    expr: ExpressionRef,
    index: Index
  ): ExpressionRef;
  export function _BinaryenThrowSetOperandAt(
    expr: ExpressionRef,
    index: Index,
    operandExpr: ExpressionRef
  ): void;
  export function _BinaryenThrowAppendOperand(
    expr: ExpressionRef,
    operandExpr: ExpressionRef
  ): Index;
  export function _BinaryenThrowInsertOperandAt(
    expr: ExpressionRef,
    index: Index,
    operandExpr: ExpressionRef
  ): void;
  export function _BinaryenThrowRemoveOperandAt(
    expr: ExpressionRef,
    index: Index
  ): ExpressionRef;

  export function _BinaryenRethrow(
    module: ModuleRef,
    target: StringRef
  ): ExpressionRef;
  export function _BinaryenRethrowGetTarget(expr: ExpressionRef): StringRef;
  export function _BinaryenRethrowSetDepth(
    expr: ExpressionRef,
    target: StringRef
  ): void;

  export function _BinaryenTupleMake(
    module: ModuleRef,
    operandExprs: ArrayRef<ExpressionRef>,
    numOperands: Index
  ): ExpressionRef;
  export function _BinaryenTupleMakeGetNumOperands(expr: ExpressionRef): Index;
  export function _BinaryenTupleMakeGetOperandAt(
    expr: ExpressionRef,
    index: Index
  ): ExpressionRef;
  export function _BinaryenTupleMakeSetOperandAt(
    expr: ExpressionRef,
    index: Index,
    operandExpr: ExpressionRef
  ): void;
  export function _BinaryenTupleMakeAppendOperand(
    expr: ExpressionRef,
    operandExpr: ExpressionRef
  ): Index;
  export function _BinaryenTupleMakeInsertOperandAt(
    expr: ExpressionRef,
    index: Index,
    operandExpr: ExpressionRef
  ): void;
  export function _BinaryenTupleMakeRemoveOperandAt(
    expr: ExpressionRef,
    index: Index
  ): ExpressionRef;

  export function _BinaryenTupleExtract(
    module: ModuleRef,
    tupleExpr: ExpressionRef,
    index: Index
  ): ExpressionRef;
  export function _BinaryenTupleExtractGetTuple(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenTupleExtractSetTuple(
    expr: ExpressionRef,
    tupleExpr: ExpressionRef
  ): void;
  export function _BinaryenTupleExtractGetIndex(expr: ExpressionRef): Index;
  export function _BinaryenTupleExtractSetIndex(
    expr: ExpressionRef,
    index: Index
  ): void;

  export function _BinaryenPop(module: ModuleRef, type: TypeRef): ExpressionRef;

  export function _BinaryenRefI31(
    module: ModuleRef,
    value: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenRefI31GetValue(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenRefI31SetValue(
    expr: ExpressionRef,
    valueExpr: ExpressionRef
  ): void;

  export function _BinaryenI31Get(
    module: ModuleRef,
    i31Expr: ExpressionRef,
    signed: bool
  ): ExpressionRef;
  export function _BinaryenI31GetGetI31(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenI31GetSetI31(
    expr: ExpressionRef,
    i31Expr: ExpressionRef
  ): void;
  export function _BinaryenI31GetIsSigned(expr: ExpressionRef): bool;
  export function _BinaryenI31GetSetSigned(
    expr: ExpressionRef,
    signed: bool
  ): void;

  export function _BinaryenCallRef(
    module: ModuleRef,
    target: ExpressionRef,
    operands: ArrayRef<ExpressionRef>,
    numOperands: Index,
    type: TypeRef,
    isReturn: bool
  ): ExpressionRef;
  export function _BinaryenCallRefGetNumOperands(expr: ExpressionRef): Index;
  export function _BinaryenCallRefGetOperandAt(
    expr: ExpressionRef,
    index: Index
  ): ExpressionRef;
  export function _BinaryenCallRefSetOperandAt(
    expr: ExpressionRef,
    index: Index,
    operandExpr: ExpressionRef
  ): void;
  export function _BinaryenCallRefAppendOperand(
    expr: ExpressionRef,
    operandExpr: ExpressionRef
  ): Index;
  export function _BinaryenCallRefInsertOperandAt(
    expr: ExpressionRef,
    index: Index,
    operandExpr: ExpressionRef
  ): void;
  export function _BinaryenCallRefRemoveOperandAt(
    expr: ExpressionRef,
    index: Index
  ): ExpressionRef;
  export function _BinaryenCallRefGetTarget(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenCallRefSetTarget(
    expr: ExpressionRef,
    targetExpr: ExpressionRef
  ): void;
  export function _BinaryenCallRefIsReturn(expr: ExpressionRef): bool;
  export function _BinaryenCallRefSetReturn(
    expr: ExpressionRef,
    isReturn: bool
  ): void;

  export function _BinaryenRefTest(
    module: ModuleRef,
    refExpr: ExpressionRef,
    castType: HeapTypeRef
  ): ExpressionRef;
  export function _BinaryenRefTestGetRef(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenRefTestSetRef(
    expr: ExpressionRef,
    refExpr: ExpressionRef
  ): void;
  export function _BinaryenRefTestGetCastType(expr: ExpressionRef): HeapTypeRef;
  export function _BinaryenRefTestSetCastType(
    expr: ExpressionRef,
    castType: HeapTypeRef
  ): void;

  export function _BinaryenRefCast(
    module: ModuleRef,
    refExpr: ExpressionRef,
    intendedType: HeapTypeRef
  ): ExpressionRef;
  export function _BinaryenRefCastGetRef(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenRefCastSetRef(
    expr: ExpressionRef,
    refExpr: ExpressionRef
  ): void;

  export function _BinaryenBrOn(
    module: ModuleRef,
    op: Op,
    name: StringRef,
    ref: ExpressionRef,
    castType: HeapTypeRef
  ): ExpressionRef;
  export function _BinaryenBrOnGetOp(expr: ExpressionRef): Op;
  export function _BinaryenBrOnSetOp(expr: ExpressionRef, op: Op): void;
  export function _BinaryenBrOnGetName(expr: ExpressionRef): StringRef;
  export function _BinaryenBrOnSetName(
    expr: ExpressionRef,
    nameStr: StringRef
  ): void;
  export function _BinaryenBrOnGetRef(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenBrOnSetRef(
    expr: ExpressionRef,
    refExpr: ExpressionRef
  ): void;
  export function _BinaryenBrOnGetCastType(expr: ExpressionRef): HeapTypeRef;
  export function _BinaryenBrOnSetCastType(
    expr: ExpressionRef,
    castType: HeapTypeRef
  ): void;

  export function _BinaryenStructNew(
    module: ModuleRef,
    operands: ArrayRef<ExpressionRef>,
    numOperands: Index,
    type: HeapTypeRef
  ): ExpressionRef;
  export function _BinaryenStructNewGetNumOperands(expr: ExpressionRef): Index;
  export function _BinaryenStructNewGetOperandAt(
    expr: ExpressionRef,
    index: Index
  ): ExpressionRef;
  export function _BinaryenStructNewSetOperandAt(
    expr: ExpressionRef,
    index: Index,
    operandExpr: ExpressionRef
  ): void;
  export function _BinaryenStructNewAppendOperand(
    expr: ExpressionRef,
    operandExpr: ExpressionRef
  ): Index;
  export function _BinaryenStructNewInsertOperandAt(
    expr: ExpressionRef,
    index: Index,
    operandExpr: ExpressionRef
  ): void;
  export function _BinaryenStructNewRemoveOperandAt(
    expr: ExpressionRef,
    index: Index
  ): ExpressionRef;

  export function _BinaryenStructGet(
    module: ModuleRef,
    index: Index,
    ref: ExpressionRef,
    type: TypeRef,
    signed: bool
  ): ExpressionRef;
  export function _BinaryenStructGetGetIndex(expr: ExpressionRef): Index;
  export function _BinaryenStructGetSetIndex(
    expr: ExpressionRef,
    index: Index
  ): void;
  export function _BinaryenStructGetGetRef(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenStructGetSetRef(
    expr: ExpressionRef,
    refExpr: ExpressionRef
  ): void;
  export function _BinaryenStructGetIsSigned(expr: ExpressionRef): bool;
  export function _BinaryenStructGetSetSigned(
    expr: ExpressionRef,
    signed: bool
  ): void;

  export function _BinaryenStructSet(
    module: ModuleRef,
    index: Index,
    ref: ExpressionRef,
    value: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStructSetGetIndex(expr: ExpressionRef): Index;
  export function _BinaryenStructSetSetIndex(
    expr: ExpressionRef,
    index: Index
  ): void;
  export function _BinaryenStructSetGetRef(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenStructSetSetRef(
    expr: ExpressionRef,
    refExpr: ExpressionRef
  ): void;
  export function _BinaryenStructSetGetValue(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStructSetSetValue(
    expr: ExpressionRef,
    valueExpr: ExpressionRef
  ): void;

  export function _BinaryenArrayNew(
    module: ModuleRef,
    type: HeapTypeRef,
    size: ExpressionRef,
    init: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenArrayNewData(
    module: ModuleRef,
    heapType: HeapTypeRef,
    name: number,
    offset: ExpressionRef,
    size: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenArrayNewGetInit(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenArrayNewSetInit(
    expr: ExpressionRef,
    initExpr: ExpressionRef
  ): void;
  export function _BinaryenArrayNewGetSize(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenArrayNewSetSize(
    expr: ExpressionRef,
    sizeExpr: ExpressionRef
  ): void;

  // TODO: BinaryenArrayNewSeg

  export function _BinaryenArrayNewFixed(
    module: ModuleRef,
    type: HeapTypeRef,
    values: ArrayRef<ExpressionRef>,
    numValues: Index
  ): ExpressionRef;
  export function _BinaryenArrayNewFixedGetNumValues(
    expr: ExpressionRef
  ): Index;
  export function _BinaryenArrayNewFixedGetValueAt(
    expr: ExpressionRef,
    index: Index
  ): ExpressionRef;
  export function _BinaryenArrayNewFixedSetValueAt(
    expr: ExpressionRef,
    index: Index,
    valueExpr: ExpressionRef
  ): void;
  export function _BinaryenArrayNewFixedAppendValue(
    expr: ExpressionRef,
    valueExpr: ExpressionRef
  ): Index;
  export function _BinaryenArrayNewFixedInsertValueAt(
    expr: ExpressionRef,
    index: Index,
    valueExpr: ExpressionRef
  ): void;
  export function _BinaryenArrayNewFixedRemoveValueAt(
    expr: ExpressionRef,
    index: Index
  ): ExpressionRef;

  export function _BinaryenArrayGet(
    module: ModuleRef,
    ref: ExpressionRef,
    index: ExpressionRef,
    type: TypeRef,
    signed: bool
  ): ExpressionRef;
  export function _BinaryenArrayGetGetRef(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenArrayGetSetRef(
    expr: ExpressionRef,
    refExpr: ExpressionRef
  ): void;
  export function _BinaryenArrayGetGetIndex(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenArrayGetSetIndex(
    expr: ExpressionRef,
    indexExpr: ExpressionRef
  ): void;
  export function _BinaryenArrayGetIsSigned(expr: ExpressionRef): bool;
  export function _BinaryenArrayGetSetSigned(
    expr: ExpressionRef,
    signed: bool
  ): void;

  export function _BinaryenArraySet(
    module: ModuleRef,
    ref: ExpressionRef,
    index: ExpressionRef,
    value: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenArraySetGetRef(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenArraySetSetRef(
    expr: ExpressionRef,
    refExpr: ExpressionRef
  ): void;
  export function _BinaryenArraySetGetIndex(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenArraySetSetIndex(
    expr: ExpressionRef,
    indexExpr: ExpressionRef
  ): void;
  export function _BinaryenArraySetGetValue(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenArraySetSetValue(
    expr: ExpressionRef,
    valueExpr: ExpressionRef
  ): void;

  export function _BinaryenArrayLen(
    module: ModuleRef,
    ref: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenArrayLenGetRef(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenArrayLenSetRef(
    expr: ExpressionRef,
    refExpr: ExpressionRef
  ): void;

  export function _BinaryenArrayCopy(
    module: ModuleRef,
    destRef: ExpressionRef,
    destIndex: ExpressionRef,
    srcRef: ExpressionRef,
    srcIndex: ExpressionRef,
    length: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenArrayCopyGetDestRef(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenArrayCopySetDestRef(
    expr: ExpressionRef,
    destRefExpr: ExpressionRef
  ): void;
  export function _BinaryenArrayCopyGetDestIndex(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenArrayCopySetDestIndex(
    expr: ExpressionRef,
    destIndexExpr: ExpressionRef
  ): void;
  export function _BinaryenArrayCopyGetSrcRef(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenArrayCopySetSrcRef(
    expr: ExpressionRef,
    srcRefExpr: ExpressionRef
  ): void;
  export function _BinaryenArrayCopyGetSrcIndex(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenArrayCopySetSrcIndex(
    expr: ExpressionRef,
    srcIndexExpr: ExpressionRef
  ): void;
  export function _BinaryenArrayCopyGetLength(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenArrayCopySetLength(
    expr: ExpressionRef,
    lengthExpr: ExpressionRef
  ): void;

  // TODO: BinaryenArrayFill
  // TODO: BinaryenArrayNewFixed

  export function _BinaryenStringNew(
    module: ModuleRef,
    op: Op,
    ptr: ExpressionRef,
    length: ExpressionRef,
    start: ExpressionRef,
    end: ExpressionRef,
    isTry: bool
  ): ExpressionRef;
  export function _BinaryenStringNewGetOp(expr: ExpressionRef): Op;
  export function _BinaryenStringNewSetOp(expr: ExpressionRef, op: Op): void;
  export function _BinaryenStringNewGetPtr(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenStringNewSetPtr(
    expr: ExpressionRef,
    ptrExpr: ExpressionRef
  ): void;
  export function _BinaryenStringNewGetLength(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringNewSetLength(
    expr: ExpressionRef,
    lengthExpr: ExpressionRef
  ): void;
  export function _BinaryenStringNewGetStart(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringNewSetStart(
    expr: ExpressionRef,
    startExpr: ExpressionRef
  ): void;
  export function _BinaryenStringNewGetEnd(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenStringNewSetEnd(
    expr: ExpressionRef,
    endExpr: ExpressionRef
  ): void;
  export function _BinaryenStringNewIsTry(expr: ExpressionRef): bool;
  export function _BinaryenStringNewSetTry(
    expr: ExpressionRef,
    isTry: bool
  ): void;

  export function _BinaryenStringConst(
    module: ExpressionRef,
    name: StringRef
  ): ExpressionRef;
  export function _BinaryenStringConstGetString(expr: ExpressionRef): StringRef;
  export function _BinaryenStringConstSetString(
    expr: ExpressionRef,
    string: StringRef
  ): void;

  export function _BinaryenStringMeasure(
    module: ExpressionRef,
    op: Op,
    ref: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringMeasureGetOp(expr: ExpressionRef): Op;
  export function _BinaryenStringMeasureSetOp(
    expr: ExpressionRef,
    op: Op
  ): void;
  export function _BinaryenStringMeasureGetRef(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringMeasureSetRef(
    expr: ExpressionRef,
    refExpr: ExpressionRef
  ): void;

  export function _BinaryenStringEncode(
    module: ExpressionRef,
    op: Op,
    ref: ExpressionRef,
    ptr: ExpressionRef,
    start: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringEncodeGetOp(expr: ExpressionRef): Op;
  export function _BinaryenStringEncodeSetOp(expr: ExpressionRef, op: Op): void;
  export function _BinaryenStringEncodeGetRef(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringEncodeSetRef(
    expr: ExpressionRef,
    refExpr: ExpressionRef
  ): void;
  export function _BinaryenStringEncodeGetPtr(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringEncodeSetPtr(
    expr: ExpressionRef,
    ptrExpr: ExpressionRef
  ): void;
  export function _BinaryenStringEncodeGetStart(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringEncodeSetStart(
    expr: ExpressionRef,
    startExpr: ExpressionRef
  ): void;

  export function _BinaryenStringConcat(
    module: ExpressionRef,
    left: ExpressionRef,
    right: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringConcatGetLeft(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringConcatSetLeft(
    expr: ExpressionRef,
    leftExpr: ExpressionRef
  ): void;
  export function _BinaryenStringConcatGetRight(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringConcatSetRight(
    expr: ExpressionRef,
    rightExpr: ExpressionRef
  ): void;

  export function _BinaryenStringEq(
    module: ExpressionRef,
    op: Op,
    left: ExpressionRef,
    right: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringEqGetOp(expr: ExpressionRef): Op;
  export function _BinaryenStringEqSetOp(expr: ExpressionRef, op: Op): void;
  export function _BinaryenStringEqGetLeft(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenStringEqSetLeft(
    expr: ExpressionRef,
    leftExpr: ExpressionRef
  ): void;
  export function _BinaryenStringEqGetRight(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenStringEqSetRight(
    expr: ExpressionRef,
    rightExpr: ExpressionRef
  ): void;

  export function _BinaryenStringAs(
    module: ExpressionRef,
    op: Op,
    ref: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringAsGetOp(expr: ExpressionRef): Op;
  export function _BinaryenStringAsSetOp(expr: ExpressionRef, op: Op): void;
  export function _BinaryenStringAsGetRef(expr: ExpressionRef): ExpressionRef;
  export function _BinaryenStringAsSetRef(
    expr: ExpressionRef,
    refExpr: ExpressionRef
  ): void;

  export function _BinaryenStringWTF8Advance(
    module: ExpressionRef,
    ref: ExpressionRef,
    pos: ExpressionRef,
    bytes: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringWTF8AdvanceGetRef(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringWTF8AdvanceSetRef(
    expr: ExpressionRef,
    refExpr: ExpressionRef
  ): void;
  export function _BinaryenStringWTF8AdvanceGetPos(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringWTF8AdvanceSetPos(
    expr: ExpressionRef,
    posExpr: ExpressionRef
  ): void;
  export function _BinaryenStringWTF8AdvanceGetBytes(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringWTF8AdvanceSetBytes(
    expr: ExpressionRef,
    bytesExpr: ExpressionRef
  ): void;

  export function _BinaryenStringWTF16Get(
    module: ExpressionRef,
    ref: ExpressionRef,
    pos: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringWTF16GetGetRef(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringWTF16GetSetRef(
    expr: ExpressionRef,
    refExpr: ExpressionRef
  ): void;
  export function _BinaryenStringWTF16GetGetPos(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringWTF16GetSetPos(
    expr: ExpressionRef,
    posExpr: ExpressionRef
  ): void;

  export function _BinaryenStringIterNext(
    module: ExpressionRef,
    ref: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringIterNextGetRef(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringIterNextSetRef(
    expr: ExpressionRef,
    refExpr: ExpressionRef
  ): void;

  export function _BinaryenStringIterMove(
    module: ExpressionRef,
    op: Op,
    ref: ExpressionRef,
    num: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringIterMoveGetOp(expr: ExpressionRef): Op;
  export function _BinaryenStringIterMoveSetOp(
    expr: ExpressionRef,
    op: Op
  ): void;
  export function _BinaryenStringIterMoveGetRef(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringIterMoveSetRef(
    expr: ExpressionRef,
    refExpr: ExpressionRef
  ): void;
  export function _BinaryenStringIterMoveGetNum(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringIterMoveSetNum(
    expr: ExpressionRef,
    numExpr: ExpressionRef
  ): void;

  export function _BinaryenStringSliceWTF(
    module: ExpressionRef,
    op: Op,
    ref: ExpressionRef,
    start: ExpressionRef,
    end: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringSliceWTFGetOp(expr: ExpressionRef): Op;
  export function _BinaryenStringSliceWTFSetOp(
    expr: ExpressionRef,
    op: Op
  ): void;
  export function _BinaryenStringSliceWTFGetRef(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringSliceWTFSetRef(
    expr: ExpressionRef,
    refExpr: ExpressionRef
  ): void;
  export function _BinaryenStringSliceWTFGetStart(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringSliceWTFSetStart(
    expr: ExpressionRef,
    startExpr: ExpressionRef
  ): void;
  export function _BinaryenStringSliceWTFGetEnd(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringSliceWTFSetEnd(
    expr: ExpressionRef,
    endExpr: ExpressionRef
  ): void;

  export function _BinaryenStringSliceIter(
    module: ExpressionRef,
    ref: ExpressionRef,
    num: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringSliceIterGetRef(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringSliceIterSetRef(
    expr: ExpressionRef,
    refExpr: ExpressionRef
  ): void;
  export function _BinaryenStringSliceIterGetNum(
    expr: ExpressionRef
  ): ExpressionRef;
  export function _BinaryenStringSliceIterSetNum(
    expr: ExpressionRef,
    numExpr: ExpressionRef
  ): void;

  export function _BinaryenAddFunction(
    module: ModuleRef,
    name: StringRef,
    params: TypeRef,
    results: TypeRef,
    varTypes: ArrayRef<TypeRef>,
    numVarTypes: Index,
    body: ExpressionRef
  ): FunctionRef;
  export function _BinaryenGetFunction(
    module: ModuleRef,
    name: StringRef
  ): FunctionRef;
  export function _BinaryenRemoveFunction(
    module: ModuleRef,
    name: StringRef
  ): void;
  export function _BinaryenGetNumFunctions(module: ModuleRef): Index;
  export function _BinaryenGetFunctionByIndex(
    module: ModuleRef,
    index: Index
  ): FunctionRef;

  export function _BinaryenFunctionGetName(func: FunctionRef): StringRef;
  export function _BinaryenFunctionGetParams(func: FunctionRef): TypeRef;
  export function _BinaryenFunctionGetResults(func: FunctionRef): TypeRef;
  export function _BinaryenFunctionGetNumVars(func: FunctionRef): Index;
  export function _BinaryenFunctionGetVar(
    func: FunctionRef,
    index: Index
  ): TypeRef;
  export function _BinaryenFunctionGetNumLocals(func: FunctionRef): Index;
  export function _BinaryenFunctionHasLocalName(
    func: FunctionRef,
    index: Index
  ): bool;
  export function _BinaryenFunctionGetLocalName(
    func: FunctionRef,
    index: Index
  ): StringRef;
  export function _BinaryenFunctionSetLocalName(
    func: FunctionRef,
    index: Index,
    name: StringRef
  ): void;
  export function _BinaryenFunctionGetBody(func: FunctionRef): ExpressionRef;
  export function _BinaryenFunctionSetBody(
    func: FunctionRef,
    bodyExpr: ExpressionRef
  ): void;
  export function _BinaryenFunctionOptimize(
    func: FunctionRef,
    module: ModuleRef
  ): void;
  export function _BinaryenFunctionRunPasses(
    func: FunctionRef,
    module: ModuleRef,
    passes: ArrayRef<StringRef>,
    numPasses: Index
  ): void;
  export function _BinaryenFunctionSetDebugLocation(
    func: FunctionRef,
    expr: ExpressionRef,
    fileIndex: Index,
    lineNumber: Index,
    columnNumber: Index
  ): void;

  export function _BinaryenAddFunctionImport(
    module: ModuleRef,
    internalName: StringRef,
    externalModuleName: StringRef,
    externalBaseName: StringRef,
    params: TypeRef,
    results: TypeRef
  ): void;
  export function _BinaryenAddTableImport(
    module: ModuleRef,
    internalName: StringRef,
    externalModuleName: StringRef,
    externalBaseName: StringRef
  ): void;
  export function _BinaryenAddMemoryImport(
    module: ModuleRef,
    internalName: StringRef,
    externalModuleName: StringRef,
    externalBaseName: StringRef,
    shared: bool
  ): void;
  export function _BinaryenAddGlobalImport(
    module: ModuleRef,
    internalName: StringRef,
    externalModuleName: StringRef,
    externalBaseName: StringRef,
    globalType: TypeRef,
    mutable: bool
  ): void;
  export function _BinaryenAddTagImport(
    module: ModuleRef,
    internalName: StringRef,
    externalModuleName: StringRef,
    externalBaseName: StringRef,
    params: TypeRef,
    results: TypeRef
  ): void;

  export function _BinaryenAddFunctionExport(
    module: ModuleRef,
    internalName: StringRef,
    externalName: StringRef
  ): ExportRef;
  export function _BinaryenAddTableExport(
    module: ModuleRef,
    internalName: StringRef,
    externalName: StringRef
  ): ExportRef;
  export function _BinaryenAddMemoryExport(
    module: ModuleRef,
    internalName: StringRef,
    externalName: StringRef
  ): ExportRef;
  export function _BinaryenAddGlobalExport(
    module: ModuleRef,
    internalName: StringRef,
    externalName: StringRef
  ): ExportRef;
  export function _BinaryenAddTagExport(
    module: ModuleRef,
    internalName: StringRef,
    externalName: StringRef
  ): ExportRef;
  export function _BinaryenGetExport(
    module: ModuleRef,
    externalName: StringRef
  ): ExportRef;
  export function _BinaryenRemoveExport(
    module: ModuleRef,
    externalName: StringRef
  ): void;
  export function _BinaryenGetNumExports(module: ModuleRef): Index;
  export function _BinaryenGetExportByIndex(
    module: ModuleRef,
    index: Index
  ): ExportRef;
  export function _BinaryenExportGetKind(ref: ExportRef): ExternalKind;
  export function _BinaryenExportGetName(ref: ExportRef): StringRef;
  export function _BinaryenExportGetValue(ref: ExportRef): StringRef;

  export function _BinaryenAddGlobal(
    module: ModuleRef,
    name: StringRef,
    type: TypeRef,
    mutable: bool,
    init: ExpressionRef
  ): GlobalRef;
  export function _BinaryenGetGlobal(
    module: ModuleRef,
    name: StringRef
  ): GlobalRef;
  export function _BinaryenRemoveGlobal(
    module: ModuleRef,
    name: StringRef
  ): void;
  export function _BinaryenGetNumGlobals(module: ModuleRef): Index;
  export function _BinaryenGetGlobalByIndex(
    module: ModuleRef,
    index: Index
  ): GlobalRef;

  export function _BinaryenGlobalGetName(global: GlobalRef): StringRef;
  export function _BinaryenGlobalGetType(global: GlobalRef): TypeRef;
  export function _BinaryenGlobalIsMutable(global: GlobalRef): bool;
  export function _BinaryenGlobalGetInitExpr(global: GlobalRef): ExpressionRef;

  export function _BinaryenAddTag(
    module: ModuleRef,
    name: StringRef,
    params: TypeRef,
    results: TypeRef
  ): TagRef;
  export function _BinaryenGetTag(module: ModuleRef, name: StringRef): TagRef;
  export function _BinaryenRemoveTag(module: ModuleRef, name: StringRef): void;

  export function _BinaryenTagGetName(tag: TagRef): StringRef;
  export function _BinaryenTagGetParams(tag: TagRef): TypeRef;
  export function _BinaryenTagGetResults(tag: TagRef): TypeRef;

  export function _BinaryenAddTable(
    module: ModuleRef,
    name: StringRef,
    initial: Index,
    maximum: Index,
    type: TypeRef
  ): TableRef;
  export function _BinaryenRemoveTable(
    module: ModuleRef,
    table: StringRef
  ): void;
  export function _BinaryenGetNumTables(module: ModuleRef): Index;
  export function _BinaryenGetTable(
    module: ModuleRef,
    name: StringRef
  ): TableRef;
  export function _BinaryenGetTableByIndex(
    module: ModuleRef,
    index: Index
  ): TableRef;

  export function _BinaryenTableGetName(table: TableRef): StringRef;
  export function _BinaryenTableSetName(table: TableRef, name: StringRef): void;
  export function _BinaryenTableGetInitial(table: TableRef): Index;
  export function _BinaryenTableSetInitial(
    table: TableRef,
    initial: Index
  ): void;
  export function _BinaryenTableHasMax(table: TableRef): bool;
  export function _BinaryenTableGetMax(table: TableRef): Index;
  export function _BinaryenTableSetMax(table: TableRef, max: Index): void;

  export function _BinaryenAddActiveElementSegment(
    module: ModuleRef,
    table: StringRef,
    name: StringRef,
    funcNames: ArrayRef<StringRef>,
    numFuncNames: Index,
    offset: ExpressionRef
  ): ElementSegmentRef;
  export function _BinaryenAddPassiveElementSegment(
    module: ModuleRef,
    name: StringRef,
    funcNames: ArrayRef<StringRef>,
    numFuncNames: Index
  ): ElementSegmentRef;
  export function _BinaryenRemoveElementSegment(
    module: ModuleRef,
    name: StringRef
  ): void;
  export function _BinaryenGetNumElementSegments(
    module: ModuleRef,
    name: StringRef
  ): Index;
  export function _BinaryenGetElementSegment(
    module: ModuleRef,
    name: StringRef
  ): ElementSegmentRef;
  export function _BinaryenGetElementSegmentByIndex(
    module: ModuleRef,
    index: Index
  ): ElementSegmentRef;

  export function _BinaryenSetMemory(
    module: ModuleRef,
    initial: Index,
    maximum: Index,
    exportName: StringRef,
    segments: ArrayRef<ArrayRef<u8>>,
    segmentPassive: ArrayRef<bool>,
    segmentOffsets: ArrayRef<usize>,
    segmentSizes: ArrayRef<u32>,
    numSegments: Index,
    shared: bool,
    memory64: bool,
    name: StringRef
  ): void;
  export function _BinaryenGetNumMemorySegments(module: ModuleRef): Index;
  export function _BinaryenGetMemorySegmentByteOffset(
    module: ModuleRef,
    index: Index
  ): u32;
  export function _BinaryenGetMemorySegmentByteLength(
    module: ModuleRef,
    id: Index
  ): usize;
  export function _BinaryenCopyMemorySegmentData(
    module: ModuleRef,
    id: Index,
    buffer: ArrayRef<u8>
  ): void;

  export function _BinaryenSetStart(
    module: ModuleRef,
    start: FunctionRef
  ): void;

  export function _BinaryenModuleParse(text: StringRef): ModuleRef;
  export function _BinaryenModulePrint(module: ModuleRef): void;
  export function _BinaryenModulePrintAsmjs(module: ModuleRef): void;
  export function _BinaryenModuleValidate(module: ModuleRef): i32;
  export function _BinaryenModuleOptimize(module: ModuleRef): void;
  export function _BinaryenModuleRunPasses(
    module: ModuleRef,
    passes: ArrayRef<StringRef>,
    numPasses: Index
  ): void;
  export function _BinaryenModuleAutoDrop(module: ModuleRef): void;
  export function _BinaryenSizeofAllocateAndWriteResult(): i32;
  export function _BinaryenModuleAllocateAndWrite(
    resultOut: BinaryenModuleAllocateAndWriteResultRef,
    module: ModuleRef,
    sourceMapUrl: StringRef
  ): void;
  export function _BinaryenModuleAllocateAndWriteText(
    module: ModuleRef
  ): StringRef;
  export function _BinaryenModuleAllocateAndWriteStackIR(
    module: ModuleRef,
    optimize: bool
  ): StringRef;
  export function _BinaryenModuleRead(
    input: ArrayRef<u8>,
    inputSize: usize
  ): ModuleRef;
  export function _BinaryenModuleInterpret(module: ModuleRef): void;
  export function _BinaryenModuleAddDebugInfoFileName(
    module: ModuleRef,
    filename: StringRef
  ): Index;
  export function _BinaryenModuleGetDebugInfoFileName(
    module: ModuleRef,
    index: Index
  ): StringRef;
  export function _BinaryenModuleGetFeatures(module: ModuleRef): FeatureFlags;
  export function _BinaryenModuleSetFeatures(
    module: ModuleRef,
    featureFlags: FeatureFlags
  ): void;

  export function _BinaryenAddCustomSection(
    module: ModuleRef,
    name: StringRef,
    contents: ArrayRef<u8>,
    contentsSize: Index
  ): void;

  export function _BinaryenExpressionGetSideEffects(
    expr: ExpressionRef,
    module: ModuleRef
  ): SideEffects;

  export function _RelooperCreate(module: ModuleRef): RelooperRef;
  export function _RelooperAddBlock(
    relooper: RelooperRef,
    code: ExpressionRef
  ): RelooperBlockRef;
  export function _RelooperAddBranch(
    from: RelooperBlockRef,
    to: RelooperBlockRef,
    condition: ExpressionRef,
    code: ExpressionRef
  ): void;
  export function _RelooperAddBlockWithSwitch(
    relooper: RelooperRef,
    code: ExpressionRef,
    condition: ExpressionRef
  ): RelooperBlockRef;
  export function _RelooperAddBranchForSwitch(
    from: RelooperBlockRef,
    to: RelooperBlockRef,
    indexes: ArrayRef<Index>,
    numIndexes: Index,
    code: ExpressionRef
  ): void;
  export function _RelooperRenderAndDispose(
    relooper: RelooperRef,
    entry: RelooperBlockRef,
    labelHelper: Index
  ): ExpressionRef;

  export function _ExpressionRunnerCreate(
    module: ModuleRef,
    flags: ExpressionRunnerFlags,
    maxDepth: Index,
    maxLoopIterations: Index
  ): ExpressionRunnerRef;
  export function _ExpressionRunnerSetLocalValue(
    runner: ExpressionRunnerRef,
    index: Index,
    value: ExpressionRef
  ): bool;
  export function _ExpressionRunnerSetGlobalValue(
    runner: ExpressionRunnerRef,
    name: StringRef,
    value: ExpressionRef
  ): bool;
  export function _ExpressionRunnerRunAndDispose(
    runner: ExpressionRunnerRef,
    expr: ExpressionRef
  ): ExpressionRef;

  export function _TypeBuilderCreate(size: Index): TypeBuilderRef;
  export function _TypeBuilderGrow(builder: TypeBuilderRef, count: Index): void;
  export function _TypeBuilderGetSize(builder: TypeBuilderRef): Index;
  export function _TypeBuilderSetSignatureType(
    builder: TypeBuilderRef,
    index: Index,
    paramTypes: TypeRef,
    resultTypes: TypeRef
  ): void;
  export function _TypeBuilderSetStructType(
    builder: TypeBuilderRef,
    index: Index,
    fieldTypes: ArrayRef<TypeRef>,
    fieldPackedTypes: ArrayRef<PackedType>,
    fieldMutables: ArrayRef<bool>,
    numFields: i32
  ): void;
  export function _TypeBuilderSetArrayType(
    builder: TypeBuilderRef,
    index: Index,
    elementType: TypeRef,
    elementPackedTyype: PackedType,
    elementMutable: bool
  ): void;
  export function _TypeBuilderGetTempHeapType(
    builder: TypeBuilderRef,
    index: Index
  ): HeapTypeRef;
  export function _TypeBuilderGetTempTupleType(
    builder: TypeBuilderRef,
    types: ArrayRef<TypeRef>,
    numTypes: Index
  ): TypeRef;
  export function _TypeBuilderGetTempRefType(
    builder: TypeBuilderRef,
    heapType: HeapTypeRef,
    nullable: bool
  ): TypeRef;
  export function _TypeBuilderSetSubType(
    builder: TypeBuilderRef,
    index: Index,
    superType: HeapTypeRef
  ): void;
  export function _TypeBuilderSetOpen(
    builder: TypeBuilderRef,
    index: Index
  ): void;
  export function _TypeBuilderCreateRecGroup(
    builder: TypeBuilderRef,
    index: Index,
    length: Index
  ): void;
  export function _TypeBuilderBuildAndDispose(
    builder: TypeBuilderRef,
    heapTypes: ArrayRef<HeapTypeRef>,
    errorIndex: Pointer<Index>,
    errorReason: Pointer<TypeBuilderErrorReason>
  ): bool;
  export function _BinaryenModuleSetTypeName(
    module: ModuleRef,
    heapType: HeapTypeRef,
    name: StringRef
  ): void;
  export function _BinaryenModuleSetFieldName(
    module: ModuleRef,
    heapType: HeapTypeRef,
    index: Index,
    name: StringRef
  ): void;

  export function _BinaryenGetOptimizeLevel(): i32;
  export function _BinaryenSetOptimizeLevel(level: i32): void;
  export function _BinaryenGetShrinkLevel(): i32;
  export function _BinaryenSetShrinkLevel(level: i32): void;
  export function _BinaryenGetDebugInfo(): bool;
  export function _BinaryenSetDebugInfo(on: bool): void;
  export function _BinaryenGetLowMemoryUnused(): bool;
  export function _BinaryenSetLowMemoryUnused(on: bool): void;
  export function _BinaryenGetZeroFilledMemory(): bool;
  export function _BinaryenSetZeroFilledMemory(on: bool): void;
  export function _BinaryenGetFastMath(): bool;
  export function _BinaryenSetFastMath(on: bool): void;
  export function _BinaryenGetPassArgument(key: StringRef): StringRef;
  export function _BinaryenSetPassArgument(
    key: StringRef,
    value: StringRef
  ): void;
  export function _BinaryenClearPassArguments(): void;
  export function _BinaryenGetAlwaysInlineMaxSize(): Index;
  export function _BinaryenSetAlwaysInlineMaxSize(size: Index): void;
  export function _BinaryenGetFlexibleInlineMaxSize(): Index;
  export function _BinaryenSetFlexibleInlineMaxSize(size: Index): void;
  export function _BinaryenGetOneCallerInlineMaxSize(): Index;
  export function _BinaryenSetOneCallerInlineMaxSize(size: Index): void;
  export function _BinaryenGetAllowInliningFunctionsWithLoops(): bool;
  export function _BinaryenSetAllowInliningFunctionsWithLoops(
    enabled: bool
  ): void;

  // Helpers

  export function _malloc(size: usize): usize;
  export function _free(ptr: usize): void;
  export function __i32_store8(ptr: usize, value: number): void;
  export function __i32_store16(ptr: usize, value: number): void;
  export function __i32_store(ptr: usize, value: number): void;
  export function __f32_store(ptr: usize, value: number): void;
  export function __f64_store(ptr: usize, value: number): void;
  export function __i32_load8_s(ptr: usize): i8;
  export function __i32_load8_u(ptr: usize): u8;
  export function __i32_load16_s(ptr: usize): i16;
  export function __i32_load16_u(ptr: usize): u16;
  export function __i32_load(ptr: usize): i32;
  export function __f32_load(ptr: usize): f32;
  export function __f64_load(ptr: usize): f64;
}
