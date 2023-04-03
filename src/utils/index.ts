export const rescue = async <T extends any>(
  callback: () => Promise<T> | T,
  defaultValue?: T
) => {
  try {
    return await callback();
  } catch (error: any) {
    return defaultValue as T;
  }
};
