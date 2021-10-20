import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Insta from './screens/in';
import Fbook from './screens/fb';
import {createAppContainer}from 'react-navigation';
import{createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
 render(){
   return<AppContainer/>
 }  
}

const TabNavigator = createBottomTabNavigator({
  Instagram: Insta,
  Facebook: Fbook 
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
