import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Food from '../pages/Food';
import Order from '../pages/Order';
import bottomTabNav from '../navigation/bottomTabNav';

export default FoodStackNav = StackNavigator({
  Food: {
    screen: Food
  },
  Order: {
    screen: Order
  }
});
