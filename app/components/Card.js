import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import AppText from "../components/AppText";

function Card({
  title,
  subtitle,
  imageUrl,
  username,
  location,
  details,
  onPress,
  IconComponent,
  thumbnailUrl,
}) {
  return (
    <TouchableHighlight
      underlayColor={colors.light}
      // style={styles.details}
      onPress={onPress}
    >
      <View style={styles.card}>
        <Image
          style={styles.image}
          tint="light"
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
        />

        <View style={styles.detailContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>

          <Text style={styles.details}>{details}</Text>

          <AppText style={styles.user}>{username}</AppText>
          <View style={{ flexDirection: "row" }}>
            {IconComponent}
            <AppText style={styles.userlocation}>{location}</AppText>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 210,
  },
  detailContainer: {
    padding: 15,
  },
  subtitle: {
    color: colors.subtitle,
    fontWeight: "600",
    top: 18,
  },
  title: {
    marginBottom: -24,
    bottom: 10,
  },
  user: {
    fontSize: 10,
    top: -3,
  },

  userlocation: {
    fontSize: 10,
  },

  details: {
    backgroundColor: "#2730ff",
    borderRadius: 60,
    left: 225,
    width: 110,
    top: 30,
    padding: 5,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Card;
