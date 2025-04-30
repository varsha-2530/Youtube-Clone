import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
})








// Api/Youtube.js


// import axios from 'axios';

// const KEY = 'AIzaSyCWFQ6R1WscOH5PC7a5D5ZuW0txsmrqemY'; // safe way

// export default axios.create({
//     baseURL: 'https://www.googleapis.com/youtube/v3',
//     params: {
//         part: 'snippet',
//         maxResults: 5,
//         key: KEY,
//     },
// });
