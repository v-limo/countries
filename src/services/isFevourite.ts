export const isFevourite = (name: string) => (JSON.parse(localStorage.getItem("fevourite") as string)?.indexOf(name) !== -1)

