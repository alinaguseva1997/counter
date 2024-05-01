import {AppStateType} from "./store";

export const displayValueSelector = (state: AppStateType): number => state.counter.displayValue
export const startValueSelector = (state: AppStateType): number => state.counter.startValue
export const maxValueSelector = (state: AppStateType): number => state.counter.maxValue
export const isValuesChangedSelector = (state: AppStateType): boolean => state.counter.isValuesChanged