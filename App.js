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
import AppPicker from './app/components/AppPicker';
import ItemPicker from './app/components/ItemPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

const categories = [
  { label: 'furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Books', value: 3 },
  { label: 'Electronics', value: 4 },

  { label: 'Home Products', value: 5 },
];

export default function App() {
  const [category, setcategory] = useState();
  return (
    // <Screen>
    //   {/* <AppPicker
    //     selectedItem={category}
    //     onSelectedItem={(item) => setcategory(item)}
    //     placeholder="Category"
    //     icon="apps"
    //     items={categories}
    //   />
    //   <AppTextInput placeholder="email" icon="email-outline" /> */}
    // </Screen>
    <ListingEditScreen />
  );
}
