import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";


const enhancer = applyMiddleware(thunk);

export const store = createStore(rootReducer, enhancer);