import React from 'react';
import { StatusBar } from 'react-native';

import { AuthProvider } from './contexts/AuthContext';

import { Home } from './screens/Home';
// import { Splash } from './screens/Splash';

const App = () => (
  <AuthProvider>
    <StatusBar barStyle="light-content" />
    <Home />
  </AuthProvider>
);

export default App;
