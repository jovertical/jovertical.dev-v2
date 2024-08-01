export const match = <Data>(
  key: keyof typeof data,
  data: Partial<{ DEFAULT: any } & Data>
): (typeof data)[keyof typeof data] | null => {
  return data[key] ?? data.DEFAULT ?? null
}

export const rescue = async <T extends any>(
  callback: () => Promise<T> | T,
  defaultValue?: T
) => {
  try {
    return await callback()
  } catch (error: any) {
    console.error(error)

    return defaultValue as T
  }
}

export const sleep = (ms = 1000): Promise<unknown> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
