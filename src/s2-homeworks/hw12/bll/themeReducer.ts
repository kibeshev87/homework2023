const initState = {
    themeId: 1,
}
type InitStateType = typeof initState

export const themeReducer = (state = initState, action: ChangeThemeIdType): InitStateType => {
    switch (action.type) {
        case "SET_THEME_ID": {
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}

export type ChangeThemeIdType = ReturnType<typeof changeThemeIdAC>
export const changeThemeIdAC = (id: number)/*: any*/ => ({ type: 'SET_THEME_ID', id })
