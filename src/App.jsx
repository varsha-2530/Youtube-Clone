// import React from 'react'
// import HeaderMain from './Components/HeaderMain'
// import Video from './Components/Video'

// const App = () => {
//   return (
//     <div>
//       <HeaderMain/>
//       <Video/>
//     </div>
//   )
// }
  
// export default App
import React, { useState, useEffect } from 'react';
import VideoList from './Components/VideoList';
import HeaderMain from './Components/HeaderMain';

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const API_KEY = 'AIzaSyDeMC6OsV3zNOOIqpadO9BOPVlhUFOaU0E';
    const searchQuery = 'latest songs'; 

    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=${API_KEY}&maxResults=10&type=video`);
    const data = await response.json();
    console.log(data);

    const videosData = data.items.map(item => ({
      videoId: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
    }));

    setVideos(videosData);
  };

  return (
    <div>
      <HeaderMain />
      <h1>YouTube Video List</h1>
      <VideoList videos={videos} />
    </div>
  );
};

export default App;
