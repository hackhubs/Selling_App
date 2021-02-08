import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SearchBar } from "react-native-elements";
import { Feather } from "@expo/vector-icons";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Icon from "../components/Icon";

const initialMessages = [
  {
    id: 1,
    title: "Aanya Jain",
    description: "D1",
    image: require("../assets/aanya.png"),
  },

  {
    id: 2,
    title: "Aanya Jain",
    description: "D2",
    image: require("../assets/aanya.png"),
  },
  {
    id: 3,
    title: "Aanya Jain",
    description: "D3",
    image: require("../assets/aanya.png"),
  },
  {
    id: 4,
    title: "Aanya Jain",
    description: "D5",
    image: require("../assets/aanya.png"),
  },
  {
    id: 5,
    title: "T5",
    description: "D6",
    image: require("../assets/mosh.jpg"),
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
      {/* <View style={{ top: 2 }}>
        <SearchBar
          placeholder="Search"
          onIconPress={() => console.log('press search')}
        />
      </View> */}
      <Text style={styles.tite}>Chats</Text>
      <View style={{ top: 2 }}>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subtitle={item.description}
              image={item.image}
              style={{
                backgroundColor: "white",
                borderRadius: 8,
                width: 385,
                marginBottom: 10,
              }}
              onPress={() => console.log("message selected", item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
              renderLeftActions={() => (
                <View style={{ backgroundColor: "green", width: 70 }} />
              )}
              IconrightComponent={[
                <Icon
                  name="trash-can-outline"
                  size={30}
                  style={{ left: 355, top: 55 }}
                />,
                <Feather
                  name="chevrons-left"
                  size={28}
                  color="black"
                  style={{ left: 333, top: 22 }}
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
                title: "T4",
                description: "D5",
                image: require("../assets/mosh.jpg"),
              },
              {
                id: 5,
                title: "T5",
                description: "D5",
                image: require("../assets/mosh.jpg"),
              },
            ]);
          }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  tite: {
    backgroundColor: "white",
    fontSize: 25,
    borderBottomRightRadius: 20,
    padding: 5,
    paddingLeft: 15,
  },
});

export default MessagesScreen;
