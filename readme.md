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

### Functions

#### `getErrorName(code: number): string | undefined`

Returns the error name for a given code.

```ts
import { getErrorName } from "mongo-error-codes";
console.log(getErrorName(11000)); // "DuplicateKey"
```

#### `getErrorCode(name: string): number | undefined`

Returns the error code for a given name.

```ts
import { getErrorCode } from "mongo-error-codes";
console.log(getErrorCode("DuplicateKey")); // 11000
```

#### `getErrorDescription(code: number): string | undefined`

Returns the human-friendly description for a given code, if available.

```ts
import { getErrorDescription } from "mongo-error-codes";
console.log(getErrorDescription(11000)); // e.g. "Duplicate key error collection"
```

#### `isKnownErrorCode(code: number): boolean`

Returns `true` if the code is a known MongoDB error code.

```ts
import { isKnownErrorCode } from "mongo-error-codes";
console.log(isKnownErrorCode(11000)); // true
```

#### `getErrorDetails(input: number | string): { code: number; name: string; description?: string } | undefined`

Returns the full error object (code, name, description) for a given error code or name.

```ts
import { getErrorDetails } from "mongo-error-codes";
console.log(getErrorDetails(11000));
// { code: 11000, name: "DuplicateKey", description: "Duplicate key error collection" }
console.log(getErrorDetails("DuplicateKey"));
// { code: 11000, name: "DuplicateKey", description: "Duplicate key error collection" }
```

### Data Structures

#### `MongoErrorCodes` (enum)

Enum of all MongoDB error codes, mapping names to their numeric values.

```ts
import { MongoErrorCodes } from "mongo-error-codes";
console.log(MongoErrorCodes.DuplicateKey); // 11000
```

#### `ErrorCategory` (type)

Represents an error category

```ts
import { ErrorCategory } from 'monog-error-codes'

const errorCategory: ErrorCategory = "NotPrimaryError";
```

#### `MongoError` (interface)

Represents a MongoDB error code object.

```ts
export interface MongoError {
  code: number;
  name: string;
  description?: string;
  categories?: ErrorCategory;
}
```

#### `MongoErrorList: MongoError[]`

An array of all error code objects:

```ts
import { MongoErrorList } from "mongo-error-codes";
console.log(MongoErrorList[0]);
// { code: 1, name: "InternalError", description: "An unspecified internal error occurred." }
```

#### `MongoCodeErrorMap: Map<number, MongoError>`

A map from error code to error object:

```ts
import { MongoCodeErrorMap } from "mongo-error-codes";
console.log(MongoCodeErrorMap.get(11000));
// { code: 11000, name: "DuplicateKey" }
```

#### `MongoNameErrorMap: Map<string, MongoError>`

A map from error name to error object:

```ts
import { MongoNameErrorMap } from "mongo-error-codes";
console.log(MongoNameErrorMap.get("DuplicateKey"));
// { code: 11000, name: "DuplicateKey" }
```

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
