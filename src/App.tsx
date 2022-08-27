import React, {ChangeEvent, useMemo, useState} from 'react';
import './App.css';
import {Posts} from "./Components/Posts/Posts";
import {PostsForm} from "./Components/Posts/PostsForm";
import {PostsFilter} from "./Components/Posts/PostsFilter";

export type Type = {
    id: number,
    title: string,
    description: string
}

function App() {

    const [posts, setPosts] = useState<Type []>([
        {id: 1, title: 'JS', description: 'JavaScript - язык программирования'},
        {id: 2, title: 'React', description: 'Библиотека для создания пользоваткльских интерфейсов'},
        {id: 3, title: 'Html&Css', description: 'Язык разметки'},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})

    let sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a.title.localeCompare(b.title))
        } else return posts
    }, [filter.sort, posts])


    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])


    const createPosts = (newPosts: { id: number, title: string, description: string }) => {
        setPosts([...posts, newPosts])
    }

    const removePosts = (id: number) => {
        setPosts(posts.filter(el => el.id !== id))
    }

    return (
        <div className="App">
            <PostsForm createPosts={createPosts}/>
            <PostsFilter filter={filter} setFilter={setFilter} />
            <div>
                {posts.length !== 0
                    ? <Posts title={'Список постов'} post={sortedAndSearchPosts} removePosts={removePosts}/>
                    : <h1>Посты не найдены!</h1>
                }
            </div>
        </div>
    );
}

export default App;
