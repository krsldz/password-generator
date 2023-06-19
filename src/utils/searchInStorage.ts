export const searchInStorage = <T = unknown>(str: string): null | T => {
  const result = localStorage.getItem(str);

  return result ? JSON.parse(result) : result;
};
