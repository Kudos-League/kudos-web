/** Await the returned promise to flush all immediate outstanding promises. */
export const flushPromises = () => new Promise(process.nextTick);