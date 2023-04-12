import axios from 'axios';

export default axios.create({
    // baseURL: 'https://timedoctor.fly.dev'
    baseURL: 'http://localhost:3500'
});