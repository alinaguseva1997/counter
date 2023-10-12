
export type ActionType = addCounterDisplayACType
    | resetCounterDisplayACType
    | setStartValueACType
    | setMaxValueACType
    | setNewIsValueChangedACType
    |displayValueSettingACType

export type addCounterDisplayACType = ReturnType<typeof increaseCounterDisplayAC>
export type resetCounterDisplayACType = ReturnType<typeof resetCounterDisplayAC>
export type setStartValueACType = ReturnType<typeof setStartValueAC>
export type setMaxValueACType = ReturnType<typeof setMaxValueAC>
export type setNewIsValueChangedACType = ReturnType<typeof setNewIsValueChangedAC>
export type displayValueSettingACType = ReturnType<typeof displayValueSettingAC>

export type StateType = {
    displayValue: number,
    startValue: number,
    maxValue: number,
    isValuesChanged: boolean
}

const initialState  = {
    displayValue: 0,
    startValue: 0,
    maxValue: 5,
    isValuesChanged: false
}

export const Reducer = (state: StateType = initialState, action: ActionType) => {
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
            return {...state, displayValue: state. startValue}
        }
        default: {
            return state;
        }
    }
}

export const increaseCounterDisplayAC = () => {
    return {
        type: 'ADD-COUNTER-DISPLAY' as const
    }
}
export const resetCounterDisplayAC = () => {
    return {
        type: 'RESET-COUNTER-DISPLAY' as const
    }
}
export const setStartValueAC = (value: number) => {
    return {
        type: 'SET-START-VALUE' as const,
        value
    }
}
export const setMaxValueAC = (value: number) => {
    return {
        type: 'SET-MAX-VALUE' as const,
        value
    }
}
export const setNewIsValueChangedAC = (newStatus: boolean) => {
    return {
        type: 'SET-NEW-IS-VALUE-CHANGED' as const,
        newStatus
    }
}
export const displayValueSettingAC = () => {
    return {
        type: 'DISPLAY-VALUE-SETTING' as const,
    }
}