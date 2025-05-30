/**
 * MongoDB error categories
 *
 */
export type ErrorCategory =
  | "NetworkError"
  | "NetworkTimeoutError"
  | "Interruption"
  | "RetriableError"
  | "NotPrimaryError"
  | "StaleShardVersionError"
  | "NeedRetargettingError"
  | "WriteConcernError"
  | "ShutdownError"
  | "CancellationError"
  | "ConnectionFatalMessageParseError"
  | "ExceededTimeLimitError"
  | "SnapshotError"
  | "VoteAbortError"
  | "NonResumableChangeStreamError"
  | "CloseConnectionError"
  | "VersionedAPIError"
  | "ValidationError"
  | "IDLParseError"
  | "StreamProcessorUserError"
  | "StreamProcessorRetryableError"
  | "InternalOnly"
  | "CursorInvalidatedError"
  | "PlannerEstimationError"
  | "SystemOverloadedError";

/**
 * MongoError interface
 * @see https://www.mongodb.com/docs/manual/reference/error-codes/
 */
export interface MongoError {
  /**
   * The error code.
   */
  code: number;
  /**
   * The name of the error.
   */
  name: string;
  /**
   * The description of the error.
   */
  description?: string;
  /**
   * The categories of the error
   */
  categories?: ErrorCategory[];
}

const errorCategory: ErrorCategory = "NotPrimaryError";
