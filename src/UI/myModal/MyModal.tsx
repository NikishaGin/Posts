import React from 'react';
// @ts-ignore
import classes from './MyModal.module.css'


type MyModalProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: any
    visible: boolean
    setVisible: ( visible: boolean) => void
}

export const MyModal = (props:MyModalProps) => {

    const rootClasses = [classes.myModal]
    if (props.visible) {
        rootClasses.push(classes.active)
    }

    const onClickHandler = () => {
        props.setVisible(false)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={onClickHandler}>
            <div className={classes.myModalContent} onClick={(e)=> e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
};

