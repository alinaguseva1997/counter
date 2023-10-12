import {legacy_createStore} from "redux";
import {Reducer} from "./reducer";

export type storeType = ReturnType<typeof Reducer>

export const store = legacy_createStore(Reducer)

// @ts-ignore
window.store = store;

console.log(store)