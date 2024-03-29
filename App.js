/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, } from 'react';
import { Provider, } from 'react-redux';
import store from './js/store/index';
import AppNavigators from './js/navigator/AppNavigators';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppNavigators />
      </Provider>
    );
  }
}
