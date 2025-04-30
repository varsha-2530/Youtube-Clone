import React, { useState } from 'react';
import VideoList from './VideoList';

const Video = ({ videoRefernce }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    if (!videoRefernce || videoRefernce.length === 0) {
        return (
            <div className="front-page">
                <div className="front-card">
                    <h1>Welcome to MyTube 🎬</h1>
                    <p>Search for videos to start watching!</p>
                </div>
            </div>
        );
    }

    // Default video is the first video, if no video is selected
    const mainVideo = selectedVideo || videoRefernce[0];

    return (
        <div className="video-page-container">
            <div className='one'>
                <div className="video-left">
                    <iframe
                        className='main-video'
                        src={`https://www.youtube.com/embed/${mainVideo?.id?.videoId}?autoplay=1`} // Autoplay added
                        title={mainVideo?.snippet?.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <h1>{mainVideo?.snippet?.title}</h1>
                    <h5>{mainVideo?.snippet?.description}</h5>
                </div>
            </div>


            <VideoList videoRefernce={videoRefernce} setSelectedVideo={setSelectedVideo} />
        </div>
    );
};

export default Video;

