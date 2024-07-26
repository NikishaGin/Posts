import React, {ChangeEvent, useEffect, useMemo, useState} from 'react';
import './App.css';
import {PostList} from "./components/PostList";
import {v1} from "uuid";
import {PostForm} from "./components/PostForm";
import {PostFilter} from "./components/PostFilter";
import {MyModal} from "./UI/myModal/MyModal";
import {MyButton} from "./UI/button/MyButton";
import axios from "axios";
import {getPageCount, getPagesArray} from "./utils/pages";
import {Pagination} from "./components/Pagination";


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
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page])

    async function fetchPosts(limit: number, page: number) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    }

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

    const changePage = (page: number) => {
        setPage(page)
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: '30px'}} addNewPost={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm addNewPost={addNewPost}/>
            </MyModal>
            <PostFilter searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        selectedSort={selectedSort}
                        setSelectedSort={setSelectedSort}
            />
            <Pagination totalPages={totalPages} page={page} changePage={changePage}/>
            <PostList post={sortedAndSearchedPosts} title={'Список постов'} removePost={removePost}/>
        </div>
    );
}

export default App;
