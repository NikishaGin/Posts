import React, {ChangeEvent, useMemo, useState} from 'react';
import './App.css';
import {PostList} from "./components/PostList";
import {v1} from "uuid";
import {PostForm} from "./components/PostForm";
import {PostFilter} from "./components/PostFilter";


export type PostType = {
    title: string;
    body: string;
};

function App() {

    const [posts, setPosts] = useState([{id: v1(), title: 'JavaScript', body: 'Description'},])

    const [selectedSort, setSelectedSort] = useState<keyof PostType | ''>('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortedPost = useMemo(() => {
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    }, [selectedSort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPost.filter((el) => el.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedPost])

    const addNewPost = (title: string, description: string) => {
        const newPost = {id: v1(), title: title, body: description}
        setPosts([newPost, ...posts])
    }

    const removePost = (id: string) => {
        setPosts(posts.filter((el) => el.id !== id))
    }

    return (
        <div className="App">
            <PostForm addNewPost={addNewPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        selectedSort={selectedSort}
                        setSelectedSort={setSelectedSort}
            />
            <PostList post={sortedAndSearchedPosts} title={'Список постов'} removePost={removePost}/>
        </div>
    );
}

export default App;
