import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} size={25} style={styles.icon} />
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flexDirection: "row",
    width: "100%",
    borderRadius: 20,
    padding: 12,
    marginVertical: 10,
    alignItems: "center",
  },
  textInput: {
    fontSize: 20,
    fontWeight: "600",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
