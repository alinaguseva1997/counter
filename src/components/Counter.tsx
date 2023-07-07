import React from 'react';
import s from './Counter.module.css'
import {Button} from "./Button/Button";
import {Display} from "./Display/display";

type CounterPropsType = {
    displayValue: number
    addCounterInputCallBack: (name: string) => void
    maxValue: number
    startValue: number
}

export const Counter = (props: CounterPropsType) => {


    return (
    <div className={s.counterWrapper}>
            <Display displayValue={props.displayValue} maxValue = {props.maxValue} startValue = {props.startValue}/>
            <div className={s.buttonWrapper}>
                <Button name={'inc'}
                        addCounterInputCallBack={props.addCounterInputCallBack}
                        disabled={props.displayValue === 5}/>
                <Button name={'reset'}
                        addCounterInputCallBack={props.addCounterInputCallBack}
                        disabled={props.displayValue === 0}/>
            </div>
        </div>
    );
};
