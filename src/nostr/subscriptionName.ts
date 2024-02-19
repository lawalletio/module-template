import { DefaultContext, EventHandler } from '@lawallet/module';
import { NDKFilter, NostrEvent } from 'node_modules/@nostr-dev-kit/ndk/dist';


const filter: NDKFilter = {
  // ids: null,
  authors: [''],
  kinds: [1],
  // '#e': null,
  // '#p': null,
  // '#a': null,
  since: Math.floor(Date.now() / 1000) - 86000,
  until: Math.floor(Date.now() / 1000) + 86000,
  // limit: null,
};

const getHandler = (ctx: DefaultContext): EventHandler => {
  return async (event: NostrEvent): Promise<void> => {
    await ctx.outbox.publish(event);
  };
};

export { filter, getHandler };
