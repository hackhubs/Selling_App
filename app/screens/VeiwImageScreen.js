import React from 'react'
import { Image, StyleSheet, View } from "react-native";

import colors  from "../config/colors";

function VeiwImageScreen(props) {
   return (
      <View style={styles.container}>
         <View style={styles.closeIcon} />
         <View style={styles.deleteIcon} />
      <Image style={styles.image} resizeMode="contain"
            source={require('../assets/chair.jpg')} />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: colors.black,
      flex:1,      
   },
   closeIcon: {
      backgroundColor: colors.primary,
      width: 50,
      height: 50,
      position: "absolute",
      top: 24,
      left: 20,
   },
   deleteIcon: {
      backgroundColor: colors.secondary,
      width: 50,
      height: 50,
      position: "absolute",
      top: 24,
      right: 20,
   },

   image: {
      width: "100%",
      height: "100%",
      top: 33,
      
   }
})

export default VeiwImageScreen;
