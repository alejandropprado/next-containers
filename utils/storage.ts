export const getStorage = (key: string): any => {
  const json = localStorage.getItem(key);

  try {
    return JSON.parse(json);
  } catch (error) {
    return null;
  }
};

export const setStorage = (key: string, data: any): void => {
  localStorage.setItem(
    key,
    typeof data === 'string' ? data : JSON.stringify(data)
  );
};
