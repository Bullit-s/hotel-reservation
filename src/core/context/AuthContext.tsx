import React, { createContext, FC, useEffect, useState } from "react";
import { auth, firebase } from "../../api/firebase";

type AuthContextProps = {
  user: firebase.User | null;
  authenticated: boolean;
  isLoadingAuth: boolean;
};

export const AuthContext = createContext<Partial<AuthContextProps>>({});

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>();

  useEffect(() => {
    auth.onAuthStateChanged((user: firebase.User | null) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated: user != null,
        isLoadingAuth: user === undefined
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
