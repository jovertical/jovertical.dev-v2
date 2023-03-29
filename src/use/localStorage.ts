'use client';

export function useLocalStorage() {
  const get = <T extends any>(
    key: string,
    defaultValue: T | null = null
  ): T | string | null => {
    try {
      if (typeof window === 'undefined') {
        return defaultValue;
      }

      const rawValue = localStorage.getItem(key);

      if (!rawValue) {
        return defaultValue;
      }

      return typeof rawValue === 'string' ? rawValue : JSON.parse(rawValue);
    } catch (error) {
      console.error(error);

      return defaultValue;
    }
  };

  const set = (key: string, value: any) => {
    try {
      // prettier-ignore
      const newValue = typeof value === 'string' ? value : JSON.stringify(value);

      localStorage.setItem(key, newValue);

      return true;
    } catch (error) {
      console.error(error);

      return false;
    }
  };

  const remove = (key: string) => {
    localStorage.removeItem(key);
  };

  return {
    get,
    set,
    remove,
  };
}
