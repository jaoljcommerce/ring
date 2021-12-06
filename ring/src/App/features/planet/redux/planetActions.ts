import {
  PLANET_TYPES,
  GetAllPlanetsAction,
  GetAllPlanetsSuccessAction,
  SetApiPlanetsRequestStateAction,
  SetApiPlanetsRequestErrorAction,
} from './planetTypes';
import { Planet } from '../model/planetModel';
import { API_REQUEST_STATE } from '../../../core/enums/apiRequestState';

export const setApiPlanetsRequestState = (
  apiPlanetsRequestState: API_REQUEST_STATE,
): SetApiPlanetsRequestStateAction => ({
  type: PLANET_TYPES.SET_API_PLANETS_REQUEST_STATE,
  payload: {
    apiPlanetsRequestState: apiPlanetsRequestState,
  },
});

export const setApiPlanetsRequestError = (
  apiPlanetsRequestError: string,
): SetApiPlanetsRequestErrorAction => ({
  type: PLANET_TYPES.SET_API_PLANETS_REQUEST_ERROR,
  payload: {
    apiPlanetsRequestError: apiPlanetsRequestError,
  },
});

export const getAllPlanets = (): GetAllPlanetsAction => ({
  type: PLANET_TYPES.GET_ALL,
  payload: null,
});

export const getAllPlanetsSuccess = (planets: Planet[]): GetAllPlanetsSuccessAction => ({
  type: PLANET_TYPES.GET_ALL_SUCCESS,
  payload: {
    planets: planets,
  },
});
