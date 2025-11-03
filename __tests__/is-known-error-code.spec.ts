import { describe, it, expect } from "vitest";
import { isKnownErrorCode } from "../src/helpers";

describe("isKnownErrorCode", () => {
  it("returns true for valid error codes", () => {
    expect(isKnownErrorCode(1)).toBe(true);
    expect(isKnownErrorCode(2)).toBe(true);
    expect(isKnownErrorCode(11000)).toBe(true);
    expect(isKnownErrorCode(13)).toBe(true);
    expect(isKnownErrorCode(18)).toBe(true);
  });

  it("returns false for unknown error codes", () => {
    expect(isKnownErrorCode(99999)).toBe(false);
    expect(isKnownErrorCode(-1)).toBe(false);
    expect(isKnownErrorCode(0)).toBe(false);
  });

  it("handles NaN, Infinity/-Infinity", () => {
    expect(isKnownErrorCode(NaN)).toBe(false);
    expect(isKnownErrorCode(Infinity)).toBe(false);
    expect(isKnownErrorCode(-Infinity)).toBe(false);
  });

  it("returns boolean type", () => {
    expect(typeof isKnownErrorCode(1)).toBe("boolean");
    expect(typeof isKnownErrorCode(99999)).toBe("boolean");
  });
});
