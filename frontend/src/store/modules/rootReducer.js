import { combineReducers } from 'redux';
import auth from './auth/reducer';
import user from './user/reducer';
import contact from './contact/reducer';


export default combineReducers({
    auth,
    user,
    contact,
});