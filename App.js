import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';


import HomeScreen from './screen/homeScreen'
import ResultScreen from './screen/resultScreen'

import { createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class App extends Component {
  render() {
    return (
      <View>
      
     <AppContainer/>
      </View>
    );
  }
}
var appNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  ResultScreen:ResultScreen
  
});
const AppContainer = createAppContainer(
  appNavigator
);
