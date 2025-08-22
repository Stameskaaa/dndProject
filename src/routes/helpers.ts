export const delayLoader =
  (ms: number = 300) =>
  async () => {
    await new Promise((resolve) => setTimeout(resolve, ms));
    return null;
  };
