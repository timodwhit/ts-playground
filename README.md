# Typescript Playground
Repository for various coding problems solved using Typescript

[![Build Status](https://travis-ci.org/Drew-Kimberly/ts-playground.svg?branch=master)](https://travis-ci.org/Drew-Kimberly/ts-playground)
[![Coverage Status](https://coveralls.io/repos/github/Drew-Kimberly/ts-playground/badge.svg?branch=master)](https://coveralls.io/github/Drew-Kimberly/ts-playground?branch=master)
[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

## Table of Contents
- [`collapse`](#collapse)
- [`get`](#get)
- [`util`](#util)

---

## Collapse

### Problem
Create a function `collapse(str)` that accepts any string and returns a new "collapsed"
version of the string where all repeated characters are reduced. This is best illustrated
with an example:

```typescript
const str = 'aabccccccddd';

collapse(str); // Returns "a2bc6d3"
```

### Solution
The solution can be found [here](./src/collapse/index.ts).

---

## Get

### Problem
Create a function `get(obj, path)` that accepts an object literal and a _path_ and returns
the value located at the provided path within the object. If the path leads to a nonexistent
value, return `undefined`.

See the below snippet for an example:
```typescript
const obj = {
  foo: {
    nestedFoo: ["hello", "world"],
  },
};

get(obj, "foo.nestedFoo[0]"); // Returns "hello"
```

### Solution
The solution can be found [here](./src/get/index.ts).

---

## Util
The [`util`](./src/util/index.ts) module is used to provide common functions
and types to solutions.
