export const normalizedStateArray = {
    allIds : [],
    byId: {}
}

export const normalizedStateArrayAdd = (state, action) => {
    
    return {
        allIds: state.allIds.concat(action.id),
        byId: {
                ...state.byId,
                [action.id]: action.payload
              }
    }
}

export const normalizedStateArrayRem = (state, action) => {
    const byId = {...state.byId};
    delete byId[action.id]    
    return {        
        allIds: state.allIds.filter(id => id !== action.id),
        byId
    } 
}