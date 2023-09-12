import thunk from "redux-thunk";
import { reducer as ProductReducer } from "./ProductReducer/reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

const rootReducer = combineReducers({
   ProductReducer
  });
  export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))