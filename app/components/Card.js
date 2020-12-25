import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

function Card({ title, subtitle, image, username, location }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />

      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
        <TouchableOpacity
          onPress={() => console.log('Preesed Details')}
          style={styles.details}
        >
          <Text>View Details ▶</Text>
        </TouchableOpacity>
        <AppText style={styles.user}>{username}</AppText>
        <AppText style={styles.user}>{location}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailContainer: {
    padding: 15,
  },
  subtitle: {
    color: colors.subtitle,
    fontWeight: '600',
    top: 8,
  },
  title: {
    marginBottom: -20,
    bottom: 10,
  },
  user: {
    fontSize: 13,
    top: -3,
  },
  details: {
    backgroundColor: 'lightblue',
    borderRadius: 60,
    width: 110,
    marginLeft: 220,
    top: 30,
    padding: 5,
  },
});

export default Card;
