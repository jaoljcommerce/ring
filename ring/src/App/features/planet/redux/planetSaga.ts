import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { PLANET_TYPES } from './planetTypes';
import * as Actions from './planetActions';
import { PlanetApi } from '../api/planetApi';
import { Planet } from '../model/planetModel';
import { API_REQUEST_STATE } from '../../../core/enums/apiRequestState';

function* getAllPlanetsSaga() {
  try {
    yield put(Actions.setApiPlanetsRequestState(API_REQUEST_STATE.LOADING));

    const response: AxiosResponse<{
      results: Planet[] 
    }> = yield call(PlanetApi.getAll);

    yield put(Actions.setApiPlanetsRequestState(API_REQUEST_STATE.SUCCEEDED_GET));
    yield put(Actions.getAllPlanetsSuccess(response.data.results));
  } catch (error) {
    yield put(Actions.setApiPlanetsRequestError(error as string));
    yield put(Actions.setApiPlanetsRequestState(API_REQUEST_STATE.FAILED));
  }
}

export default function* watch() {
  yield* [
    takeLatest(PLANET_TYPES.GET_ALL, getAllPlanetsSaga),
  ];
}
