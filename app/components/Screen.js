import React from 'react';
import { SafeAreaView, StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    ...Platform.select({
      ios: {
        padding: Constants.statusBarHeight,
      },
      android: {
        paddingTop: 33,
        left: 2,
      },
    }),
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default Screen;
