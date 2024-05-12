export const isVisited = (name: string) =>
  JSON.parse(localStorage.getItem('visited') as string)?.indexOf(name) !== -1
