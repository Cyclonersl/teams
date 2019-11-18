import * as actionTypes from "../action/actionTypes";
import * as util from "../util";
import arrayMove from "array-move";

/* Reducer */
const teams = (state = util.normalizedStateArray, action) => {
  switch (action.type) {
    case actionTypes.ADD_TEAM:
      return util.normalizedStateArrayAdd(state, action);
    case actionTypes.REM_TEAM:
      return util.normalizedStateArrayRem(state, action);
    case actionTypes.ADD_TEAM_SERVICE:
      return addServiceToTeam(state, action);
    case actionTypes.REORDER_SERVICE:
      return reorderService(state, action);
    default:
      return state;
  }
};

const addServiceToTeam = (state, action) => {
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
};

const reorderService = (state, action) => {
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
};

export default teams;
