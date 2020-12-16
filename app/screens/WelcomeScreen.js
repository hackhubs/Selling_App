import React from 'react';
import { ImageBackground, View, Text, Image, StyleSheet } from 'react-native';


function WelcomeScreen(props) {
   return (
      <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
         <View style={styles.logocontainer}>
            <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
            <Text style={{color: 'black'}}>Welcome</Text>
         </View>
         <View style={styles.loginButton} />
         <View style={styles.registerButton } />
      </ImageBackground>
   )
}

const styles = StyleSheet.create({
   background: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
   },
   logo: {
      width: 100,
      height: 100,
   },
   logocontainer: {
      bottom:400
   },
   loginButton: {
      backgroundColor: 'blue',
      width: '100%',
      height: 50,

   },
   registerButton: {
      backgroundColor: 'yellow',
      width: '100%',
      height: 50,
   }

})


export default WelcomeScreen;


