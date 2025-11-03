import { describe, it, expect } from "vitest";
import { getErrorName } from "../src/helpers";

describe("getErrorName", () => {
  it("returns the error name for valid error codes", () => {
    expect(getErrorName(1)).toBe("InternalError");
    expect(getErrorName(2)).toBe("BadValue");
    expect(getErrorName(11000)).toBe("DuplicateKey");
    expect(getErrorName(13)).toBe("Unauthorized");
    expect(getErrorName(18)).toBe("AuthenticationFailed");
  });

  it("returns undefined for unknown error codes", () => {
    expect(getErrorName(99999)).toBeUndefined();
    expect(getErrorName(-1)).toBeUndefined();
    expect(getErrorName(0)).toBeUndefined();
  });

  it("returns undefined for NaN, Infinity/-Infinity", () => {
    expect(getErrorName(NaN)).toBeUndefined();
    expect(getErrorName(Infinity)).toBeUndefined();
    expect(getErrorName(-Infinity)).toBeUndefined();
  });

  it("returns string type for valid codes", () => {
    const result = getErrorName(1);
    expect(typeof result).toBe("string");
    expect(result).toBe("InternalError");
  });
});
