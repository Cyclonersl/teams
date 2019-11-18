import * as util from "../util";
import arrayMove from "array-move";

// Action Types
export const Types = {
  ADD_TEAM: "ADD_TEAM",
  REM_TEAM: "REM_TEAM",
  ADD_TEAM_SERVICE: "ADD_TEAM_SERVICE",
  REM_TEAM_SERVICE: "REM_TEAM_SERVICE",
  REORDER_SERVICE: "REORDER_SERVICE"
};

// Reducer
export default function reducer(state = util.normalizedStateArray, action) {
  switch (action.type) {
    case Types.ADD_TEAM:
      return util.normalizedStateArrayAdd(state, action);
    case Types.REM_TEAM:
      return util.normalizedStateArrayRem(state, action);
    case Types.ADD_TEAM_SERVICE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            services: [...state.byId[action.id].services, action.payload]
          }
        }
      };
    case Types.REORDER_SERVICE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            services: arrayMove(
              [...state.byId[action.id].services],
              action.payload.oldIndex,
              action.payload.newIndex
            )
          }
        }
      };
    default:
      return state;
  }
}

// Action Creators
export const addTeam = team => {
  if (team.services === undefined) team.services = [];

  return {
    type: Types.ADD_TEAM,
    id: team.id,
    payload: team
  };
};

export const remTeam = team => {
  return {
    type: Types.REM_TEAM,
    id: team.id
  };
};

export const addService = (team, service) => {
  return {
    type: Types.ADD_TEAM_SERVICE,
    id: team.id,
    payload: service.id
  };
};

export const reorderService = (team, oldIndex, newIndex) => {
  return {
    type: Types.REORDER_SERVICE,
    id: team.id,
    payload: {
      oldIndex: oldIndex,
      newIndex: newIndex
    }
  };
};
