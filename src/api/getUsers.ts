export const getUsers = async (
  setData?: any,
  setLoading?: any,
  setUser?: any,
  setUsers?: any,
) => {
  try {
    const response = await fetch('https://dummyjson.com/users');
    const json = await response.json();
    if (setData) {
      setData(json.users);
      setUser(json.users[0]);
    } else {
      setUsers(json.users);
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
