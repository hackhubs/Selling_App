// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import Card from './app/components/Card';
import WelcomeScreen from './app/screens/WelcomeScreen';
import VeiwImageScreen from './app/screens/VeiwImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Icon from './app/components/Icon';
import AccountScreen from './app/screens/AccountScreen';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';

export default function App() {
  return (
    <Screen>
      <AppTextInput placeholder="email" icon="email-outline" />
    </Screen>
  );
}
