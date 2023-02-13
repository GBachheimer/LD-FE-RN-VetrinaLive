export const getProducts = async (setData: any, setLoading: any) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const json = await response.json();
    setData(json);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
