import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import profile from './profile'

const rootReducer = combineReducers({
  form,
  profile
});
export default rootReducer;