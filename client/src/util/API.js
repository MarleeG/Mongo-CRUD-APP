import axios from 'axios';

export default {
    getTasks: function(){
        return axios.get('/api/all');
    },
    createTask: function(task){
        return axios.post('/api/all', task);
    },
    deleteTask: function(id){
        return axios.delete(`api/all/${id}`);
    },
    completeTask: function(id){
        return axios.put(`api/all/${id}`);
    }
}