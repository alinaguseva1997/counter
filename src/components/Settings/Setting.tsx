import React, {ChangeEvent} from 'react';
import s from './Setting.module.css'
import {Button} from "../Button/Button";

export type SettingsPropsType = {
    addCounterInputCallBack: (name: string) => void
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    maxValue: number
    startValue: number
    displayValue: number,
    setIsValuesChanged:(newStatus:boolean) => void
    incorrectValue: boolean
}

export const Setting = (props: SettingsPropsType) => {

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+e.currentTarget.value)
        props.setIsValuesChanged(true)
    }

    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(+e.currentTarget.value)
        props.setIsValuesChanged(true)
    }

    const disabledButtonSet = props.maxValue === 0 && props.startValue === 0 || props.maxValue < 0 || props.startValue < 0 || props.maxValue === props.startValue || props.startValue > props.maxValue || props.displayValue === props.maxValue

    const inputError = props.incorrectValue ? s.inputError : s.inputSetting

    return (
        <div className={s.settingsWrapper}>
            <div className={s.settings}>
                <div className={s.maxValue}>
                    <span className={s.spanSetting}>max value:</span>
                    <input value={props.maxValue} onChange={onChangeMaxValueHandler} className={inputError} type={"number"}/>
                </div>
                <div className={s.minValue}>
                    <span className={s.spanSetting}>start value:</span>
                    <input value={props.startValue} onChange={onChangeMinValueHandler} className={inputError} type={"number"}/>
                </div>
            </div>
            <div className={s.buttonSetWrap}>
                <Button name={'set'} addCounterInputCallBack={props.addCounterInputCallBack} disabled={disabledButtonSet}/>
            </div>
        </div>
    );
};

