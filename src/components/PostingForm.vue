<template>
    <b-modal id='modal-posting' title="Авторизация" hide-footer>
            <div class="form-group">
                <label class="" for="username">Ползатель: </label>
                <input class="form-control" type="text" id="username" v-model="username">
            </div>
            
            <div class="form-group">
                <label class="" for="title">Заголовок: </label>
                <input class="form-control" type="text" id="title" v-model="title">
            </div>

            <div class="form-group">
                <label class="" for="content">Текст: </label>
                <textarea id="content" v-model="content" cols="30" rows="10"></textarea>
            </div>

            <p class="lead text-center mt-3">
                <b-button @click="$bvModal.hide('modal-posting')" class="bg-white border-white">
                <router-link to="/" > Закрыть форму постинга </router-link>
                </b-button>
            </p>

            <button class="btn btn-primary btn-block" @click="createThread"> Подтвердить </button>
        </b-modal>
</template>

<script>
import axios from 'axios';

export default ({
    name: 'PostingForm',
    data() {
        return {
            username: '',
            title: '',
            content: ''
        }
    },
    methods: {
        createThread: function() {
            const thread = {
                username: this.username,
                title: this.title,
                content: this.content
            };
            axios.post("http://localhost:4000/api/threads/create", thread)
                .catch(error=> {
                    console.log(error.message);
                });
        }
    }
})
</script>
