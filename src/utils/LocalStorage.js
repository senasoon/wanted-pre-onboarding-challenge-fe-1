export const setLocalStorage = (key, item) => {
  localStorage.setItem(key, item);
};

export const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};
