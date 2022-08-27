import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import {SelectPosts} from "./SelectPosts";

type PostsFilterType = {
    filter: { sort: string; query: string; }
    setFilter: (filter: { sort: string; query: string; }) => void

}


export const PostsFilter = (props: PostsFilterType) => {

    const onChangeSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setFilter({...props.filter, query: e.currentTarget.value})
    }

    const onChange = (sort: string) => {
            props.setFilter({...props.filter, sort: sort})
    }

    return (
        <div>
            <hr/>
            <input value={props.filter.query}
                   type={'text'} placeholder={'Поиск'}
                   onChange={onChangeSearchHandler}/>
            <hr/>
            <div>
                <SelectPosts
                    value={props.filter.sort}
                    onChange={onChange}
                    sorting={'Сортировка'}
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'},
                    ]}/>
            </div>
        </div>
    );
};

