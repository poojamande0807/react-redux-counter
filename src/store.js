// store.js
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers"; // Your root reducer

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Action Type:", action.type);
  return next(action);
};

const payloadLoggerMiddleware = (store) => (next) => (action) => {
  console.log("Action Payload:", action.payload);
  return next(action);
};

const middleware = [loggerMiddleware, payloadLoggerMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
