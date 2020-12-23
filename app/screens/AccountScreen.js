import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title="Abhav Thakur"
          subtitle="abhav.thakur25@gmail.com"
          image={require('../assets/mosh.jpg')}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => <ListItem title={item.title} />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
});

export default AccountScreen;
