import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import TripScreen from '../screens/TripScreen';
import Done from '../screens/Done';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import Contacts from '../screens/Contacts';


export const TripStack = StackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'HomeScreen'
    },
  },
  TripScreen: {
    screen: TripScreen,
    navigationOptions: ({ navigation }) => ({
      title: `Trip In Progress`,
    }),
  },
  Done: {
    screen: Done,
    navigationOptions: ({ navigation }) => ({
      title: `Glad you're back!`,
    }),
  }
});

export const Tabs = TabNavigator({
  TripStack: {
    screen: TripStack,
    navigationOptions: {
      tabBarLabel: 'Home'
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile'
    }
  },
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      tabBarLabel: 'Contacts'
    }
  }
});