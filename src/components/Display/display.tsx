import React from 'react';
import s from "./Display.module.css";

type DisplayPropsType = {
    displayValue: number
    maxValue: number
    startValue: number
    incorrectValue: boolean
    enterValue: boolean
}

export const Display = (props: DisplayPropsType) => {

    const displayColorRed = props.displayValue === props.maxValue ? `${s.display} + ${s.displayRed}` : s.display
    const incorrectValue = props.incorrectValue ? s.incorrectValueStyle : s.display

    return (
        props.incorrectValue
            ? <div className={incorrectValue}>Incorrect value!</div>
            : props.enterValue
                ? <div className={`${s.display} + ${s.displayText}`}>enter values and press 'set'</div>
                : <div className={displayColorRed}>{props.displayValue}</div>
    );
};
