export const sortDataByStatus = (
  data: object[],
  setData: (data: object[]) => void,
) => {
  const x = [...data].sort((a, b) => (a.status > b.status ? 1 : -1));
  setData(x);
};
