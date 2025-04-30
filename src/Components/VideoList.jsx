import React from 'react';

const VideoList = ({ videoRefernce, setSelectedVideo }) => {
    return (
        <div className="video-right">
            {videoRefernce.slice(1).map((video, index) => (
                <div 
                    className="video-container-one" 
                    key={index}
                    onClick={() => setSelectedVideo(video)} // Set the selected video on click
                    style={{ cursor: 'pointer' }} // Pointer cursor for clicking
                >
                    <div className="main-container">
                        <iframe
                            src={`https://www.youtube.com/embed/${video.id.videoId}`}
                            title={video.snippet.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <h1>{video.snippet.title}</h1>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default VideoList;
