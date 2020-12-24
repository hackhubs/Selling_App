import React from 'react';
import { StyleSheet, View, FlatList, Image } from 'react-native';

import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';

const menuItems = [
  {
    title: 'My Purchase',
    icon: {
      name: 'shopping',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'message-text',
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen() {
  return (
    <Screen>
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
      <ListItem
        title="Edit Profile"
        style={{ fontSize: 16 }}
        IconComponent={<Icon name="account-edit" size={28} />}
      />

      <View style={styles.detailContainer}>
        <ListItem
          title="Aanya Jain"
          IconComponent={
            <Icon name="account" backgroundColor={colors.secondary} />
          }
        />
        <ListItem
          title="jainaanya2000@gmail.com"
          IconComponent={<Icon name="email" backgroundColor={colors.primary} />}
        />
        <ListItem
          title="9418455461"
          IconComponent={
            <Icon name="phone-in-talk" backgroundColor={colors.secondary} />
          }
        />
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
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
  detailContainer: {},
});

export default AccountScreen;
