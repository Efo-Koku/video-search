import axios from 'axios';

const KEY = 'AIzaSyDjNGXA11NXk0E4YbcZG_h-vnrwCU6cvU4';

export default axios.create({ 
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
}
});
