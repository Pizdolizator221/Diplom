import api from './api';

export default {
    fetchUsers () {
        return api().get('/api/users');
    },
    createUser (params) {
        return api().post('api/users/create', params);
    },
    findUser (params) {
        return api().get('api/users/find', params);
    }
}