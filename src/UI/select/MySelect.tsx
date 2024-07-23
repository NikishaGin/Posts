import React, {ChangeEvent} from 'react';
import {PostType} from "../../App";

type PropsOptionsType = {
    value: string
    name: string
}

type PropsType = {
    defaultValue: string
    value: keyof PostType | '';
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    options: PropsOptionsType []
}

export const MySelect = (props: PropsType) => {
    return (
        <select
            value={props.value}
            onChange={props.onChange}
        >
            <option value={''}>{props.defaultValue}</option>
            {props.options.map((el) => {
                return <option key={el.value} value={el.value}>
                    {el.name}
                </option>
            })}
        </select>
    );
};

