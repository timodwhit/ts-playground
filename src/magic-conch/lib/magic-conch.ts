import {MagicConchEvents, IMagicConch} from './types';
import * as EventEmitter from 'events';

export class MagicConch extends EventEmitter implements IMagicConch {
  // Num MS is takes the magic conch to think of the answer.
  static readonly THINKING_TIME = 3000;

  public ask(question: any): void {
    const answer: MagicConchEvents = question
      ? MagicConchEvents.YES
      : MagicConchEvents.NO;

    // Allow the magic conch some time to think before answering.
    setTimeout(() => this.emit(answer), MagicConch.THINKING_TIME);
  }
}
