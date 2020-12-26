import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

function Icon({
  name,
  size = 40,
  backgroundColor = '#000',
  iconColor = '#000',
  style,
}) {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          top: 2,
          // justifyContent: 'center',
          // alignItems: 'center',
        },
        style,
      ]}
    >
      <MaterialCommunityIcons name={name} size={size * 0.7} color={iconColor} />
    </View>
  );
}

export default Icon;
