import React from 'react';
// @ts-ignore
import style from './Posts.module.css'
type PostsItemType = {
    title: string
    description: string
    number: number
    removePosts:()=>void
}

export const PostsItem = (props: PostsItemType) => {
    return (
        <div className={style.title}>
            <div>{props.number}. {props.title}</div>
            <div>{props.description}</div>
            <button onClick={props.removePosts}>Удалить</button>
        </div>
    );
};

