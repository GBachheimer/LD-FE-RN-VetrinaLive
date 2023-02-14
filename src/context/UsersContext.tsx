import React, { createContext, useState, useEffect, FC } from 'react';
import { getUsers } from 'src/api/getUsers';

interface IThemeContext {
  users: object[];
}

export const UsersContext = createContext<Partial<IThemeContext>>({});

export const AuthProvider: FC = ({ children }: any) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(setUsers);
  }, []);

  return (
    <UsersContext.Provider value={{ users }}>{children}</UsersContext.Provider>
  );
};
