import React from 'react';
import * as Yup from 'yup';

import FilterForm from '../../../../components/form/base/FilterForm';
import { PlanetFilterValues } from '../../model/planetModel';
import TextField from '../../../../components/form/elements/TextField';

interface PlanetFormProps {
  initialValues: PlanetFilterValues;
}

const PlanetForm: React.FC<PlanetFormProps> = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'validation.too_short').required('validation.is_required'),
  });

  return (
    <>
      <FilterForm<PlanetFilterValues>
        initialValues={props.initialValues}
        validationSchema={validationSchema}
      >
        <TextField
          name="name"
          label="planet.name"
        />
      </FilterForm>
    </>
  );
};

export default PlanetForm;
