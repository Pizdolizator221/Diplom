import api from './api';

export default {
    fetchThreads () {
        api().get('/api/threads')
    }
}