import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from '../components/Icon';
import AccountScreen from '../screens/AccountScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import MessagesScreen from '../screens/MessagesScreen';
import FeedNavigator from './FeedNavigator';

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
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon name="home-variant-outline" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Sell"
      component={ListingEditScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon name="plus-circle-outline" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={MessagesScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon name="chat-outline" size={size} color={color} />
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
