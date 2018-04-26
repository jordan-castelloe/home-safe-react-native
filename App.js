'use strict';

import React, { Component } from 'react';
import ReactNative from 'react-native';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Tabs } from './config/router';
import HomeScreen from './screens/HomeScreen';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Tabs />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  }
});

// Disables yellowbox warnings
console.disableYellowBox = true;

AppRegistry.registerComponent('HomeSafe', () => App);