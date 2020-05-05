# Magic Conch Library

This is a pseudo-3rd party library that exposes an event-driven Magic Conch
function.

_Do not alter the contents within this directory!_

## Usage
The magic conch answers "questions" in an event-driven manner. If the provided
question is truthy, the magic conch will emit a `MagicConchEvents.YES` event. If
the provided question is falsey, the magic conch will emit a `MagicConchEvents.NO`
event.
For example, in the below snippet each event handler will be triggered as `1 > 0` is truthy
and `1 < 0` is falsey.
```typescript
const conch = new MagicConch();

conch.on(MagicConchEvents.YES, () =>
  console.log('The magic conch answered YES. All hail the magic conch!')
);

conch.on(MagicConchEvents.YES, () =>
  console.log('The magic conch answered NO. All hail the magic conch!')
);

conch.ask(1 > 0);
conch.ask(1 < 0);
```
