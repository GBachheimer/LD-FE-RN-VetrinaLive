export const getUsers = async (setData: any, setLoading: any, setUser: any) => {
  try {
    const response = await fetch('https://dummyjson.com/users');
    const json = await response.json();
    setData(json.users);
    setUser(json.users[0]);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
