import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

function ListItem({ title, subtitle, image }) {
  return (
    <View style={styles.listItem}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 16,
    flexDirection: 'row',
    right: 18,
  },
  image: {
    borderRadius: 30,
    width: 80,
    height: 80,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 2,
  },
  subtitle: {
    fontSize: 20,
    color: colors.medium,
  },
});

export default ListItem;
