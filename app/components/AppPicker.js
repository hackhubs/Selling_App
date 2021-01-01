import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({ icon, items, placeholder, onSelectedItem, selectedItem }) {
  const [modalVisible, setmodalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setmodalVisible(true)}>
        <View style={styles.container}>
          <MaterialCommunityIcons name={icon} size={25} style={styles.icon} />
          {selectedItem ? (
              <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
              <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons name="chevron-double-down" size={25} />
        </View>

      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setmodalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setmodalVisible(false);
                  onSelectedItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flexDirection: 'row',
    width: '100%',
    borderRadius: 20,
    padding: 12,
    marginVertical: 10,
    alignItems: 'center',
  },
  textInput: {
    fontSize: 20,
    fontWeight: '600',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    color: 'black'
    }
});

export default AppPicker;
