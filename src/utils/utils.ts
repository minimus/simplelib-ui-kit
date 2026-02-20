export const wait = async (delay: number, callback: () => void): Promise<number> =>
  await new Promise((resolve) => window.setTimeout(callback, delay));
