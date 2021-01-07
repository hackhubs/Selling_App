// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

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
import { Image } from 'react-native';
import ImageInput from './app/components/ImageInput';

const categories = [
  { label: 'furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Books', value: 3 },
  { label: 'Electronics', value: 4 },

  { label: 'Home Products', value: 5 },
];

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert('You need to enable permission to acess the library.');
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const [imageUri, setimageUri] = useState();

  const SelectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setimageUri(result.uri);
    } catch (error) {
      console.log('error in image picker');
    }
  };

  return (
    <Screen style={{ marginTop: 20 }}>
      {/* <Button title="Click to Add" onPress={SelectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} /> */}
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setimageUri(uri)}
      />
    </Screen>
  );
}
