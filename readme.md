# MongoDB Error Codes Library

A minimal library of MongoDB error codes, names, and helper utilities. Useful for error handling, logging, and building developer tools that interact with MongoDB.

## Features

- All official MongoDB error codes and names
- Human-friendly descriptions (where available)
- Fast lookup helpers: code ↔ name, code → description
- TypeScript types for safety and autocompletion

## Installation

Install with your favorite package manager:

```sh
npm install mongo-error-codes
```

```sh
yarn add mongo-error-codes
```

```sh
pnpm add mongo-error-codes
```

## Usage

```ts
import {
  getErrorName,
  getErrorCode,
  getErrorDescription,
  isKnownErrorCode,
  MongoErrorList,
} from "mongo-error-codes";

console.log(getErrorName(11000)); // "DuplicateKey"
console.log(getErrorCode("DuplicateKey")); // 11000
console.log(getErrorDescription(11000)); // description or undefined
console.log(isKnownErrorCode(11000)); // true

// List all error codes
console.log(MongoErrorList);
```

## API Reference

### `getErrorName(code: number): string | undefined`

Returns the error name for a given code.

### `getErrorCode(name: string): number | undefined`

Returns the error code for a given name.

### `getErrorDescription(code: number): string | undefined`

Returns the human-friendly description for a given code, if available.

### `isKnownErrorCode(code: number): boolean`

Returns `true` if the code is a known MongoDB error code.

### `MongoErrorList: MongoError[]`

An array of all error code objects: `{ code, name, description? }`.

## Types

```ts
export interface MongoError {
  code: number;
  name: string;
  description?: string;
}
```

## Contributing

1. Fork the repo and create your branch.
2. Add or update error codes, descriptions, or helpers.
3. Run tests and build.
4. Open a pull request.

## License

MIT
