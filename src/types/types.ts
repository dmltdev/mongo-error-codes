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
  }
  