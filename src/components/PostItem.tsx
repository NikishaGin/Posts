import React from 'react';

type PostItemType = {
    id: string
    title: string,
    body: string,
    removePostHandler: () => void
}


export const PostItem = (props: PostItemType) => {
    return (
        <div className={"post"}>
            <div className={"post_content"}>
                <strong>{props.id}. {props.title}</strong>
                <div>{props.body}</div>
            </div>
            <div className={"post_btns"}>
                <button onClick={props.removePostHandler}>Удалить</button>
            </div>
        </div>
    );
};

