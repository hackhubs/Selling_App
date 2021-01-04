import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from './AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({
  items,
  name,
  placeholder,
  PickerItemComponent,
  numberOfColumns,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        name="apps"
        onSelectedItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
