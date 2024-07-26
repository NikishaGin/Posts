import React, {ChangeEvent} from 'react';
import {MyInput} from "../UI/input/MyInput";
import {MySelect} from "../UI/select/MySelect";
import {PostType} from "../App";


type PropsType = {
    searchQuery: string
    setSearchQuery: (searchQuery: string) => void
    selectedSort: keyof PostType | '';
    setSelectedSort: (selectedSort: keyof PostType) => void
}


export const PostFilter = (props: PropsType) => {

    const onChangeSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
        props.setSearchQuery(e.currentTarget.value)
    }

    const onChangeSelectedSort = (e: ChangeEvent<HTMLSelectElement>) => {
        props.setSelectedSort(e.currentTarget.value as keyof PostType)
    }

    return (
        <div style={{marginTop: '20px'}}>
            <MyInput placeholder={'Поиск...'}
                     value={props.searchQuery}
                     onChange={onChangeSearchQuery}

            />
            <MySelect defaultValue={'Сортировка по'}
                      value={props.selectedSort}
                      onChange={onChangeSelectedSort}
                      options={[
                          {value: 'title', name: 'По названию'},
                          {value: 'body', name: 'По описанию'}
                      ]}
            />
        </div>
    );
};

