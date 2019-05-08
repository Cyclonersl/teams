import * as actionTypes from './actionTypes'
export const addTeam = team => {       
    if(team.services === undefined)
        team.services = []

    return {
            type: actionTypes.ADD_TEAM,
            id: team.id,
            payload: team
            }
}

export const remTeam = team => {
    return {
        type: actionTypes.REM_TEAM,
        id: team.id
    }
}

export const addService = (team, service) => {
    return {
        type: actionTypes.ADD_TEAM_SERVICE,
        id: team.id,
        payload: service.id
    }
}