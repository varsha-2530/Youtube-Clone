// import React from 'react'

// const Video = (props) => {
//   return (
//     <div className="video-card">
//       <iframe 
//         src={`https://www.youtube.com/embed/${props.videoId}`} 
//         frameBorder="0" 
//         allowFullScreen
//         className="thumbnail"
//       ></iframe>
      
//       <div className="video-info">
//         <h2 className="video-title">{props.title}</h2>
//         <h6>{props.description}</h6>
//       </div>
//     </div>
//   )
// }

// export default Video;




import React from 'react'

const Video = (props) => {
  return (
    <div className="video-card">
      <iframe 
        src={`https://www.youtube.com/embed/${props.videoId}`} 
        frameBorder="0" 
        allowFullScreen
        className="thumbnail"
        title={props.title}
      ></iframe>
      
      <div className="video-info">
        <h2 className="video-title">{props.title}</h2>
        <h6>{props.description}</h6>
      </div>
    </div>
  )
}

export default Video;
