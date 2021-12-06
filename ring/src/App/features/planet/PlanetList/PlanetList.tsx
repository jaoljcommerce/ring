import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Actions from '../redux/planetActions';
import * as Selectors from '../redux/planetSelectors';
import PlanetForm from '../form/PlanetForm';
import { PlanetFilterValues } from '../model/planetModel';

const initialValues: PlanetFilterValues = {
  name: '',
};

const PlanetList: React.FC = () => {
  const dispatch = useDispatch();
  const planets = useSelector(Selectors.planets);

  useEffect(() => {
    dispatch(Actions.getAllPlanets());
  }, [dispatch]);

  return (
    <>
      <PlanetForm initialValues={initialValues} />
      {planets.map((planet, key) => (
        <p key={key}>{planet.name}</p>
      ))}
    </>
  );
};

export default PlanetList;
