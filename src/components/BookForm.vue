<template>
    <b-modal id='modal-book' title="Добавление книги" hide-footer> 

        <div class="form-group">
            <label class="" for="author">Автор: </label>
            <input class="form-control" type="text" id="author" v-model="author">
        </div>

        <div class="form-group">
            <label class="" for="name">Название книги: </label>
            <input class="form-control" type="text" id="name" v-model="name">
        </div>

        <div class="form-group">
            <label class="" for="pagesAmount">Кол-во страниц: </label>
            <input class="form-control" type="text" id="pagesAmount" v-model="pagesAmount">
        </div>

        <div class="form-group">
            <label class="" for="publishment">Издательство: </label>
            <input class="form-control" type="text" id="publishment" v-model="publishment">
        </div>

        <div class="form-group">
            <label class="" for="year">Год выпуска: </label>
            <input class="form-control" type="text" id="year" v-model="year">
        </div>

        <button class="btn btn-primary btn-block" @click="addBook()"> Подтвердить </button>
    </b-modal>
</template>

<script>
import booksService from '../services/booksService';

export default ({
    data() {
        return {
            author: '',
            name: '',
            pagesAmount: '',
            publishment: '',
            year: ''
        }
    },
    methods: {
        addBook() {
            this.$bvModal.hide('modal-book');
            
            const book = {
                author: this.author,
                name: this.name,
                pagesAmount: this.pagesAmount,
                publishment: this.publishment,
                year: this.year
            };
            booksService.addBook(book);
        }
    }
})
</script>