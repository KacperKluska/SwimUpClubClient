export const nameToSymbol = (name: string | number) => {
  if (typeof name === 'number') return name;
  return name.toLowerCase().trim().replace(' ', '_');
};
