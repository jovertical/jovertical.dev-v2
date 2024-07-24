export const match = <Data>(
  key: keyof typeof data,
  data: Partial<{ DEFAULT: any } & Data>
): (typeof data)[keyof typeof data] | null => {
  return data[key] ?? data.DEFAULT ?? null
}
