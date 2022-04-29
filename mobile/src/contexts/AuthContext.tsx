import React from 'react';

import * as AuthSessions from 'expo-auth-session';

const CLIENT_ID = '4bb6baeceaaf3654ebe0';
const SCOPE = 'read:user';

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

type AuthResponse = {
  token: string;
  user: User;
};

type AuthorizationResponse = {
  params: {
    code?: string;
  };
};

export const AuthContext = React.createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isSignIn, setIsSignIn] = React.useState(false);
  const [user, setUser] = React.useState<User | null>(null);

  const signIn = async () => {
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`;

    const { params } = (await AuthSessions.startAsync({
      authUrl,
    })) as AuthorizationResponse;
    console.log(
      '🚀 ~ file: AuthContext.tsx ~ line 49 ~ signIn ~ params',
      params,
    );
  };
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
