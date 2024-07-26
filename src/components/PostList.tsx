import React from 'react';
import {PostItem} from "./PostItem";
import {MySelect} from "../UI/select/MySelect";

type PropsType = {
    id: string,
    title: string,
    body: string,
}

type PropsPostType = {
    post: PropsType []
    title: string
    removePost: (id: string) => void
}


export const PostList = (props: PropsPostType) => {

    const removePostHandler = (id: string) => {
        props.removePost(id)
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                {props.title}
            </h1>
            {props.post.map((el, index) => {
                return <PostItem key={el.id}
                                 id={el.id}
                                 title={el.title}
                                 body={el.body}
                                 removePostHandler={() => removePostHandler(el.id)}
                />
            })}
        </div>
    );
};

