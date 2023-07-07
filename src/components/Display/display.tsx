import React from 'react';
import s from "./Display.module.css";

type DisplayPropsType = {
    displayValue: number
    maxValue: number
    startValue: number
}

export const Display = (props: DisplayPropsType) => {

    const enterValue = props.maxValue > 0 && props.startValue > 0 || props.startValue > 0 && props.maxValue === 0 || props.startValue === 0 && props.maxValue > 0
    const incorrectValue = props.maxValue < 0 || props.startValue < 0 || props.startValue < 0 && props.maxValue >= 0 || props.maxValue < 0 && props.startValue >= 0

    const displayColorRed = props.displayValue === 5 ? `${s.display} + ${s.displayRed}` : incorrectValue ? `${s.display} + ${s.displayText} +  ${s.displayRed}` : s.display

    return (
        enterValue
            ? <div className={`${s.display} + ${s.displayText}`}>enter values and press 'set'</div>
            : incorrectValue
                ? <div className={displayColorRed}>Incorrect value!</div>
                : <div className={displayColorRed}>{props.displayValue}</div>
    );
};
