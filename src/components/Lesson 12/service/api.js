import axios from "axios";

export default class Api {
    api = axios.create({
        baseURL: 'http://localhost:5000',
    });

    getThoughts = async () => {
        const res = await this.api.get('/thoughts')
            .then(response => {
                return response.data;
            });
        return res
    }
    addThought = async (body) => {
        const res = await this.api.post('/thoughts', body)
            .then(response => {
                console.log(response);
            });
        return res
    }
    updateThought = async (body) => {
        const res = await this.api.put('/thoughts', body)
            .then(response => {
                console.log(response);
            });
        return res
    }
    deleteThought = async (body) => {
        console.log(body)
        const res = await this.api.delete(`/thoughts/${body}`)
            .then(response => {
                console.log(response);
            });
        return res
    }

}