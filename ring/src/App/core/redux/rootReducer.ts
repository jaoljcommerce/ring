import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { planetReducer } from '../../features/planet/redux/planetReducer';

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    planet: planetReducer,
  });

export default rootReducer;
