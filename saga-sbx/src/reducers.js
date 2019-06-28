import { combineReducers } from "redux";
import countReducer from './count_reducer';

const rootReducer = combineReducers({
  count: countReducer
});

export default rootReducer;
