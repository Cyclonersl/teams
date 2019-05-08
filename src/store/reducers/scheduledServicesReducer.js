import * as actionType from '../action/actionTypes'
import * as util  from '../util'

const scheduledServicesReducer = (state = util.normalizedStateArray, action) => {
    switch (action.type) {
        case actionType.ADD_SCHED_SERVICE:
            return util.normalizedStateArrayAdd(state, action)
        case actionType.REM_SCHED_SERVICE:
            return util.normalizedStateArrayRem(state, action)            
        default:
            return state
    }
}

export default scheduledServicesReducer
