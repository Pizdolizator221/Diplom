import api from './api';

export default {
    fetchBooks() {
        return api().get('/api/books');
    },
    findBooks(params) {
        return api().get('/api/books/search', params);
    },
    addBook(params) {
        return api().post('/api/books/add', params);
    }
}