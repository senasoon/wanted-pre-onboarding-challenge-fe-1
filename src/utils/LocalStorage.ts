export const setLocalStorage = (key: string, item: string): void => {
  localStorage.setItem(key, item);
};

export const getLocalStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const removeLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};
