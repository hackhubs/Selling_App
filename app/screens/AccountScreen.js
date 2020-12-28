import React from 'react';
import { StyleSheet, View, FlatList, Image } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';

const menuItems = [
  {
    title: 'My Purchase',
    icon: {
      name: 'shopping-bag',
    },
  },
];

function AccountScreen() {
  return (
    <Screen style={{ backgroundColor: '#f3f6f3' }}>
      <View style={styles.container}>
        <Image
          style={{
            width: 250,
            height: 250,
            borderRadius: 115,
          }}
          source={require('../assets/aanya.png')}
        />
      </View>
      <View style={styles.details}>
        <ListItem
          title="Edit Profile"
          style1={{ fontSize: 16 }}
          IconComponent={<Icon name="account-edit" size={30} />}
        />
      </View>

      <View style={styles.detailContainer}>
        <ListItem
          title="Aanya Jain"
          IconComponent={<Feather name="user" size={28} color="black" />}
        />
        <ListItem
          title="jainaanya2000@gmail.com"
          IconComponent={<Feather name="mail" size={28} color="black" />}
        />
        <ListItem
          title="9418455461"
          IconComponent={<Feather name="phone-call" size={28} color="black" />}
        />
        <ListItem
          title="Himchal Pradesh"
          IconComponent={
            <Ionicons name="location-outline" size={28} color="black" />
          }
        />
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Feather
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                  size={28}
                />
              }
            />
          )}
        />
      </View>
      <View style={styles.details}>
        <ListItem
          title="Log Out"
          style1={{ fontSize: 16 }}
          IconComponent={<Icon name="logout" size={30} />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  details: {
    backgroundColor: 'white',
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    left: 15,
  },
});

export default AccountScreen;
