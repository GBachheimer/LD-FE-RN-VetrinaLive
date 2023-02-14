export const getProducts = async (
  setData?: any,
  setLoading?: any,
  setProduct?: any,
  setProducts?: any,
) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const json = await response.json();
    if (setData) {
      setData(json);
      setProduct(json[0]);
    } else {
      setProducts(json);
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
