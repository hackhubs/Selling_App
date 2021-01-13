import React from 'react';
import { ImageBackground, View, Text, Image, StyleSheet } from 'react-native';

// import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={3}
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.logocontainer}>
        <Image source={require('../assets/icon.png')} style={styles.logo} />
        <Text style={styles.tagtext}>Welcome</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate('Login')} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logocontainer: {
    bottom: 360,
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
  },
  tagtext: {
    fontSize: 25,
    fontWeight: '600',
  },
});

export default WelcomeScreen;
