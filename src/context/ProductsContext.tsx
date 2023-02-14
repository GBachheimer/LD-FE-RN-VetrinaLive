import React, { createContext, useState, useEffect, FC } from 'react';
import { getProducts } from 'src/api/getProducts';

interface IThemeContext {
  products: object[];
}

export const ProductsContext = createContext<Partial<IThemeContext>>({});

export const AuthProvider: FC = ({ children }: any) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
