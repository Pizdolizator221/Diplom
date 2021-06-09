import api from './api';

export default {
    fetchUsers () {
        return api().get('/api/users');
    },
    signup (params) {
        return api().post('api/users/signup', params);
    },
    login (params) {
        return api().post('api/users/login', params);
    }
}