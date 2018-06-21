import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import FoodStack from './FoodStackNav';
import Deliver from '../pages/Deliver';
import Food from '../pages/Food';
import Chat from '../pages/Chat';
import Notifications from '../pages/Notifications';
import Profile from '../pages/Profile';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default TabNav = createBottomTabNavigator({
  Deliver: {
    screen: Deliver,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => {
        return (
          <IconMaterialCommunityIcons
            name='cash-multiple'
            size={26}
            color={tintColor}
          />
        );
      }
    })
  },

  Food: {
    screen: FoodStackNav,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => {
        return (
          <IconMaterialCommunityIcons
            name='food-fork-drink'
            size={26}
            color={tintColor}
          />
        );
      }
    })
  },

  Chat: {
    screen: Chat,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => {
        return (
          <MaterialIcons
            name='chat'
            size={26}
            color={tintColor}
          />
        );
      }
    })
  },

  Notifications: {
    screen: Notifications,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => {
        return (
          <MaterialIcons
            name='notifications'
            size={26}
            color={tintColor}
          />
        );
      }
    })
  },

  Profile: {
    screen: Profile,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => {
        return (
          <IconMaterialCommunityIcons
            name='account-settings'
            size={26}
            color={tintColor}
          />
        );
      }
    })
  },
},{
  navigationOptions: () => ({
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#ff6f00',
      inactiveBackgroundColor: '#ffa726'
    }
  })
}
);
