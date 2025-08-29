export const areEqual = (
  obj1: Record<string, number>,
  obj2: Record<string, number>
) =>
  Object.entries(obj1).every(([key, value]) => value === obj2[key]) &&
  Object.entries(obj2).every(([key, value]) => value === obj1[key]);
