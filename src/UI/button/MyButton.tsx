import React from 'react';
// @ts-ignore
import classes from './MyButton.module.css'

type MyButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: string
    addNewPost: () => void
}

export const MyButton = (props: MyButtonProps) => {

    const onClickHandler = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.addNewPost()
    }

    return (
        <button {...props} className={classes.myBtn} onClick={onClickHandler}>
            {props.children}
        </button>
    );
};

