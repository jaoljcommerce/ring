import { all, fork } from 'redux-saga/effects';

import planetSaga from '../../features/planet/redux/planetSaga';

export default function* rootSaga() {
  yield all([
    fork(planetSaga),
  ]);
}
