
import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';
import Navigation from './src/routes/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading ...</Text>} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};


export default App;
