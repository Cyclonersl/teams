import normalizedStateArray from '../util'
import normalizedStateArrayAdd from '../util'

const teams = (state = normalizedStateArray, action) => {
    switch (action.type) {
        case 'ADD_TEAM':
            return normalizedStateArrayAdd(state, action)
        default:
            return state
    }
}

export default teams