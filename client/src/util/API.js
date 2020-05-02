import axios from 'axios';

export default {
    getTasks: function(){
        return axios.get('/api/all');
    }
}