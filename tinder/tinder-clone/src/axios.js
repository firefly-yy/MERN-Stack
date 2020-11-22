import axios from 'axios' 

const instance = axios.create({
    baseURL: 'https://sakura-tinder.herokuapp.com/',
})

export default instance;