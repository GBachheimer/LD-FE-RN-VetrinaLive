import React, { createContext, useState, useEffect, FC } from 'react';
import { getNews } from 'src/api/getNews';

interface IThemeContext {
  news: object[];
}

export const NewsContext = createContext<Partial<IThemeContext>>({});

export const AuthProvider: FC = ({ children }: any) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews(setNews);
  }, []);

  return (
    <NewsContext.Provider value={{ news }}>{children}</NewsContext.Provider>
  );
};
