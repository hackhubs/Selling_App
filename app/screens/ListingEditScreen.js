import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from '../components/form';
import CategoryPickerItem from '../components/CategoryPickerItem';
import AppFormImagePicker from '../components/AppFormImagePicker';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().required().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image.'),
});

const categories = [
  {
    icon: 'floor-lamp',
    label: 'Furniture',
    value: 1,
  },
  {
    icon: 'car',
    label: 'Cars',
    value: 2,
  },
  {
    icon: 'camera',
    label: 'Cameras',
    value: 3,
  },
  {
    icon: 'cards',
    label: 'Games',
    value: 4,
  },
  {
    icon: 'shoe-heel',
    label: 'Clothing',
    value: 5,
  },
  {
    icon: 'basketball',
    label: 'Sports',
    value: 6,
  },
  {
    icon: 'headphones',
    label: 'Movies & Music',
    value: 7,
  },
  {
    icon: 'book-open-variant',
    label: 'Books',
    value: 8,
  },
  {
    icon: 'application',
    label: 'Other',
    value: 9,
  },
];

function ListingEditScreen() {
  const location = useLocation();

  return (
    <ScrollView>
      <Screen style={{ padding: 5 }}>
        <Form
          initialValues={{
            title: '',
            price: '',
            description: '',
            category: null,
            images: [],
          }}
          onSubmit={(values) => console.log(location, values)}
          validationSchema={validationSchema}
        >
          <AppFormImagePicker name="images" />
          <FormField maxLength={255} name="title" placeholder="Title" />
          <FormField
            keyboardType="numeric"
            maxLength={8}
            name="price"
            placeholder="Price"
          />
          <Picker
            items={categories}
            name="category"
            placeholder="Category"
            PickerItemComponent={CategoryPickerItem}
            numberOfColumns={3}
          />
          <FormField
            maxLength={255}
            multiline
            name="description"
            numberOfLines={3}
            placeholder="Description"
          />
          <SubmitButton title="Post" />
        </Form>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
