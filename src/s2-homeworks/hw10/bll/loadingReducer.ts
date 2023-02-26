const initState = {
    isLoading: false,
}
export type initStateType = typeof initState

export const loadingReducer = (state = initState, action: LoadingActionType): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE_LOADING": {
            return {
                /*...state, isLoading: action.isLoading*/
                isLoading: action.isLoading
            }
        }        // пишет студент  // need to fix

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
