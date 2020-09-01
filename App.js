import React from 'react';

import './App.css';

import './components.css'
import './global.css'


export default function App() {
    return (

        <
        div >


        <
        nav className = "navbar" >
        <
        div class = "container" >
        <
        a href = "https://reactjs.org" > Hulk < /a> <
        a href = "https://reactjs.org" > Mavel < /a> <
        a href = "https://reactjs.org" > Venom < /a> <
        /div> <
        /nav> <
        header className = "header" >

        <
        div className = "container" >
        <
        h1 className = "title" > Marvel 's Fearless </h1> <
        p class = "subtitle" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.beatae molestias earum eveniet. <
        /p> <
        /div> <
        div className = "search-bar" >
        <
        input type = "search"
        name = ""
        value = ""
        placeholder = "search" / >
        <
        /div>

        <
        div className = "sample-wallpaper" >
        <
        article className = "wallpaper" >
        <
        img src = "./img/venom-1.jpg"
        alt = "Wallpaper #1"
        class = "wallpaper" / >
        <
        /article> <
        article class = "wallpaper" >
        <
        img src = "./img/hulk-1.jpg"
        alt = "Wallpaper #2"
        class = "wallpaper" / >
        <
        /article> <
        article class = "wallpaper" >
        <
        img src = "./img/venom-2.jpg"
        alt = "Wallpaper #3"
        class = "wallpaper" / >
        <
        /article> <
        /div> <
        /header> <
        /div> 







    )
};