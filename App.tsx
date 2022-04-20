import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler'

import AppContainer from './src/navigations';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      {/* <Navigation colorScheme={colorScheme} /> */}
      <StatusBar style='auto' />
      <AppContainer />
    </Provider>
  );
}
