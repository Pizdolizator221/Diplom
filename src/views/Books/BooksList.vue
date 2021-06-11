<template>
    <section class="container-fluid">
        <div class="container mt-5">
            <h1 class="display-4 text-center">Книги</h1>
            <p class="text-center lead">
                <b-button v-if="isAdmin" v-b-modal.modal-book class="btn btn-primary">Добавить книгу в список</b-button>
            </p>
        </div>
        
        <div>
            <div class="jumbotron" v-for="book in books" v-bind:key="book._id">
                <h4 class="text-center">
                    {{book.name}}
                </h4>
                <span class="text-primary">
                    - {{book.author}} ({{book.publishment}}, {{book.year}})
                </span>
            </div>
        </div>
    </section>
</template>

<script>
import booksService from '../../services/booksService';

export default ({
    data() {
        return {
            books: []
        }
    },
    computed: {
        isAdmin: function () {
            const user = localStorage.getItem('user');
            const role = JSON.parse(user).role;
            const result = role =='admin' ? true : false;
            return result;
        }
    },
    methods: {
        async getBooks() {
            await booksService.fetchBooks()
                .then(res => this.books = res.data);
        }
    },
    mounted() {
        this.getBooks();
    }
})
</script>
