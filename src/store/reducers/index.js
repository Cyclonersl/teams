import { combineReducers } from "redux";
import teamsReducer from "./teamsReducer";
import scheduledServicesReducer from "./scheduledServicesReducer";

export default combineReducers({
  teamsReducer,
  scheduledServicesReducer
});
