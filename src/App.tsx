import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Setting} from "./components/Settings/Setting";


function App() {
    let startValueAsString = localStorage.getItem('startValue')
    let maxValueAsString = localStorage.getItem('maxValue')

    const [displayValue, setDisplayValue] = useState<number>(Number(startValueAsString)||0)
    const [maxValue, setMaxValue] = useState<number>(Number(maxValueAsString)||0)
    const [startValue, setStartValue] = useState<number>(Number(startValueAsString)||0)
    const [isValuesChanged,setIsValuesChanged]=useState(false)

    const addCounterDisplay = () => {
        setDisplayValue(displayValue + 1)
    }

    const resetCounterDisplay = () => {
         setDisplayValue(startValue)
    }
    const addCounterInputCallBack = (name: string) => {
         name === 'inc' ? addCounterDisplay() : resetCounterDisplay()
        if (name === 'set') {
            localStorage.setItem('maxValue', JSON.stringify(maxValue))
            localStorage.setItem('startValue', JSON.stringify(startValue))
            setIsValuesChanged(false)
        }
    }

    const incorrectValue = maxValue < 0 || startValue < 0 || maxValue === startValue || startValue > maxValue

  return (
    <div className="App">
        <Setting addCounterInputCallBack = {addCounterInputCallBack}
                 setMaxValue = {setMaxValue}
                 setIsValuesChanged={setIsValuesChanged}
                 incorrectValue = {incorrectValue}
                 maxValue = {maxValue}
                 setStartValue = {setStartValue}
                 startValue = {startValue}
                 displayValue = {displayValue}/>

        <Counter displayValue ={displayValue}
                 isValuesChanged={isValuesChanged}
                 incorrectValue = {incorrectValue}
                 maxValue = {maxValue}
                 startValue = {startValue}
                 addCounterInputCallBack = {addCounterInputCallBack}/>
    </div>
  );
}

export default App;