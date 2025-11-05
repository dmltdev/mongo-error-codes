import { describe, it, expect } from "vitest";
import { toError } from "../src/helpers";
import { MongoError } from "../src/types";

describe("toError", () => {
  it("converts MongoDB error with all properties to JavaScript Error", () => {
    const mongoError: MongoError = {
      code: 11000,
      name: "DuplicateKey",
      description: "Duplicate key error collection",
      categories: ["RetriableError"]
    };

    const result = toError(mongoError);

    expect(result).toBeInstanceOf(Error);
    expect(result.message).toBe("[11000] DuplicateKey: Duplicate key error collection | RetriableError");
    expect(result.cause).toBe(mongoError);
  });

  it("converts MongoDB error without description", () => {
    const mongoError: MongoError = {
      code: 10,
      name: "CannotMutateObject",
      categories: ["ValidationError"]
    };

    const result = toError(mongoError);

    expect(result.message).toBe("[10] CannotMutateObject | ValidationError");
    expect(result.cause).toBe(mongoError);
  });

  it("converts MongoDB error without categories", () => {
    const mongoError: MongoError = {
      code: 1,
      name: "InternalError",
      description: "An unspecified internal error occurred."
    };

    const result = toError(mongoError);

    expect(result.message).toBe("[1] InternalError: An unspecified internal error occurred.");
    expect(result.cause).toBe(mongoError);
  });

  it("converts minimal MongoDB error with only code and name", () => {
    const mongoError: MongoError = {
      code: 999,
      name: "CustomError"
    };

    const result = toError(mongoError);

    expect(result.message).toBe("[999] CustomError");
    expect(result.cause).toBe(mongoError);
  });

  it("handles multiple categories", () => {
    const mongoError: MongoError = {
      code: 6,
      name: "HostUnreachable",
      description: "The host is unreachable.",
      categories: ["NetworkError", "RetriableError"]
    };

    const result = toError(mongoError);

    expect(result.message).toBe("[6] HostUnreachable: The host is unreachable. | NetworkError, RetriableError");
    expect(result.cause).toBe(mongoError);
  });

  it("handles empty categories array", () => {
    const mongoError: MongoError = {
      code: 2,
      name: "BadValue",
      description: "The value provided is invalid.",
      categories: []
    };

    const result = toError(mongoError);

    expect(result.message).toBe("[2] BadValue: The value provided is invalid.");
    expect(result.cause).toBe(mongoError);
  });

  it("uses custom formatter when provided", () => {
    const mongoError: MongoError = {
      code: 11000,
      name: "DuplicateKey",
      description: "Duplicate key error collection",
      categories: ["RetriableError"]
    };

    const customFormatter = (error: MongoError) => 
      `MongoDB Error ${error.code}: ${error.name}`;

    const result = toError(mongoError, customFormatter);

    expect(result.message).toBe("MongoDB Error 11000: DuplicateKey");
    expect(result.cause).toBe(mongoError);
  });

  it("custom formatter receives complete MongoError object", () => {
    const mongoError: MongoError = {
      code: 6,
      name: "HostUnreachable",
      description: "The host is unreachable.",
      categories: ["NetworkError", "RetriableError"]
    };

    const customFormatter = (error: MongoError) => {
      return `${error.name} (${error.code}): ${error.description} [${error.categories?.join(", ")}]`;
    };

    const result = toError(mongoError, customFormatter);

    expect(result.message).toBe("HostUnreachable (6): The host is unreachable. [NetworkError, RetriableError]");
    expect(result.cause).toBe(mongoError);
  });

  it("custom formatter can return simple string", () => {
    const mongoError: MongoError = {
      code: 1,
      name: "InternalError"
    };

    const customFormatter = () => "Custom error message";

    const result = toError(mongoError, customFormatter);

    expect(result.message).toBe("Custom error message");
    expect(result.cause).toBe(mongoError);
  });
});
