export const sortDataById = (
  data: object[],
  setData: (data: object[]) => void,
) => {
  const x = [...data].sort((a, b) => (a.id > b.id ? 1 : -1));
  setData(x);
};
