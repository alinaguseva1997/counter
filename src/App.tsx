import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Setting} from "./components/Settings/Setting";


function App() {

    const [displayValue, setDisplayValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setMinValue] = useState<number>(0)

    const addCounterDisplay = () => {
        setDisplayValue(displayValue + 1)
    }

    const resetCounterDisplay = () => {
         setDisplayValue(0)
    }


    const addCounterInputCallBack = (name: string) => {
         name === 'inc' ? addCounterDisplay() : resetCounterDisplay()
       // name === 'set' ? localstorage...
    }

  return (
    <div className="App">
        <Setting addCounterInputCallBack = {addCounterInputCallBack}
                 setMaxValue = {setMaxValue}
                 maxValue = {maxValue}
                 setMinValue = {setMinValue}
                 startValue = {startValue}/>
        <Counter displayValue ={displayValue}
                 maxValue = {maxValue}
                 startValue = {startValue}
                 addCounterInputCallBack = {addCounterInputCallBack}/>
    </div>
  );
}

export default App;