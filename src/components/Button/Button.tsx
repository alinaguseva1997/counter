import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    name: string
    callBack: (name: string) => void
    disabled: boolean
}

export const Button = (props: ButtonPropsType) => {

    const onClickHandler = (name: string) => {
        props.callBack(name)
    }

    return (
            <button disabled={props.disabled} onClick={(e) => onClickHandler(props.name)} className={s.button}>{props.name}</button>
    );
};