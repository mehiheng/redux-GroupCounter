export default (state = [0,0], action) => {
    switch (action.type){
        case 'INCREMENT':
        {
            const newState = [...state]
            newState[action.index]++
            return newState
        }
        case 'DECREMENT':
        {
            const newState = [...state]
            newState[action.index]--
            return newState
        }
        case'multiply':
        {
            const newState = [...state]
            newState[action.index]*=action.mulitpier;
            return newState
        }
        default:
            return state
    }
}