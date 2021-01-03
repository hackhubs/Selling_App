import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontWeight: '600',
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: 'Avenir',
      },
      android: {
        fontSize: 20,
        fontFamily: 'Roboto',
      },
    }),
  },
});

export default AppText;
