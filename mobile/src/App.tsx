import React from 'react';
import { StatusBar } from 'react-native';

import { Home } from './screens/Home';
// import { Splash } from './screens/Splash';

const App = () => (
  <>
    <StatusBar barStyle="light-content" />
    <Home />
  </>
);

export default App;
