import React from 'react';

type PostItemType = {
    index: number
    title: string,
    body: string,
    removePostHandler: () => void
}


export const PostItem = (props: PostItemType) => {
    return (
        <div className={"post"}>
            <div className={"post_content"}>
                <strong>{props.index}. {props.title}</strong>
                <div>{props.body}</div>
            </div>
            <div className={"post_btns"}>
                <button onClick={props.removePostHandler}>Удалить</button>
            </div>
        </div>
    );
};

