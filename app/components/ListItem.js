import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';

function ListItem({
  title,
  subtitle,
  image,
  IconComponent,
  IconrightComponent,
  onPress,
  renderRightActions,
  style,
  style1,
  time,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={[styles.container, style]}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <AppText style={{}}>{time}</AppText>
          <View style={styles.detailsContainer}>
            <AppText style={[styles.title, style1]}>{title}</AppText>
            {subtitle && (
              <AppText style={[styles.subtitle, style1]}>{subtitle}</AppText>
            )}
          </View>
          <View style={{ position: 'absolute' }}>{IconrightComponent}</View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  image: {
    width: 62,
    height: 62,
    borderRadius: 35,
  },
  subtitle: {
    color: colors.medium,
    fontSize: 16,
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
    color: '#010101',
  },
});

export default ListItem;
