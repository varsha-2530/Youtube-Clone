  import React, { useState } from 'react';
  import HeaderMain from './Components/HeaderMain';
  import Video from './Components/Video';
  import Youtube from './Api/Youtube'; 

  const App = () => {

    

    const [searchTerm, setSearchTerm] = useState('');
    const [videos, setVideos] = useState([]); 
    const handleTermSubmit = async (term) => {
      console.log("Search Term:", term);
      setSearchTerm(term);

      try {
        const response = await Youtube.get('search', {
          params: {
            part: 'snippet',
            maxResults: 5,
            key: 'AIzaSyCWFQ6R1WscOH5PC7a5D5ZuW0txsmrqemY',
            q: term
          }
        });

        //console.log(response.data.items);
        setVideos(response.data.items); 

      } catch (error) {
        console.error("Error fetching data from YouTube API:", error);
      }
    };

    return (
      <div>
        <HeaderMain onSearch={handleTermSubmit} />
        <Video videoRefernce={videos} /> {/* Passing the video reference */}
      </div>
    );
  };

  export default App;

