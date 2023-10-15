export const isFavourite = (name: string) =>
  JSON.parse(localStorage.getItem('favourite') as string)?.indexOf(name) !== -1
