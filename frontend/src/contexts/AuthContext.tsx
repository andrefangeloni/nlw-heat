import React from 'react';

import { api } from '../services/api';

type User = {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
};

type AuthProvider = {
  children: React.ReactNode;
};

type AuthResponse = {
  user: User;
  token: string;
};

type AuthContextData = {
  user: User | null;
  signInURL: string;
  signOut: () => void;
};

export const AuthContext = React.createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProvider) => {
  const [user, setUser] = React.useState<User | null>(null);

  const githubClientId = 'd7aa25b872b54ef9130d';
  const signInURL = `https://github.com/login/oauth/authorize?scope=user&client_id=${githubClientId}`;

  const signIn = async (code: string) => {
    const { data } = await api.post<AuthResponse>('/authenticate', { code });
    const { token, user } = data;

    localStorage.setItem('@dowhile:token', token);
    setUser(user);
  };

  const getLoggedUser = async () => {
    const token = localStorage.getItem('@dowhile:token');

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const { data } = await api.get<User>('/profile');
      setUser(data);
    }
  };

  React.useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('?code=');

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=');

      window.history.pushState({}, '', urlWithoutCode);

      signIn(githubCode);
    }

    getLoggedUser();
  }, []);

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('@dowhile:token');
  };

  return (
    <AuthContext.Provider value={{ user, signInURL, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
