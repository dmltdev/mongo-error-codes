import { getMongoCodeErrorMap, getMongoNameErrorMap } from '../data/map';
import type { MongoError } from '../types';

/**
 * Get the name of the error code.
 *
 * @param code - The error code.
 * @returns The name of the error code.
 */
export function getErrorName(code: number): string | undefined {
  const entry = getMongoCodeErrorMap().get(code);
  return entry ? entry.name : undefined;
}

/**
 * Get the error code of the error name.
 *
 * @param name - The name of the error.
 * @returns The error code.
 */
export function getErrorCode(name: string): number | undefined {
  const entry = getMongoNameErrorMap().get(name);
  return entry ? entry.code : undefined;
}

/**
 * Get the description of the error code.
 *
 * @param code - The error code.
 * @returns The description of the error code.
 */
export function getErrorDescription(code: number): string | undefined {
  const entry = getMongoCodeErrorMap().get(code);
  return entry ? entry.description : undefined;
}

/**
 * Check if the error code is known.
 *
 * @param code - The error code.
 * @returns True if the error code is known, false otherwise.
 */
export function isKnownErrorCode(code: number): boolean {
  return getMongoCodeErrorMap().has(code);
}

/**
 * Get the full error details (code, name, description) for a given error code or name.
 *
 * @param input - The error code (number) or error name (string).
 * @returns The full error object or undefined if not found.
 */
export function getErrorDetails(
  input: number | string,
): { code: number; name: string; description?: string } | undefined {
  if (typeof input === 'number') {
    return getMongoCodeErrorMap().get(input);
  } else {
    return getMongoNameErrorMap().get(input);
  }
}

/**
 * Convert a MongoDB error to a JavaScript error.
 *
 * @param mongoError - The MongoDB error.
 * @param formatter - Optional custom formatter function that takes a MongoError and returns a string.
 * @returns The JavaScript error.
 */
export function toError(
  mongoError: MongoError,
  formatter?: (error: MongoError) => string,
): Error {
  let message: string;

  if (formatter) {
    message = formatter(mongoError);
  } else {
    message = `[${mongoError.code}] ${mongoError.name}`;

    if (mongoError.description) {
      message += `: ${mongoError.description}`;
    }

    if (mongoError.categories?.length) {
      message += ` | ${mongoError.categories.join(', ')}`;
    }
  }

  return new Error(message, {
    cause: mongoError,
  });
}
