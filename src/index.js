import '~/config/ReactotronConfig';
import React from 'react';

import { Text, View } from 'react-native';

import { Provider } from 'react-redux';

import store from '~/store';

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;