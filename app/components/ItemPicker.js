import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ItemPicker = () => {
  const [selectedValue, setSelectedValue] = useState('java');
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="apps" size={25} />
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        model="dropdown"
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ItemPicker;
