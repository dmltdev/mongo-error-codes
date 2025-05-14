import { MongoCodeErrorMap, MongoNameErrorMap } from "../data/map";

/**
 * Get the name of the error code.
 *
 * @param code - The error code.
 * @returns The name of the error code.
 */
export function getErrorName(code: number): string | undefined {
  const entry = MongoCodeErrorMap.get(code);
  return entry ? entry.name : undefined;
}

/**
 * Get the error code of the error name.
 *
 * @param name - The name of the error.
 * @returns The error code.
 */
export function getErrorCode(name: string): number | undefined {
  const entry = MongoNameErrorMap.get(name);
  return entry ? entry.code : undefined;
}

/**
 * Get the description of the error code.
 *
 * @param code - The error code.
 * @returns The description of the error code.
 */
export function getErrorDescription(code: number): string | undefined {
  const entry = MongoCodeErrorMap.get(code);
  return entry ? entry.description : undefined;
}

/**
 * Check if the error code is known.
 *
 * @param code - The error code.
 * @returns True if the error code is known, false otherwise.
 */
export function isKnownErrorCode(code: number): boolean {
  return MongoCodeErrorMap.has(code);
}
