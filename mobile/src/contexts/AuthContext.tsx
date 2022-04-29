import React from 'react';

type User = {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
};

type AuthContextData = {
  user: User | null;
  isSignIn: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = React.createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isSignIn, setIsSignIn] = React.useState(false);
  const [user, setUser] = React.useState<User | null>(null);

  const signIn = async () => {};
  const signOut = async () => {};

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        isSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
