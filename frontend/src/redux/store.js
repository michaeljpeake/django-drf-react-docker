import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducer from "./reducers.js";

const middlewares = [thunk, logger];

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middlewares)
  );
  return store;
}
