import React from 'react';

type optionsType = {
    value: string
    name: string
}

type PropsSelectPostsType = {
    sorting: string
    options: optionsType []
    value: string
    onChange:(sort: string)=> void
}

export const SelectPosts = (props: PropsSelectPostsType) => {
    debugger
    return (
        <div>
            <select value={props.value}
                    onChange={event => props.onChange(event.currentTarget.value) }
            >
                <option disabled={true} value={''}>{props.sorting}</option>
                {props.options.map(options => {
                    return <option key={options.value} value={options.value}>
                        {options.name}
                    </option>
                })}

            </select>
        </div>
    );
};

