const exampleInitRootState = {
    fruits: [{ name: 'banana', id: 1245 }]
}

export const actionTypes = {
    ADD_FRUITS: 'ADD_FRUITS',
}


// ACTIONS
export const addFruit = (payload: { name: string, id: number }) => {
    return { type: actionTypes.ADD_FRUITS, payload }
}

const rootReducer = (state = exampleInitRootState, action) => {
    switch (action.type) {
        case actionTypes.ADD_FRUITS:
            return {
                ...state,
                fruits: [
                    ...state.fruits,
                    action.payload
                ],
            }
        default:
            return state
    }
}

export default rootReducer