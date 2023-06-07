import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import {
  refreshPublicaciones,
  refreshPublicacionesFail,
} from "./redux/actions/novedades";
import authReducer from "./redux/reducers/auth";
import novedadesReducer from "./redux/reducers/novedades";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  novedades: novedadesReducer,
});

export const actions = {
  novedades: {
    refreshPublicaciones: () => store.dispatch(refreshPublicaciones()),
    refreshPublicacionesFail: () => store.dispatch(refreshPublicacionesFail()),
  },
};

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
