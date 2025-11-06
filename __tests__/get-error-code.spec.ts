import { describe, expect, it } from 'vitest';
import { getErrorCode } from '../src/helpers';

describe('getErrorCode', () => {
  it('returns the error code for valid error names', () => {
    expect(getErrorCode('InternalError')).toBe(1);
    expect(getErrorCode('BadValue')).toBe(2);
    expect(getErrorCode('DuplicateKey')).toBe(11000);
    expect(getErrorCode('Unauthorized')).toBe(13);
    expect(getErrorCode('AuthenticationFailed')).toBe(18);
  });

  it('returns undefined for unknown error names', () => {
    expect(getErrorCode('NonExistentError')).toBeUndefined();
    expect(getErrorCode('')).toBeUndefined();
    expect(getErrorCode('invalidname')).toBeUndefined();
  });

  it('handles case sensitivity', () => {
    expect(getErrorCode('internalerror')).toBeUndefined();
    expect(getErrorCode('INTERNALERROR')).toBeUndefined();
    expect(getErrorCode('InternalError')).toBe(1);
  });

  it('returns number type for valid names', () => {
    const result = getErrorCode('InternalError');
    expect(typeof result).toBe('number');
    expect(result).toBe(1);
  });
});
