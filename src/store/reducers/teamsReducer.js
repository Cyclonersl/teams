import * as actionTypes from '../action/actionTypes'
import * as util  from '../util'

/* Reducer */
const teams = (state = util.normalizedStateArray, action) => {
    switch (action.type) {
        case actionTypes.ADD_TEAM:
            return util.normalizedStateArrayAdd(state, action)
        case actionTypes.REM_TEAM:
            return util.normalizedStateArrayRem(state, action)
        case actionTypes.ADD_TEAM_SERVICE:
            return addServiceToTeam(state, action)
        default:
            return state
    }
}

const addServiceToTeam = (state, action) => {
    return {
        ...state,
        [action.id]: {
            ...state.byId[action.id],
            services: state.byId[action.id].services.push(action.payload)
        }
    }
}

export default teams