import { MongoErrorList } from "./list";
import { MongoError } from "../types";

/**
 * Map of all the error codes for the MongoDB driver.
 * Key is the error code, value is the error.
 *
 * @see https://www.mongodb.com/docs/manual/reference/error-codes/
 */
export const MongoCodeErrorMap = new Map<number, MongoError>(
  MongoErrorList.map((error) => [error.code, error])
);

/**
 * Map of all the error names for the MongoDB driver.
 * Key is the error name, value is the error.
 *
 * @see https://www.mongodb.com/docs/manual/reference/error-codes/
 */
export const MongoNameErrorMap = new Map<string, MongoError>(
  MongoErrorList.map((error) => [error.name, error])
);
