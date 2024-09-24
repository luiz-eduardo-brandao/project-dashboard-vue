import axios from 'axios'

const HTTPClient = axios.create({
    baseURL: 'http://localhost:5262/v1/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default HTTPClient