import api from './api';

export default {
    fetchUsers () {
        return api().get('/api/users');
    },
    findUser (params) {
        return api().get('api/users', params);
    },
    signup (params) {
        return api().post('api/users/signup', params);
    },
    login (params) {
        return api().post('api/users/login', params);
    }
}