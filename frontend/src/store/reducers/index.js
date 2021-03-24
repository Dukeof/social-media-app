import { combineReducers } from "redux";
import { logInOrOutReducer} from './logInOrOutReducer';
import { signUpReducer} from './signupReducer';


export const rootReducer = combineReducers({
    logInOrOutReducer,
    signUpReducer
});