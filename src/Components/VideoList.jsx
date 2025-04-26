// import React from 'react'
// import Video from './Video'

// const VideoList = (props) => {
//   return (
//     <div>
//       {props.videos.map((video, index) => (
//         <Video 
//           key={index}
//           videoId={video.videoId}
//           title={video.title}
//           description={video.description}
//         />
//       ))}
//     </div>
//   )
// }

// export default VideoList;


import React from 'react'
import Video from './Video'

const VideoList = (props) => {
  return (
    <div>
      {props.videos.map((video, index) => (
        <Video 
          key={index}
          videoId={video.videoId}
          title={video.title}
          description={video.description}
        />
      ))}
    </div>
  )
}

export default VideoList;
  