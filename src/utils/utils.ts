export const wait = async (delay: number, callback: () => void): Promise<number> =>
  await new Promise((resolve) => resolve(window.setTimeout(callback, delay)));
