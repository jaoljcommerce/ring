import React from 'react';
import BaseTextField from '@mui/material/TextField';
import { Grid, InputLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useField } from 'formik';

import './TextField.scss';

interface TextFieldProps {
  label: string;
  name: string;
}

const TextField: React.FC<TextFieldProps> = ({ label, ...props }) => {
  const { t } = useTranslation();
  const [field, meta] = useField(props);
  const isError = !!(meta.error && meta.touched);

  return (
    <Grid container spacing={0} className="TextField-Container">
      <Grid item xs={4} md={3} lg={2} xl={1}>
        <InputLabel className="TextField-InputLabel" error={isError}>
          {t(label)}
        </InputLabel>
      </Grid>
      <Grid item xs={8} md={9} lg={10} xl={11}>
        <BaseTextField
          className="TextField-BaseTextField"
          error={isError}
          fullWidth
          helperText={t(meta.error ?? '')}
          id={props.name}
          {...field}
          {...props}
        />
      </Grid>
    </Grid>
  );
};

export default TextField;
