import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../components/AppText';
import colors from '../config/colors';

function VeiwImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="delete" color="white" size={35} />
      </View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../assets/chair.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    position: 'absolute',
    top: 30,
    left: 20,
  },
  deleteIcon: {
    position: 'absolute',
    top: 24,
    right: 20,
  },

  image: {
    width: '100%',
    height: '100%',
    top: 33,
  },
});

export default VeiwImageScreen;
