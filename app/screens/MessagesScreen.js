import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import Icon from '../components/Icon';

const initialMessages = [
  {
    id: 1,
    title: 'Aanya Jain',
    description: 'D1',
    image: require('../assets/aanya.png'),
  },

  {
    id: 2,
    title: 'Aanya Jain',
    description: 'D2',
    image: require('../assets/aanya.png'),
  },
  {
    id: 3,
    title: 'Aanya Jain',
    description: 'D3',
    image: require('../assets/aanya.png'),
  },
  {
    id: 4,
    title: 'Aanya Jain',
    description: 'D5',
    image: require('../assets/aanya.png'),
  },
  {
    id: 5,
    title: 'T5',
    description: 'D6',
    image: require('../assets/mosh.jpg'),
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setrefreshing] = useState(false);
  const handleDelete = (message) => {
    // Delete the messages from message array
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <View style={{ top: 2 }}>
        <Searchbar
          placeholder="Search"
          onIconPress={() => console.log('press search')}
        />
      </View>
      <View style={{ top: 23 }}>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subtitle={item.description}
              image={item.image}
              style={{
                backgroundColor: 'white',
                borderRadius: 8,
                width: 385,
                marginBottom: 10,
              }}
              onPress={() => console.log('message selected', item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
              renderLeftActions={() => (
                <View style={{ backgroundColor: 'green', width: 70 }} />
              )}
              IconrightComponent={[
                <Icon
                  name="trash-can-outline"
                  size={30}
                  style={{ left: 355, top: 55 }}
                />,
                <Icon
                  name="chevron-double-left"
                  size={30}
                  style={{ left: 340, top: 26 }}
                />,
              ]}
            />
          )}
          // ItemSeparatorComponent={() => (
          //   <View
          //     style={{
          //       backgroundColor: 'lightgray',
          //       width: 280,
          //       height: 1,
          //       left: 90,
          //     }}
          //   />
          // )}
          refreshing={refreshing}
          onRefresh={() => {
            setMessages([
              {
                id: 4,
                title: 'T4',
                description: 'D5',
                image: require('../assets/mosh.jpg'),
              },
              {
                id: 5,
                title: 'T5',
                description: 'D5',
                image: require('../assets/mosh.jpg'),
              },
            ]);
          }}
        />
      </View>
    </Screen>
  );
}

export default MessagesScreen;
