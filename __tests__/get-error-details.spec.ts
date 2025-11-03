import { describe, it, expect } from "vitest";
import { getErrorDetails } from "../src/helpers";

describe("getErrorDetails", () => {
  it("returns full error object for valid error codes", () => {
    const result = getErrorDetails(1);
    expect(result).toEqual({
      code: 1,
      name: "InternalError",
      description: "An unspecified internal error occurred."
    });

    const duplicateKeyResult = getErrorDetails(11000);
    expect(duplicateKeyResult).toEqual({
      code: 11000,
      name: "DuplicateKey"
    });
  });

  it("returns full error object for valid error names", () => {
    const result = getErrorDetails("InternalError");
    expect(result).toEqual({
      code: 1,
      name: "InternalError",
      description: "An unspecified internal error occurred."
    });

    const duplicateKeyResult = getErrorDetails("DuplicateKey");
    expect(duplicateKeyResult).toEqual({
      code: 11000,
      name: "DuplicateKey"
    });
  });

  it("returns undefined for unknown error codes", () => {
    expect(getErrorDetails(99999)).toBeUndefined();
    expect(getErrorDetails(-1)).toBeUndefined();
    expect(getErrorDetails(0)).toBeUndefined();
  });

  it("returns undefined for unknown error names", () => {
    expect(getErrorDetails("NonExistentError")).toBeUndefined();
    expect(getErrorDetails("")).toBeUndefined();
    expect(getErrorDetails("invalidname")).toBeUndefined();
  });

  it("handles NaN, Infinity/-Infinity for numeric input", () => {
    expect(getErrorDetails(NaN)).toBeUndefined();
    expect(getErrorDetails(Infinity)).toBeUndefined();
    expect(getErrorDetails(-Infinity)).toBeUndefined();
  });

  it("handles case sensitivity for string input", () => {
    expect(getErrorDetails("internalerror")).toBeUndefined();
    expect(getErrorDetails("INTERNALERROR")).toBeUndefined();
    expect(getErrorDetails("InternalError")).toBeDefined();
  });
});
