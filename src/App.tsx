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
import {storeType} from "./redux/store";


function App() {

    const displayValue = useSelector<storeType, number>(state => state.displayValue)
    const startValue = useSelector<storeType, number>(state => state.startValue)
    const maxValue = useSelector<storeType, number>(state => state.maxValue)
    const isValuesChanged = useSelector<storeType, boolean>(state => state.isValuesChanged)
    const dispatch = useDispatch()
    console.log(displayValue)

    // let startValueAsString = localStorage.getItem('startValue')
    // let maxValueAsString = localStorage.getItem('maxValue')

    // const [displayValue, setDisplayValue] = useState<number>(0)/*Number(startValueAsString)||0*/
    // const [maxValue, setMaxValue] = useState<number>(5) /*Number(maxValueAsString)||0*/
    // const [startValue, setStartValue] = useState<number>(0) /*Number(startValueAsString)||0*/
    // const [isValuesChanged,setIsValuesChanged]=useState(false)

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