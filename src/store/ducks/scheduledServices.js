import * as util from "../util";

// Action Types
export const Types = {
  ADD_SCHED_SERVICE: "ADD_SCHED_SERVICE",
  REM_SCHED_SERVICE: "ADD_SCHED_SERVICE"
};

// Reducers
export default function(state = util.normalizedStateArray, action) {
  switch (action.type) {
    case Types.ADD_SCHED_SERVICE:
      return util.normalizedStateArrayAdd(state, action);
    case Types.REM_SCHED_SERVICE:
      return util.normalizedStateArrayRem(state, action);
    default:
      return state;
  }
}

// Action Creators
export const addSchedService = service => {
  return {
    type: Types.ADD_SCHED_SERVICE,
    id: service.id,
    payload: service
  };
};

export const remSchedService = service => {
  return {
    type: Types.REM_SCHED_SERVICE,
    id: service.id
  };
};
