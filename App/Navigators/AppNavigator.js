import { createAppContainer, createStackNavigator } from 'react-navigation'
import HomePage from 'App/Containers/HomePage/HomePage'
import PhoneDetailComponent from 'App/Containers/PhoneDetailComponent/PhoneDetailComponent'
import React from 'react';
import {

  Text
} from 'react-native';

const StackNavigator = createStackNavigator(
  {
    MainScreen: {
      screen: HomePage,
      navigationOptions: {
        headerTitle: <Text>Mobile Phones</Text>
      }
    },
    PhoneDetailComponent: {
      screen: PhoneDetailComponent,
      navigationOptions: {
        headerTitle: <Text>Details</Text>
      }
    }
  },
  {
    initialRouteName: 'MainScreen',
  }

)

export default createAppContainer(StackNavigator)
