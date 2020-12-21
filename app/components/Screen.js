import React from 'react';
import { SafeAreaView, StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    ...Platform.select({
      ios: {
        padding: Constants.statusBarHeight,
      },
      android: {
        paddingTop: 30,
        left: 2,
      },
    }),

    flex: 1,
  },
});

export default Screen;
