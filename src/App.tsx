import React from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Setting} from "./components/Settings/Setting";
import {useDispatch, useSelector} from "react-redux";
import {displayValueSettingAC,
    increaseCounterDisplayAC,
    resetCounterDisplayAC,
    setNewIsValueChangedAC,
} from "./redux/reducer";
import {AppStateType} from "./redux/store";


function App() {

    const displayValue = useSelector<AppStateType, number>(state => state.counter.displayValue)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const isValuesChanged = useSelector<AppStateType, boolean>(state => state.counter.isValuesChanged)
    const dispatch = useDispatch()

    // let startValueAsString = localStorage.getItem('startValue')
    // let maxValueAsString = localStorage.getItem('maxValue')

    const addCounterDisplay = () => {
        dispatch(increaseCounterDisplayAC())
    }

    const resetCounterDisplay = () => {
        dispatch(resetCounterDisplayAC())
    }
    const addNewSettingCallback = (name: string ) => {
         name === 'inc' ? addCounterDisplay() : resetCounterDisplay()
        if (name === 'set') {
            // localStorage.setItem('maxValue', JSON.stringify(maxValue))
            // localStorage.setItem('startValue', JSON.stringify(startValue))
            dispatch(displayValueSettingAC())
            dispatch(setNewIsValueChangedAC(false))
        }
    }

        const incorrectValue = maxValue < 0 || startValue < 0 || maxValue === startValue || startValue > maxValue

  return (
    <div className="App">
        <Setting incorrectValue = {incorrectValue}
                 maxValue = {maxValue}
                 startValue = {startValue}
                 displayValue = {displayValue}
                 addNewSettingCallback = {addNewSettingCallback}/>

        <Counter displayValue ={displayValue}
                 isValuesChanged={isValuesChanged}
                 incorrectValue = {incorrectValue}
                 maxValue = {maxValue}
                 startValue = {startValue}
                 addNewSettingCallback = {addNewSettingCallback}/>
    </div>
  );
}

export default App;