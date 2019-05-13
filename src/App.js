import React from 'react';
import './App.scss';
import store from './store'
import Posts from './components/posts'
import AppHeader from './layouts/Header'
import { Provider } from "react-redux";
import PostForm from "./components/postFrom";

function App() {
    return (
        <Provider store={ store }>
            <div className="App">
                <AppHeader/>
                <PostForm/>
                <Posts/>
            </div>
        </Provider>
    );
}

export default App;
