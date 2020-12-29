import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from './AppButton';

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      title={title}
      onPress={handleSubmit}
      style={{ backgroundColor: '#fccb45' }}
    />
  );
}

export default SubmitButton;
