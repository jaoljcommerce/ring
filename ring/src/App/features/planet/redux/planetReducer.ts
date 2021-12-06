import produce from 'immer';

import { PLANET_TYPES, PlanetActions, PlanetState } from './planetTypes';
import { API_REQUEST_STATE } from '../../../core/enums/apiRequestState';

const initialState: PlanetState = {
  apiPlanetsRequestState: API_REQUEST_STATE.IDLE,
  apiPlanetsRequestError: null,
  planets: [],
};

export const planetReducer = produce((draft: PlanetState, action: PlanetActions) => {
  switch (action.type) {
    case PLANET_TYPES.SET_API_PLANETS_REQUEST_ERROR:
      draft.apiPlanetsRequestError = action.payload.apiPlanetsRequestError;
      break;
    case PLANET_TYPES.SET_API_PLANETS_REQUEST_STATE:
      draft.apiPlanetsRequestState = action.payload.apiPlanetsRequestState;
      break;
    case PLANET_TYPES.GET_ALL_SUCCESS:
      draft.planets = action.payload.planets;
      break;
  }
}, initialState);
