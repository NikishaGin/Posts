import React, {ChangeEvent, useState} from 'react';
import {logDOM} from "@testing-library/react";

type PropsCreatePostsType = {
    createPosts:(newPosts: any)=>void
}

export const PostsForm = (props: PropsCreatePostsType) => {

    const [post, setPost] = useState({title: '', description: ''})

    const titleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setPost({...post, title: e.currentTarget.value})
    }

    const descriptionInput = (e: ChangeEvent<HTMLInputElement>) => {
        setPost({...post, description: e.currentTarget.value})
    }

    const add = (title: string, description: string ) => {
        const newPost = {post, id: Date.now(), title: title, description: description }
        props.createPosts(newPost)
        setPost({title: '', description: ''})
    }


    return (
        <div>
            <input value={post.title} onChange={titleInput}/>
            <input value={post.description} onChange={descriptionInput}/>
            <button onClick={()=>add(post.title, post.description)}>Добавить пост</button>
        </div>
    );
};

