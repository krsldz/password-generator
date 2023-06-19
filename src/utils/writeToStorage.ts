export const writeToStorage = <TValue>(key: string, value: TValue): void => {
  try {
    localStorage.setItem(
      key,
      typeof value === 'object' ? JSON.stringify(value) : `${value}`
    );
  } catch (err) {
    console.error(err);
  }
};
