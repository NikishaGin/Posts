import React, {ChangeEvent, useEffect, useMemo, useState} from 'react';
import './App.css';
import {PostList} from "./components/PostList";
import {v1} from "uuid";
import {PostForm} from "./components/PostForm";
import {PostFilter} from "./components/PostFilter";
import {MyModal} from "./UI/myModal/MyModal";
import {MyButton} from "./UI/button/MyButton";
import axios from "axios";


export type PostType = {
    id: string;
    title: string;
    body: string;
};

function App() {

    const [posts, setPosts] = useState<PostType []>([])

    const [selectedSort, setSelectedSort] = useState<keyof PostType | ''>('')
    const [searchQuery, setSearchQuery] = useState('')

    const [modal, setModal] = useState(false)

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
        setModal(false)
    }

    const removePost = (id: string) => {
        setPosts(posts.filter((el) => el.id !== id))
    }

     useEffect (()=>{
         fetchPosts()
    },[])

    async function fetchPosts () {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: '30px'}} addNewPost={()=>setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm addNewPost={addNewPost}/>
            </MyModal>
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
