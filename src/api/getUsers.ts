import { allOrdersStatus } from 'src/utils/getRandomStatus';

export const getUsers = async (
  setData?: any,
  setLoading?: any,
  setUser?: any,
  setUsers?: any,
) => {
  try {
    const response = await fetch('https://dummyjson.com/users');
    const json = await response.json();
    const data = json.users;
    for (let i = 0; i < data.length; ++i) {
      data[i].status = allOrdersStatus[i];
    }
    if (setData) {
      setData(data);
      setUser(data[0]);
    } else {
      setUsers(data);
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
