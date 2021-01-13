import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from '../components/Icon';
import AccountScreen from '../screens/AccountScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import ListingsScreen from '../screens/ListingsScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: '#8eb1c6',
      activeTintColor: 'white',
      inactiveBackgroundColor: '#FCCB45',
      inactiveTintColor: 'black',
    }}
  >
    <Tab.Screen
      name="Home"
      component={ListingsScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon name="home-variant-outline" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Edit"
      component={ListingEditScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon name="account-edit-outline" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon name="account-outline" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
