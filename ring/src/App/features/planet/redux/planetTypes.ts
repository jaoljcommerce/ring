import { Planet } from '../model/planetModel';
import { API_REQUEST_STATE } from '../../../core/enums/apiRequestState';

export enum PLANET_TYPES {
  SET_API_PLANETS_REQUEST_STATE = 'SET_API_PLANETS_REQUEST_STATE',
  SET_API_PLANETS_REQUEST_ERROR = 'SET_API_PLANETS_REQUEST_ERROR',
  GET_ALL = 'PLANET_GET_ALL',
  GET_ALL_SUCCESS = 'PLANET_GET_ALL_SUCCESS',
}

export interface SetApiPlanetsRequestStateAction {
  type: PLANET_TYPES.SET_API_PLANETS_REQUEST_STATE;
  payload: {
    apiPlanetsRequestState: API_REQUEST_STATE;
  };
}

export interface SetApiPlanetsRequestErrorAction {
  type: PLANET_TYPES.SET_API_PLANETS_REQUEST_ERROR;
  payload: {
    apiPlanetsRequestError: string;
  };
}

export interface GetAllPlanetsAction {
  type: PLANET_TYPES.GET_ALL;
  payload: null;
}

export interface GetAllPlanetsSuccessAction {
  type: PLANET_TYPES.GET_ALL_SUCCESS;
  payload: {
    planets: Planet[];
  };
}

export type PlanetActions =
  | SetApiPlanetsRequestStateAction
  | SetApiPlanetsRequestErrorAction
  | GetAllPlanetsAction
  | GetAllPlanetsSuccessAction;

export interface PlanetState {
  apiPlanetsRequestState: API_REQUEST_STATE;
  apiPlanetsRequestError: string | null;
  planets: Planet[];
}
