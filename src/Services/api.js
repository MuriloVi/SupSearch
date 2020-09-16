import axios from 'axios'

const key = '3329979883783711'


const api = axios.create({
    baseURL:`https://superheroapi.com/api.php/${key}`,
    
})

export default api;