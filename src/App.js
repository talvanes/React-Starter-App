import h from "react-hyperscript";
const {div, h1, img, audio, video} = require("hyperscript-helpers")(h);

import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

import pngImage from './assets/images/image.png';
import svgImage from './assets/images/image.svg';
import mp3Audio from './assets/audios/audio.mp3';
import mp4Video from './assets/videos/video.mp4';


class App extends Component {
    render() {
        return div({className: 'App'}, [
            h1("Hello, World!"),
            img({ src: pngImage, alt: "React Starter", title: "React Starter", height: 500 }),
            img({ src: svgImage, alt: "React Starter", title: "React Starter", height: 500 }),
            audio({ src: mp3Audio, controls: true }),
            video({ src: mp4Video, controls: true })
        ]);
    }
}

export default hot(module)(App);