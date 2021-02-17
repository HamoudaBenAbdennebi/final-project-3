import { applyMiddleware, createStore } from "redux";
import thunk from "thunk";
import rootReducer from "./reducers/rootReducer";

const middleware = [thunk];

const store = createStore(
  rootReducer,
  applyMiddleware(middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
