import { Types } from './count_actions';
import { createReducer } from 'reduxsauce';

const initialState = {
  count: 0,
}

const addToCounter = (state = initialState, action) => {
  return { ...state, count: action.count };
}

const handlers = {
  [Types.ADD_TO_COUNTER]: addToCounter,
}

export default createReducer(initialState, handlers);