import {combineReducers, createStore} from "redux";
import {Reducer} from "./reducer";

const rootReducer = combineReducers({
    counter: Reducer
})

export const store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store;