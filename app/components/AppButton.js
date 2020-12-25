import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

function AppButton({ title, onPress, color = 'primary', style }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, style]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 60,
    width: '100%',
    padding: 15,
    marginVertical: 15,
  },
  text: {
    fontSize: 20,
    color: colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AppButton;
