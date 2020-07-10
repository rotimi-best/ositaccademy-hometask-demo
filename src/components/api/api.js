
import * as axios from 'axios';

export const reguestAPI = {

    getUsers(page = 1)  {
        return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${page}`)
    },

    getImages(pageNumber, pagrSize) {
        return axios.get(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${pagrSize}`)
    }
}