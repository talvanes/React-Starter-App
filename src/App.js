import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

import img from './assets/images/image.png';
import svg from './assets/images/image.svg';
import audio from './assets/audios/audio.mp3';
import video from './assets/videos/video.mp4';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello, World!</h1>
                <img src={img} alt="React Starter" title="React Starter" height="500"/>
                <img src={svg} alt="React Starter" title="React Starter" height="500"/>
                <audio src={audio} controls></audio>
                <video src={video} controls></video>
            </div>
        );
    }
}

export default hot(module)(App);