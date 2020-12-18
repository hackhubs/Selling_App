import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import colors from '../config/colors';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$ 100</AppText>
        <ListItem
          image={require('../assets/mosh.jpg')}
          title="Mosh hamdeni"
          subtitle="5 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  price: {
    color: colors.secondary,
    fontWeight: '600',
    fontSize: 22,
    marginVertical: 10,
  },
});

export default ListingDetailsScreen;
