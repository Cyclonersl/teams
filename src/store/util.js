const normalizedStateArray = {
    allIds : [],
    byId: {}
}

const normalizedStateArrayAdd = (state, action) => {
    return {
        allIds: [ ...state.allIds, action.id ],
                byId: {
                    ...state.byId,
                    [action.id]: action.payload
                }
    }
}

const normalizedStateArrayRem = (state, action) => {
    return {
        allIds: [...state.allIds.filter(id => id != action.id)],
                byId: {
                    ...state.byId,
                    [action.id]: action.payload
                }
    }
}