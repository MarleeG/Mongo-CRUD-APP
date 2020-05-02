import axios from 'axios';

export default {
    getTasks: function(){
        return axios.get('/api/all');
    },
    createTask: function(task){
        return axios.post('/api/all', task);
    }
    
}