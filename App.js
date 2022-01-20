import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Header} from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ReadyMade from './RMMScreen'
import CustomScreen from './CustomScreen';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Custom: {screen: CustomScreen},
  Lists: {screen: ReadyMade},
});

const AppContainer =  createAppContainer(TabNavigator);

