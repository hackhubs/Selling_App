import React from "react";
import { Image, View, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";

function ListingDetailsScreen({ route }) {
  const listening = route.params;
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Image style={styles.image} source={listening.images[0].url} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{listening.title}</AppText>
        <AppText style={styles.price}>INR {listening.price}</AppText>
        <ListItem
          style={{ right: 12 }}
          image={require("../assets/mosh.jpg")}
          title="Mosh hamdeni"
          subtitle="5 Listings"
          IconrightComponent={
            <Icon
              name="chevron-right"
              size={30}
              style={{ left: 350, top: 35 }}
            />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailContainer: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  price: {
    color: colors.secondary,
    fontWeight: "600",
    fontSize: 22,
    marginVertical: 10,
  },
});

export default ListingDetailsScreen;
