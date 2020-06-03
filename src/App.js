import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import h from "react-hyperscript";

import img from './assets/images/image.png';
import svg from './assets/images/image.svg';
import audio from './assets/audios/audio.mp3';
import video from './assets/videos/video.mp4';


class App extends Component {
    render() {
        return h('div', {className: 'App'}, [
            h('h1', "Hello, World!"),
            h('img', { src: img, alt: "React Starter", title: "React Starter", height: 500 }),
            h('img', { src: svg, alt: "React Starter", title: "React Starter", height: 500 }),
            h('audio', { src: audio, controls: true }),
            h('video', { src: video, controls: true })
        ]);
    }
}

export default hot(module)(App);