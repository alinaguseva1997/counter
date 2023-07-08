import React from 'react';
import s from './Counter.module.css'
import {Button} from "./Button/Button";
import {Display} from "./Display/display";

type CounterPropsType = {
    displayValue: number
    addCounterInputCallBack: (name: string) => void
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
                     startValue = {props.startValue}
                     incorrectValue = {props.incorrectValue}
                     enterValue = {props.isValuesChanged}/>
            <div className={s.buttonWrapper}>
                <Button name={'inc'}
                        addCounterInputCallBack={props.addCounterInputCallBack}
                        disabled={buttonIncDisabled}/>
                <Button name={'reset'}
                        addCounterInputCallBack={props.addCounterInputCallBack}
                        disabled={buttonResetDisabled}/>
            </div>
        </div>
    );
};
