export const getProducts = async (
  setData: any,
  setLoading: any,
  setProduct: any,
) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const json = await response.json();
    setData(json);
    setProduct(json[0]);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
