import { createStore, combineReducers } from "redux";
import teams from "./ducks/teams";
import scheduledServices from "./ducks/scheduledServices";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      teams,
      scheduledServices
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

export default configureStore;
