export type ActionType = ReturnType<typeof increaseCounterDisplayAC>
    | ReturnType<typeof resetCounterDisplayAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setNewIsValueChangedAC>
    | ReturnType<typeof displayValueSettingAC>

type InitialStateType = typeof initialState

const initialState  = {
    displayValue: 0,
    startValue: 0,
    maxValue: 5,
    isValuesChanged: false
}

export const Reducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch(action.type) {
        case 'ADD-COUNTER-DISPLAY': {
            return {...state, displayValue: state.displayValue + 1}
        }
        case 'RESET-COUNTER-DISPLAY': {
            return {...state, displayValue: state.displayValue = state.startValue}
        }
        case 'SET-START-VALUE': {
            return {...state, startValue: state.startValue = action.value}
        }
        case 'SET-MAX-VALUE': {
            return {...state, maxValue: state.maxValue = action.value}
        }
        case 'SET-NEW-IS-VALUE-CHANGED': {
            return {...state, isValuesChanged: state.isValuesChanged = action.newStatus}
        }
        case 'DISPLAY-VALUE-SETTING': {
            return {...state, displayValue: state.startValue}
        }
        default: {
            return state;
        }
    }
}

export const increaseCounterDisplayAC = () => ({type: 'ADD-COUNTER-DISPLAY' as const})
export const resetCounterDisplayAC = () => ({type: 'RESET-COUNTER-DISPLAY' as const})
export const setStartValueAC = (value: number) => ({type: 'SET-START-VALUE', value} as const)
export const setMaxValueAC = (value: number) => ({type: 'SET-MAX-VALUE',value} as const)
export const setNewIsValueChangedAC = (newStatus: boolean) => ({type: 'SET-NEW-IS-VALUE-CHANGED',newStatus} as const)
export const displayValueSettingAC = () => ({type: 'DISPLAY-VALUE-SETTING' as const})
