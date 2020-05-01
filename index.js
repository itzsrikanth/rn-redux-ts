import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './store';

const Wrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Wrapper);
/**
 * For React Native debugger fix
 * https://github.com/react-native-community/cli/issues/1081#issuecomment-614223917
 */
