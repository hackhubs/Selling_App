import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import Icon from '../components/Icon';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import AppActivityIndicator from '../components/AppActivityIndicator';
import useApi from '../hooks/useApi';

function ListingsScreen({ navigation }) {
  const { listings, error, loading, request: loadlistings } = useApi(
    listingsApi.getListings
  );

  useEffect(() => {
    loadlistings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {/* <View style={{ bottom: 15 }}>
        <SearchBar
          placeholder="Search"
          onIconPress={() => console.log('press search')}
        />
      </View> */}

      {error && (
        <>
          <AppText>Couldn't retrive the listings. </AppText>
          <AppButton title="Retry" onPress={loadlistings} />
        </>
      )}
      <AppActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={'INR' + ' ' + item.price + '.00'}
            imageUrl={item.images[0].url}
            username={'Posted By:' + ' ' + item.username}
            IconComponent={<Icon name="map-marker-right-outline" size={18} />}
            location={item.location}
            details={' View Details ▶'}
            onPress={() => navigation.navigate('Details', item)} // Details in routes
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 7,
    backgroundColor: colors.light,
    // marginTop: 15,
    // marginBottom: 10,
  },
});

export default ListingsScreen;
