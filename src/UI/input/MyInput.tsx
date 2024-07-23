import React from 'react';
// @ts-ignore
import classes from './MyInput.module.css'

type MyInputProps = React.InputHTMLAttributes<HTMLInputElement> & {}

export const MyInput = (props: MyInputProps) => {
    return (
        <input className={classes.myInput} {...props}  />
    );
};

