export const rescue = async <T extends any>(
  callback: () => Promise<T> | T,
  defaultValue: T | null = null
) => {
  try {
    return await callback();
  } catch (error: any) {
    return defaultValue;
  }
};
