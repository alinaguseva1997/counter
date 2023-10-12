import React, {ChangeEvent} from 'react';
import s from './Setting.module.css'
import {Button} from "../Button/Button";
import {useDispatch} from "react-redux";
import {setMaxValueAC, setNewIsValueChangedAC, setStartValueAC} from "../../redux/reducer";

export type SettingsPropsType = {
    addNewSettingCallback: (name: string) => void
    maxValue: number
    startValue: number
    displayValue: number,
    incorrectValue: boolean
}

export const Setting = (props: SettingsPropsType) => {

    const dispatch = useDispatch()

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(+e.currentTarget.value))
        dispatch(setNewIsValueChangedAC(true))
    }

    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValueAC(+e.currentTarget.value))
        dispatch(setNewIsValueChangedAC(true))
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
                <Button name={'set'} callBack={props.addNewSettingCallback} disabled={disabledButtonSet}/>
            </div>
        </div>
    );
};

