import React, {ChangeEvent, useState} from 'react';
import s from './Setting.module.css'
import {Button} from "../Button/Button";

export type SettingsPropsType = {
    addCounterInputCallBack: (name: string) => void
    setMaxValue: (value: number) => void
    setMinValue: (value: number) => void
    maxValue: number
    startValue: number
}

export const Setting = (props: SettingsPropsType) => {


    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+e.currentTarget.value)
    }
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(+e.currentTarget.value)
    }

    const disabledButton = props.maxValue === 0 && props.startValue === 0 || props.maxValue < 0 || props.startValue < 0 || props.maxValue === props.startValue || props.startValue > props.maxValue

    return (
        <div className={s.settingsWrapper}>
            <div className={s.settings}>
                <div className={s.maxValue}>
                    <span className={s.spanSetting}>max value:</span>
                    <input value={props.maxValue} onChange={onChangeMaxValueHandler} className={s.inputSetting} type={"number"}/>
                </div>
                <div className={s.minValue}>
                    <span className={s.spanSetting}>start value:</span>
                    <input value={props.startValue} onChange={onChangeMinValueHandler} className={s.inputSetting} type={"number"}/>
                </div>
            </div>
            <div className={s.buttonSetWrap}>
                <Button name={'set'} addCounterInputCallBack={props.addCounterInputCallBack} disabled={disabledButton}/>
            </div>
        </div>
    );
};

