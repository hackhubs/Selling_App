import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import Icon from '../components/Icon';

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    username: 'Abhav Thakur',
    image: require('../assets/jacket.jpg'),
    location: 'Himchal Pradesh, India',
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 1000,
    username: 'Aanya Jain',
    image: require('../assets/couch.jpg'),
    location: 'Haryana, India',
  },
  {
    id: 3,
    title: 'H.P Laptop',
    price: 21000,
    username: 'Abhav Thakur',
    image: require('../assets/laptop.jpeg'),
    location: 'Himchal Pradesh, India',
  },
  {
    id: 4,
    title: 'RD Sharma Maths book',
    price: 500,
    username: 'Aanya Jain',
    image: require('../assets/book.jpeg'),
    location: 'Haryana, India',
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      {/* <View style={{ bottom: 15 }}>
        <SearchBar
          placeholder="Search"
          onIconPress={() => console.log('press search')}
        />
      </View> */}

      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={'Rs' + ' ' + item.price + '.00'}
            image={item.image}
            username={'Posted By:' + ' ' + item.username}
            IconComponent={<Icon name="map-marker-right-outline" size={18} />}
            location={item.location}
            details={' View Details ▶'}
            onPress={() => navigation.navigate('Details', item)}
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
    marginTop: 15,
    marginBottom: 10,
  },
});

export default ListingsScreen;
