import React from 'react';
import { SafeAreaView, StyleSheet, Platform, View } from 'react-native';
import Constants from 'expo-constants';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    ...Platform.select({
      ios: {
        padding: Constants.statusBarHeight,
      },
      android: {
        paddingTop: 35,
        left: 2,
      },
    }),
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});

export default Screen;
