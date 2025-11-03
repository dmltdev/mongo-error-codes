import { describe, it, expect } from "vitest";
import { getErrorDescription } from "../src/helpers";

describe("getErrorDescription", () => {
  it("returns the description for error codes with descriptions", () => {
    expect(getErrorDescription(1)).toBe("An unspecified internal error occurred.");
    expect(getErrorDescription(2)).toBe("The value provided is invalid.");
    expect(getErrorDescription(6)).toBe("The host is unreachable.");
  });

  it("returns undefined for error codes without descriptions", () => {
    expect(getErrorDescription(10)).toBeUndefined();
  });

  it("returns undefined for unknown error codes", () => {
    expect(getErrorDescription(99999)).toBeUndefined();
    expect(getErrorDescription(-1)).toBeUndefined();
    expect(getErrorDescription(0)).toBeUndefined();
  });

  it("handles NaN, Infinity/-Infinity", () => {
    expect(getErrorDescription(NaN)).toBeUndefined();
    expect(getErrorDescription(Infinity)).toBeUndefined();
    expect(getErrorDescription(-Infinity)).toBeUndefined();
  });

  it("returns string type for codes with descriptions", () => {
    const result = getErrorDescription(1);
    expect(typeof result).toBe("string");
    expect(result).toBe("An unspecified internal error occurred.");
  });
});
