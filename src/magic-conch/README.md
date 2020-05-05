# Magic Conch

## Goal
Implement `askTheMagicConch` in `index.ts` so that we can ask and receive an answer
from the magic conch _asynchronously_ without having to wire up event listeners.

## Instructions
1. Review the `magic-conch` module.
    - `lib` contains a "3rd-party" magic conch library that we will be wrapping.
       _No code within this directory should be modified to complete this exercise!_
    - `index.ts` will contain the implementation of `askTheMagicConch`. It will need to
      import `MagicConch` and `MagicConchEvents` from the `lib/` directory.
    - `__tests__/index.spec.ts` will contain the tests to verify the new function is working.
      The tests are currently commented out, but they illustrate our intentions as the
      `askTheMagicConch` function is invoked with an `await` keyword.
      
2. Observe how the "3rd-party" magic conch implementation works.
    - From the root of `ts-playground`, run `npm i`
    - From the root of `ts-playground`, run `npm run build`
    - From the root of `ts-playground`, run `node build/src/magic-conch/lib/example/index.js`
    - The console should have output that corresponds to the execution of the compiled `magic-conch/lib/example/index.ts` file.
    
3. Implement the `askTheMagicConch` function in `magic-conch/index.ts`.
    - Events, promises, async/await. This should drive a better understanding of the
    asynchronous nature of JS.
    
4. Uncomment out the tests in `magic-conch/index.spec.ts` and run them. They should pass when
   `askTheMagicConch` is correctly implemented.
    - Note to run the tests, you can use WebStorm/VSCode and run it directly or just use `npm run test` from the root of `ts-playground`.
