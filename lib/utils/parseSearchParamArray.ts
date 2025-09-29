export const toNumberArraySearchParam = (value: unknown): number[] => {
  return (Array.isArray(value) ? value : value ? [value] : [])
    .map(Number)
    .filter((num) => !isNaN(num));
};
