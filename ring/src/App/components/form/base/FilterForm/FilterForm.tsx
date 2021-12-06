import React, { memo } from 'react';
import { Form, Formik } from 'formik';

import './FilterForm.scss';

interface FilterFormProps<T> {
  initialValues: T;
  validationSchema: object;
}

function component<T>(props: React.PropsWithChildren<FilterFormProps<T>>) {
  return (
    <Formik
      onSubmit={() => {}}
      initialValues={props.initialValues}
      validationSchema={props.validationSchema}
      enableReinitialize={true}
      validateOnChange={false}
    >
      <Form noValidate className="FilterForm-Wrapper">
        {props.children}
      </Form>
    </Formik>
  );
}

const FilterForm = memo(component) as typeof component;

export default FilterForm;
