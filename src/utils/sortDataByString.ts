export const sortDataByString = (
  data: object[],
  setData: (data: object[]) => void,
) => {
  const x = [...data].sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
  setData(x);
};
