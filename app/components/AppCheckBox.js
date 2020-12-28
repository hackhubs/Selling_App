import React from 'react';
import { CheckBox } from 'react-native-elements';
import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';

function AppCheckBox({ name, ...otherProps }) {
  const {
    errors,
    values,
    setFieldValue,
    setFieldTouched,
    touched,
  } = useFormikContext();
  return (
    <>
      <CheckBox
        {...otherProps}
        checked={values[name]}
        onBlur={() => setFieldTouched(name)}
        onPress={() => setFieldValue(name, !values[name])}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppCheckBox;
