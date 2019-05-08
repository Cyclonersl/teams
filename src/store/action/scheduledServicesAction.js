import * as actionTypes from './actionTypes'
export const addSchedService = service => {       
    return {
            type: actionTypes.ADD_SCHED_SERVICE,
            id: service.id,
            payload: service
            }
}

export const remSchedService = service => {
    return {
        type: actionTypes.REM_SCHED_SERVICE,
        id: service.id
    }
}