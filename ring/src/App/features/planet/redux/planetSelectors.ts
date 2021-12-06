import { createSelector } from 'reselect';

import { PlanetState } from './planetTypes';
import { RootState } from '../../../core/redux/model/rootStateModel';
import { API_REQUEST_STATE } from '../../../core/enums/apiRequestState';
import { Planet } from '../model/planetModel';

const getRoot = (state: RootState) => state.planet;

export const apiPlanetsRequestState = createSelector<RootState, PlanetState, API_REQUEST_STATE>(
  getRoot,
  (root: PlanetState) => root.apiPlanetsRequestState,
);

export const apiPlanetsRequestError = createSelector<RootState, PlanetState, string | null>(
  getRoot,
  (root: PlanetState) => root.apiPlanetsRequestError,
);

export const planets = createSelector<RootState, PlanetState, Planet[]>(
  getRoot,
  (root: PlanetState) => root.planets,
);
