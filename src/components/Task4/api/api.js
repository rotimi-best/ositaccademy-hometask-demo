
import * as axios from 'axios';

export const usersAPI = {

    getUsers(page = 1)  {
        return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${page}`)// baseURL уже подставился самостоятельно перед /users
            .then(response => response)
    }
}