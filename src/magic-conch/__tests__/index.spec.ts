import {MagicConchEvents} from '../lib';
import {askTheMagicConch} from '../index';

describe('Test suite for askTheMagicConch', () => {
  // Dummy test placeholder.
  // @TODO - Remove this test after uncommenting real tests below.
  test('this should be removed', () => {
    expect(askTheMagicConch()).toEqual(MagicConchEvents.YES);
  });

  // @TODO - UNCOMMENT BELOW
  //
  // test('askTheMagicConch returns MagicConchEvents.NO given a falsey question', async () => {
  //   const answer: MagicConchEvents = await askTheMagicConch(1 < 0);
  //   expect(answer).toEqual(MagicConchEvents.NO);
  // });
  // test('askTheMagicConch returns MagicConchEvents.YES given a truthy question', async () => {
  //   const answer: MagicConchEvents = await askTheMagicConch(1 > 0);
  //   expect(answer).toEqual(MagicConchEvents.YES);
  // });
});
