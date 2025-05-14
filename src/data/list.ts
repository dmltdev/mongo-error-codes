import { MongoError } from "../types";

/**
 * List of all the error codes for the MongoDB driver.
 *
 * @see https://www.mongodb.com/docs/manual/reference/error-codes/
 */
export const MongoErrorList: MongoError[] = [
  {
    code: 1,
    name: "InternalError",
    description: "An unspecified internal error occurred.",
  },
  {
    code: 2,
    name: "BadValue",
    description: "The value provided is invalid.",
  },
  {
    code: 3,
    name: "NoSuchKey",
    description: "The key provided does not exist.",
  },
  {
    code: 5,
    name: "GraphContainsCycle",
    description: "The graph contains a cycle.",
  },
  {
    code: 6,
    name: "HostUnreachable",
    description: "The host is unreachable.",
  },
  {
    code: 7,
    name: "HostNotFound",
    description: "The host could not be found.",
  },
  {
    code: 9,
    name: "FailedToParse",
    description: "Failed to parse the input or command.",
  },
  {
    code: 10,
    name: "CannotMutateObject",
  },
  {
    code: 11,
    name: "UserNotFound",
    description: "The specified user was not found.",
  },
  {
    code: 12,
    name: "UnsupportedFormat",
  },
  {
    code: 13,
    name: "Unauthorized",
    description: "Unauthorized operation or access.",
  },
  {
    code: 14,
    name: "TypeMismatch",
    description: "A value did not match the expected type.",
  },
  {
    code: 15,
    name: "Overflow",
    description: "A value overflowed the allowed range.",
  },
  {
    code: 16,
    name: "InvalidLength",
    description: "A value had an invalid length.",
  },
  {
    code: 17,
    name: "ProtocolError",
    description: "A protocol error occurred.",
  },
  {
    code: 18,
    name: "AuthenticationFailed",
    description: "Authentication failed.",
  },
  {
    code: 19,
    name: "CannotReuseObject",
  },
  {
    code: 20,
    name: "IllegalOperation",
    description: "The operation is not allowed.",
  },
  {
    code: 21,
    name: "EmptyArrayOperation",
    description: "Operation on an empty array is not allowed.",
  },
  {
    code: 22,
    name: "InvalidBSON",
    description: "The BSON is invalid.",
  },
  {
    code: 23,
    name: "AlreadyInitialized",
    description: "The resource is already initialized.",
  },
  {
    code: 24,
    name: "LockTimeout",
    description: "A lock timed out.",
  },
  {
    code: 25,
    name: "RemoteValidationError",
  },
  {
    code: 26,
    name: "NamespaceNotFound",
    description: "The specified namespace was not found.",
  },
  {
    code: 27,
    name: "IndexNotFound",
    description: "The specified index was not found.",
  },
  {
    code: 28,
    name: "PathNotViable",
  },
  {
    code: 29,
    name: "NonExistentPath",
  },
  {
    code: 30,
    name: "InvalidPath",
  },
  {
    code: 31,
    name: "RoleNotFound",
    description: "The specified role was not found.",
  },
  {
    code: 32,
    name: "RolesNotRelated",
  },
  {
    code: 33,
    name: "PrivilegeNotFound",
  },
  {
    code: 34,
    name: "CannotBackfillArray",
  },
  {
    code: 35,
    name: "UserModificationFailed",
  },
  {
    code: 36,
    name: "RemoteChangeDetected",
  },
  {
    code: 37,
    name: "FileRenameFailed",
  },
  {
    code: 38,
    name: "FileNotOpen",
  },
  {
    code: 39,
    name: "FileStreamFailed",
  },
  {
    code: 40,
    name: "ConflictingUpdateOperators",
  },
  {
    code: 41,
    name: "FileAlreadyOpen",
  },
  {
    code: 42,
    name: "LogWriteFailed",
  },
  {
    code: 43,
    name: "CursorNotFound",
    description: "The cursor was not found.",
  },
  {
    code: 45,
    name: "UserDataInconsistent",
  },
  {
    code: 46,
    name: "LockBusy",
  },
  {
    code: 47,
    name: "NoMatchingDocument",
    description: "No document matched the query.",
  },
  {
    code: 48,
    name: "NamespaceExists",
    description: "The namespace already exists.",
  },
  {
    code: 49,
    name: "InvalidRoleModification",
  },
  {
    code: 50,
    name: "MaxTimeMSExpired",
    description: "The operation exceeded the specified maxTimeMS.",
  },
  {
    code: 51,
    name: "ManualInterventionRequired",
  },
  {
    code: 52,
    name: "DollarPrefixedFieldName",
  },
  {
    code: 53,
    name: "InvalidIdField",
  },
  {
    code: 54,
    name: "NotSingleValueField",
  },
  {
    code: 55,
    name: "InvalidDBRef",
  },
  {
    code: 56,
    name: "EmptyFieldName",
  },
  {
    code: 57,
    name: "DottedFieldName",
  },
  {
    code: 58,
    name: "RoleModificationFailed",
  },
  {
    code: 59,
    name: "CommandNotFound",
    description: "The command was not found.",
  },
  {
    code: 61,
    name: "ShardKeyNotFound",
  },
  {
    code: 62,
    name: "OplogOperationUnsupported",
  },
  {
    code: 63,
    name: "StaleShardVersion",
  },
  {
    code: 64,
    name: "WriteConcernTimeout",
  },
  {
    code: 65,
    name: "MultipleErrorsOccurred",
  },
  {
    code: 66,
    name: "ImmutableField",
  },
  {
    code: 67,
    name: "CannotCreateIndex",
  },
  {
    code: 68,
    name: "IndexAlreadyExists",
  },
  {
    code: 69,
    name: "AuthSchemaIncompatible",
  },
  {
    code: 70,
    name: "ShardNotFound",
  },
  {
    code: 71,
    name: "ReplicaSetNotFound",
  },
  {
    code: 72,
    name: "InvalidOptions",
  },
  {
    code: 73,
    name: "InvalidNamespace",
  },
  {
    code: 74,
    name: "NodeNotFound",
  },
  {
    code: 75,
    name: "WriteConcernLegacyOK",
  },
  {
    code: 76,
    name: "NoReplicationEnabled",
  },
  {
    code: 77,
    name: "OperationIncomplete",
  },
  {
    code: 78,
    name: "CommandResultSchemaViolation",
  },
  {
    code: 79,
    name: "UnknownReplWriteConcern",
  },
  {
    code: 80,
    name: "RoleDataInconsistent",
  },
  {
    code: 81,
    name: "NoMatchParseContext",
  },
  {
    code: 82,
    name: "NoProgressMade",
  },
  {
    code: 83,
    name: "RemoteResultsUnavailable",
  },
  {
    code: 85,
    name: "IndexOptionsConflict",
  },
  {
    code: 86,
    name: "IndexKeySpecsConflict",
  },
  {
    code: 87,
    name: "CannotSplit",
  },
  {
    code: 89,
    name: "NetworkTimeout",
  },
  {
    code: 90,
    name: "CallbackCanceled",
  },
  {
    code: 91,
    name: "ShutdownInProgress",
  },
  {
    code: 92,
    name: "SecondaryAheadOfPrimary",
  },
  {
    code: 93,
    name: "InvalidReplicaSetConfig",
  },
  {
    code: 94,
    name: "NotYetInitialized",
  },
  {
    code: 95,
    name: "NotSecondary",
  },
  {
    code: 96,
    name: "OperationFailed",
  },
  {
    code: 97,
    name: "NoProjectionFound",
  },
  {
    code: 98,
    name: "DBPathInUse",
  },
  {
    code: 100,
    name: "UnsatisfiableWriteConcern",
  },
  {
    code: 101,
    name: "OutdatedClient",
  },
  {
    code: 102,
    name: "IncompatibleAuditMetadata",
  },
  {
    code: 103,
    name: "NewReplicaSetConfigurationIncompatible",
  },
  {
    code: 104,
    name: "NodeNotElectable",
  },
  {
    code: 105,
    name: "IncompatibleShardingMetadata",
  },
  {
    code: 106,
    name: "DistributedClockSkewed",
  },
  {
    code: 107,
    name: "LockFailed",
  },
  {
    code: 108,
    name: "InconsistentReplicaSetNames",
  },
  {
    code: 109,
    name: "ConfigurationInProgress",
  },
  {
    code: 110,
    name: "CannotInitializeNodeWithData",
  },
  {
    code: 111,
    name: "NotExactValueField",
  },
  {
    code: 112,
    name: "WriteConflict",
  },
  {
    code: 113,
    name: "InitialSyncFailure",
  },
  {
    code: 114,
    name: "InitialSyncOplogSourceMissing",
  },
  {
    code: 115,
    name: "CommandNotSupported",
  },
  {
    code: 116,
    name: "DocTooLargeForCapped",
  },
  {
    code: 117,
    name: "ConflictingOperationInProgress",
  },
  {
    code: 118,
    name: "NamespaceNotSharded",
  },
  {
    code: 119,
    name: "InvalidSyncSource",
  },
  {
    code: 120,
    name: "OplogStartMissing",
  },
  {
    code: 121,
    name: "DocumentValidationFailure",
  },
  {
    code: 123,
    name: "NotAReplicaSet",
  },
  {
    code: 124,
    name: "IncompatibleElectionProtocol",
  },
  {
    code: 125,
    name: "CommandFailed",
  },
  {
    code: 126,
    name: "RPCProtocolNegotiationFailed",
  },
  {
    code: 127,
    name: "UnrecoverableRollbackError",
  },
  {
    code: 128,
    name: "LockNotFound",
  },
  {
    code: 129,
    name: "LockStateChangeFailed",
  },
  {
    code: 130,
    name: "SymbolNotFound",
  },
  {
    code: 133,
    name: "FailedToSatisfyReadPreference",
  },
  {
    code: 134,
    name: "ReadConcernMajorityNotAvailableYet",
  },
  {
    code: 135,
    name: "StaleTerm",
  },
  {
    code: 136,
    name: "CappedPositionLost",
  },
  {
    code: 137,
    name: "IncompatibleShardingConfigVersion",
  },
  {
    code: 138,
    name: "RemoteOplogStale",
  },
  {
    code: 139,
    name: "JSInterpreterFailure",
  },
  {
    code: 140,
    name: "InvalidSSLConfiguration",
  },
  {
    code: 141,
    name: "SSLHandshakeFailed",
  },
  {
    code: 142,
    name: "JSUncatchableError",
  },
  {
    code: 143,
    name: "CursorInUse",
  },
  {
    code: 144,
    name: "IncompatibleCatalogManager",
  },
  {
    code: 145,
    name: "PooledConnectionsDropped",
  },
  {
    code: 146,
    name: "ExceededMemoryLimit",
  },
  {
    code: 147,
    name: "ZLibError",
  },
  {
    code: 148,
    name: "ReadConcernMajorityNotEnabled",
  },
  {
    code: 149,
    name: "NoConfigPrimary",
  },
  {
    code: 150,
    name: "StaleEpoch",
  },
  {
    code: 151,
    name: "OperationCannotBeBatched",
  },
  {
    code: 152,
    name: "OplogOutOfOrder",
  },
  {
    code: 153,
    name: "ChunkTooBig",
  },
  {
    code: 154,
    name: "InconsistentShardIdentity",
  },
  {
    code: 155,
    name: "CannotApplyOplogWhilePrimary",
  },
  {
    code: 157,
    name: "CanRepairToDowngrade",
  },
  {
    code: 158,
    name: "MustUpgrade",
  },
  {
    code: 159,
    name: "DurationOverflow",
  },
  {
    code: 160,
    name: "MaxStalenessOutOfRange",
  },
  {
    code: 161,
    name: "IncompatibleCollationVersion",
  },
  {
    code: 162,
    name: "CollectionIsEmpty",
  },
  {
    code: 163,
    name: "ZoneStillInUse",
  },
  {
    code: 164,
    name: "InitialSyncActive",
  },
  {
    code: 165,
    name: "ViewDepthLimitExceeded",
  },
  {
    code: 166,
    name: "CommandNotSupportedOnView",
  },
  {
    code: 167,
    name: "OptionNotSupportedOnView",
  },
  {
    code: 168,
    name: "InvalidPipelineOperator",
  },
  {
    code: 169,
    name: "CommandOnShardedViewNotSupportedOnMongod",
  },
  {
    code: 170,
    name: "TooManyMatchingDocuments",
  },
  {
    code: 171,
    name: "CannotIndexParallelArrays",
  },
  {
    code: 172,
    name: "TransportSessionClosed",
  },
  {
    code: 173,
    name: "TransportSessionNotFound",
  },
  {
    code: 174,
    name: "TransportSessionUnknown",
  },
  {
    code: 175,
    name: "QueryPlanKilled",
  },
  {
    code: 176,
    name: "FileOpenFailed",
  },
  {
    code: 177,
    name: "ZoneNotFound",
  },
  {
    code: 178,
    name: "RangeOverlapConflict",
  },
  {
    code: 179,
    name: "WindowsPdhError",
  },
  {
    code: 180,
    name: "BadPerfCounterPath",
  },
  {
    code: 181,
    name: "AmbiguousIndexKeyPattern",
  },
  {
    code: 182,
    name: "InvalidViewDefinition",
  },
  {
    code: 183,
    name: "ClientMetadataMissingField",
  },
  {
    code: 184,
    name: "ClientMetadataAppNameTooLarge",
  },
  {
    code: 185,
    name: "ClientMetadataDocumentTooLarge",
  },
  {
    code: 186,
    name: "ClientMetadataCannotBeMutated",
  },
  {
    code: 187,
    name: "LinearizableReadConcernError",
  },
  {
    code: 188,
    name: "IncompatibleServerVersion",
  },
  {
    code: 189,
    name: "PrimarySteppedDown",
  },
  {
    code: 190,
    name: "MasterSlaveConnectionFailure",
  },
  {
    code: 192,
    name: "FailPointEnabled",
  },
  {
    code: 193,
    name: "NoShardingEnabled",
  },
  {
    code: 194,
    name: "BalancerInterrupted",
  },
  {
    code: 195,
    name: "ViewPipelineMaxSizeExceeded",
  },
  {
    code: 197,
    name: "InvalidIndexSpecificationOption",
  },
  {
    code: 199,
    name: "ReplicaSetMonitorRemoved",
  },
  {
    code: 200,
    name: "ChunkRangeCleanupPending",
  },
  {
    code: 201,
    name: "CannotBuildIndexKeys",
  },
  {
    code: 202,
    name: "NetworkInterfaceExceededTimeLimit",
  },
  {
    code: 203,
    name: "ShardingStateNotInitialized",
  },
  {
    code: 204,
    name: "TimeProofMismatch",
  },
  {
    code: 205,
    name: "ClusterTimeFailsRateLimiter",
  },
  {
    code: 206,
    name: "NoSuchSession",
  },
  {
    code: 207,
    name: "InvalidUUID",
  },
  {
    code: 208,
    name: "TooManyLocks",
  },
  {
    code: 209,
    name: "StaleClusterTime",
  },
  {
    code: 210,
    name: "CannotVerifyAndSignLogicalTime",
  },
  {
    code: 211,
    name: "KeyNotFound",
  },
  {
    code: 212,
    name: "IncompatibleRollbackAlgorithm",
  },
  {
    code: 213,
    name: "DuplicateSession",
  },
  {
    code: 214,
    name: "AuthenticationRestrictionUnmet",
  },
  {
    code: 215,
    name: "DatabaseDropPending",
  },
  {
    code: 216,
    name: "ElectionInProgress",
  },
  {
    code: 217,
    name: "IncompleteTransactionHistory",
  },
  {
    code: 218,
    name: "UpdateOperationFailed",
  },
  {
    code: 219,
    name: "FTDCPathNotSet",
  },
  {
    code: 220,
    name: "FTDCPathAlreadySet",
  },
  {
    code: 221,
    name: "IndexModified",
  },
  {
    code: 222,
    name: "CloseChangeStream",
  },
  {
    code: 223,
    name: "IllegalOpMsgFlag",
  },
  {
    code: 224,
    name: "QueryFeatureNotAllowed",
  },
  {
    code: 225,
    name: "TransactionTooOld",
  },
  {
    code: 226,
    name: "AtomicityFailure",
  },
  {
    code: 227,
    name: "CannotImplicitlyCreateCollection",
  },
  {
    code: 228,
    name: "SessionTransferIncomplete",
  },
  {
    code: 229,
    name: "MustDowngrade",
  },
  {
    code: 230,
    name: "DNSHostNotFound",
  },
  {
    code: 231,
    name: "DNSProtocolError",
  },
  {
    code: 232,
    name: "MaxSubPipelineDepthExceeded",
  },
  {
    code: 233,
    name: "TooManyDocumentSequences",
  },
  {
    code: 234,
    name: "RetryChangeStream",
  },
  {
    code: 235,
    name: "InternalErrorNotSupported",
  },
  {
    code: 236,
    name: "ForTestingErrorExtraInfo",
  },
  {
    code: 237,
    name: "CursorKilled",
  },
  {
    code: 238,
    name: "NotImplemented",
  },
  {
    code: 239,
    name: "SnapshotTooOld",
  },
  {
    code: 240,
    name: "DNSRecordTypeMismatch",
  },
  {
    code: 241,
    name: "ConversionFailure",
  },
  {
    code: 242,
    name: "CannotCreateCollection",
  },
  {
    code: 243,
    name: "IncompatibleWithUpgradedServer",
  },
  {
    code: 245,
    name: "BrokenPromise",
  },
  {
    code: 246,
    name: "SnapshotUnavailable",
  },
  {
    code: 247,
    name: "ProducerConsumerQueueBatchTooLarge",
  },
  {
    code: 248,
    name: "ProducerConsumerQueueEndClosed",
  },
  {
    code: 249,
    name: "StaleDbVersion",
  },
  {
    code: 250,
    name: "StaleChunkHistory",
  },
  {
    code: 251,
    name: "NoSuchTransaction",
  },
  {
    code: 252,
    name: "ReentrancyNotAllowed",
  },
  {
    code: 253,
    name: "FreeMonHttpInFlight",
  },
  {
    code: 254,
    name: "FreeMonHttpTemporaryFailure",
  },
  {
    code: 255,
    name: "FreeMonHttpPermanentFailure",
  },
  {
    code: 256,
    name: "TransactionCommitted",
  },
  {
    code: 257,
    name: "TransactionTooLarge",
  },
  {
    code: 258,
    name: "UnknownFeatureCompatibilityVersion",
  },
  {
    code: 259,
    name: "KeyedExecutorRetry",
  },
  {
    code: 260,
    name: "InvalidResumeToken",
  },
  {
    code: 261,
    name: "TooManyLogicalSessions",
  },
  {
    code: 262,
    name: "ExceededTimeLimit",
  },
  {
    code: 263,
    name: "OperationNotSupportedInTransaction",
  },
  {
    code: 264,
    name: "TooManyFilesOpen",
  },
  {
    code: 265,
    name: "OrphanedRangeCleanUpFailed",
  },
  {
    code: 266,
    name: "FailPointSetFailed",
  },
  {
    code: 267,
    name: "PreparedTransactionInProgress",
  },
  {
    code: 268,
    name: "CannotBackup",
  },
  {
    code: 269,
    name: "DataModifiedByRepair",
  },
  {
    code: 270,
    name: "RepairedReplicaSetNode",
  },
  {
    code: 271,
    name: "JSInterpreterFailureWithStack",
  },
  {
    code: 272,
    name: "MigrationConflict",
  },
  {
    code: 273,
    name: "ProducerConsumerQueueProducerQueueDepthExceeded",
  },
  {
    code: 274,
    name: "ProducerConsumerQueueConsumed",
  },
  {
    code: 275,
    name: "ExchangePassthrough",
  },
  {
    code: 276,
    name: "IndexBuildAborted",
  },
  {
    code: 277,
    name: "AlarmAlreadyFulfilled",
  },
  {
    code: 278,
    name: "UnsatisfiableCommitQuorum",
  },
  {
    code: 279,
    name: "ClientDisconnect",
  },
  {
    code: 280,
    name: "ChangeStreamFatalError",
  },
  {
    code: 281,
    name: "TransactionCoordinatorSteppingDown",
  },
  {
    code: 282,
    name: "TransactionCoordinatorReachedAbortDecision",
  },
  {
    code: 283,
    name: "WouldChangeOwningShard",
  },
  {
    code: 284,
    name: "ForTestingErrorExtraInfoWithExtraInfoInNamespace",
  },
  {
    code: 285,
    name: "IndexBuildAlreadyInProgress",
  },
  {
    code: 286,
    name: "ChangeStreamHistoryLost",
  },
  {
    code: 287,
    name: "TransactionCoordinatorDeadlineTaskCanceled",
  },
  {
    code: 288,
    name: "ChecksumMismatch",
  },
  {
    code: 289,
    name: "WaitForMajorityServiceEarlierOpTimeAvailable",
  },
  {
    code: 290,
    name: "TransactionExceededLifetimeLimitSeconds",
  },
  {
    code: 291,
    name: "NoQueryExecutionPlans",
  },
  {
    code: 292,
    name: "QueryExceededMemoryLimitNoDiskUseAllowed",
  },
  {
    code: 293,
    name: "InvalidSeedList",
  },
  {
    code: 294,
    name: "InvalidTopologyType",
  },
  {
    code: 295,
    name: "InvalidHeartBeatFrequency",
  },
  {
    code: 296,
    name: "TopologySetNameRequired",
  },
  {
    code: 297,
    name: "HierarchicalAcquisitionLevelViolation",
  },
  {
    code: 298,
    name: "InvalidServerType",
  },
  {
    code: 299,
    name: "OCSPCertificateStatusRevoked",
  },
  {
    code: 300,
    name: "RangeDeletionAbandonedBecauseCollectionWithUUIDDoesNotExist",
  },
  {
    code: 301,
    name: "DataCorruptionDetected",
  },
  {
    code: 302,
    name: "OCSPCertificateStatusUnknown",
  },
  {
    code: 303,
    name: "SplitHorizonChange",
  },
  {
    code: 304,
    name: "ShardInvalidatedForTargeting",
  },
  {
    code: 307,
    name: "RangeDeletionAbandonedBecauseTaskDocumentDoesNotExist",
  },
  {
    code: 308,
    name: "CurrentConfigNotCommittedYet",
  },
  {
    code: 309,
    name: "ExhaustCommandFinished",
  },
  {
    code: 310,
    name: "PeriodicJobIsStopped",
  },
  {
    code: 311,
    name: "TransactionCoordinatorCanceled",
  },
  {
    code: 312,
    name: "OperationIsKilledAndDelisted",
  },
  {
    code: 313,
    name: "ResumableRangeDeleterDisabled",
  },
  {
    code: 314,
    name: "ObjectIsBusy",
  },
  {
    code: 315,
    name: "TooStaleToSyncFromSource",
  },
  {
    code: 316,
    name: "QueryTrialRunCompleted",
  },
  {
    code: 317,
    name: "ConnectionPoolExpired",
  },
  {
    code: 318,
    name: "ForTestingOptionalErrorExtraInfo",
  },
  {
    code: 319,
    name: "MovePrimaryInProgress",
  },
  {
    code: 320,
    name: "TenantMigrationConflict",
  },
  {
    code: 321,
    name: "TenantMigrationCommitted",
  },
  {
    code: 322,
    name: "APIVersionError",
  },
  {
    code: 323,
    name: "APIStrictError",
  },
  {
    code: 324,
    name: "APIDeprecationError",
  },
  {
    code: 325,
    name: "TenantMigrationAborted",
  },
  {
    code: 326,
    name: "OplogQueryMinTsMissing",
  },
  {
    code: 327,
    name: "NoSuchTenantMigration",
  },
  {
    code: 328,
    name: "TenantMigrationAccessBlockerShuttingDown",
  },
  {
    code: 329,
    name: "TenantMigrationInProgress",
  },
  {
    code: 330,
    name: "SkipCommandExecution",
  },
  {
    code: 331,
    name: "FailedToRunWithReplyBuilder",
  },
  {
    code: 332,
    name: "CannotDowngrade",
  },
  {
    code: 333,
    name: "ServiceExecutorInShutdown",
  },
  {
    code: 334,
    name: "MechanismUnavailable",
  },
  {
    code: 335,
    name: "TenantMigrationForgotten",
  },
  {
    code: 9001,
    name: "SocketException",
  },
  {
    code: 10003,
    name: "CannotGrowDocumentInCappedNamespace",
  },
  {
    code: 10107,
    name: "NotWritablePrimary",
  },
  {
    code: 10334,
    name: "BSONObjectTooLarge",
  },
  {
    code: 11000,
    name: "DuplicateKey",
  },
  {
    code: 11600,
    name: "InterruptedAtShutdown",
  },
  {
    code: 11601,
    name: "Interrupted",
  },
  {
    code: 11602,
    name: "InterruptedDueToReplStateChange",
  },
  {
    code: 12586,
    name: "BackgroundOperationInProgressForDatabase",
  },
  {
    code: 12587,
    name: "BackgroundOperationInProgressForNamespace",
  },
  {
    code: 13113,
    name: "MergeStageNoMatchingDocument",
  },
  {
    code: 13297,
    name: "DatabaseDifferCase",
  },
  {
    code: 13388,
    name: "StaleConfig",
  },
  {
    code: 13435,
    name: "NotPrimaryNoSecondaryOk",
  },
  {
    code: 13436,
    name: "NotPrimaryOrSecondary",
  },
  {
    code: 14031,
    name: "OutOfDiskSpace",
  },
  {
    code: 46841,
    name: "ClientMarkedKilled",
  },
];
