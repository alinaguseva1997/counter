import React from 'react';
import s from './Counter.module.css'
import {Button} from "./Button/Button";
import {Display} from "./Display/display";

type CounterPropsType = {
    displayValue: number
    addNewSettingCallback: (name: string) => void
    maxValue: number
    isValuesChanged:boolean
    startValue: number
    incorrectValue: boolean
}

export const Counter = (props: CounterPropsType) => {

    const buttonIncDisabled = props.displayValue === props.maxValue || props.displayValue === props.maxValue || props.incorrectValue ||props.isValuesChanged
    const buttonResetDisabled = props.displayValue === props.startValue || props.displayValue === props.startValue || props.incorrectValue || props.isValuesChanged

    return (
    <div className={s.counterWrapper}>
            <Display displayValue={props.displayValue}
                     maxValue = {props.maxValue}
                     incorrectValue = {props.incorrectValue}
                     enterValue = {props.isValuesChanged}/>
            <div className={s.buttonWrapper}>
                <Button name={'inc'}
                        callBack={props.addNewSettingCallback}
                        disabled={buttonIncDisabled}/>
                <Button name={'reset'}
                        callBack={props.addNewSettingCallback}
                        disabled={buttonResetDisabled}/>
            </div>
        </div>
    );
};
