import React, { createContext, useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';

type authContextType = {
  user?: boolean;
};

export const AuthContext = createContext<authContextType>({ user: false });

export const AuthProvider = ({ children }: React.ReactNode) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  };

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
