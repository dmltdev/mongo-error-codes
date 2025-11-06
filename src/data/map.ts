import type { MongoError } from '../types';
import { MongoErrorList } from './list';

let _codeErrorMap: Map<number, MongoError> | undefined;
let _nameErrorMap: Map<string, MongoError> | undefined;

/**
 * Get the map of all error codes for the MongoDB driver.
 * Key is the error code, value is the error.
 *
 * @see https://www.mongodb.com/docs/manual/reference/error-codes/
 */
export function getMongoCodeErrorMap(): Map<number, MongoError> {
  if (!_codeErrorMap) {
    _codeErrorMap = new Map<number, MongoError>(
      MongoErrorList.map((error) => [error.code, error]),
    );
  }
  return _codeErrorMap;
}

/**
 * Get the map of all error names for the MongoDB driver.
 * Key is the error name, value is the error.
 *
 * @see https://www.mongodb.com/docs/manual/reference/error-codes/
 */
export function getMongoNameErrorMap(): Map<string, MongoError> {
  if (!_nameErrorMap) {
    _nameErrorMap = new Map<string, MongoError>(
      MongoErrorList.map((error) => [error.name, error]),
    );
  }
  return _nameErrorMap;
}

/**
 * @deprecated Use getMongoCodeErrorMap() instead for better bundle size optimization
 */
export const MongoCodeErrorMap = new Proxy({} as Map<number, MongoError>, {
  get(target, prop) {
    const map = getMongoCodeErrorMap();
    const value = (map as any)[prop];
    return typeof value === 'function' ? value.bind(map) : value;
  }
});

/**
 * @deprecated Use getMongoNameErrorMap() instead for better bundle size optimization
 */
export const MongoNameErrorMap = new Proxy({} as Map<string, MongoError>, {
  get(target, prop) {
    const map = getMongoNameErrorMap();
    const value = (map as any)[prop];
    return typeof value === 'function' ? value.bind(map) : value;
  }
});
