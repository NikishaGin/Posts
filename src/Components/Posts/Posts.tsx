import React from 'react';
import {PostsItem} from "./PostsItem";

type PropsType = {
    id: number,
    title: string,
    description: string
}

type PostType = {
    post: PropsType []
    title: string
    removePosts:(id: number)=>void
}


export const Posts = (props: PostType) => {
    return (
        <div>
            <h2>{props.title}</h2>
            {props.post.map((el, index)=>
                <PostsItem key={el.id}
                           number={index + 1}
                           title={el.title}
                           description={el.description}
                           removePosts={()=>props.removePosts(el.id)}
                />
            )}
        </div>
    );
};

