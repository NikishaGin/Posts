import React, {ChangeEvent, useState} from 'react';
import {MyInput} from "../UI/input/MyInput";
import {MyButton} from "../UI/button/MyButton";

type PropsType = {
    addNewPost: (title: string, body: string) => void
}


export const PostForm = (props: PropsType) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.currentTarget.value)
    }

    const addNewPostHandler = () => {
        props.addNewPost(title, description)
        setTitle('')
        setDescription('')
    }

    return (
        <form>
            <MyInput value={title}
                     type={'text'}
                     placeholder={"Название поста"}
                     onChange={onChangeTitle}
            />
            <MyInput value={description}
                     type={'text'}
                     placeholder={"Описание поста"}
                     onChange={onChangeDescription}
            />
            <MyButton addNewPost={addNewPostHandler}>
                Создать пост
            </MyButton>
        </form>
    );
};

