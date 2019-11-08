import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FriendsScreen from '../screens/FriendsScreen';
import OptionsScreen from '../screens/OptionsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  const routeName = navigation.state.routes[navigation.state.index].routeName;
  routeName === 'Profile' ? (tabBarVisible = false) : '';

  return {
    tabBarVisible,
    title: 'Home'
  };
};

const Search = createStackNavigator({
  Search: SearchScreen
});

const Friends = createStackNavigator({
  Friends: FriendsScreen
});

const Options = createStackNavigator({
  Options: OptionsScreen
});

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  Search,
  Friends,
  Options
});

export default TabNavigator;
