import React from 'react';
import Hls from 'hls.js';

import './Video.scss';

export class Video extends React.Component{
    constructor (props) {
        super(props);

        this.video = React.createRef();
    }

    componentDidMount() {
        if (Hls.isSupported()) {
            this.hls = new Hls();
            this.hls.loadSource(this.props.src);
            this.hls.attachMedia(this.video.current);
            console.log(this.video.current);
        }
    }

    render () {
        return <video ref={this.video} controls autoPlay={true}></video>
    }
}