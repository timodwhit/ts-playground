import {MagicConch} from '../magic-conch';
import {MagicConchEvents} from '../types';

const conch = new MagicConch();

conch.on(MagicConchEvents.YES, () =>
  console.log('The magic conch answered YES. All hail the magic conch!')
);

conch.on(MagicConchEvents.NO, () =>
  console.log('The magic conch answered NO. All hail the magic conch!')
);

console.log('Asking the magic conch if 1 > 0...');
conch.ask(1 > 0);

console.log('Asking the magic conch if 1 < 0...');
conch.ask(1 < 0);
