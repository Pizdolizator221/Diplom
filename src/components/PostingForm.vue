<template>
    <b-modal id='modal-posting' title="Форма постинга" hide-footer> 
            <div class="form-group">
                <label class="" for="title">Заголовок: </label>
                <input class="form-control" type="text" id="title" v-model="title">
            </div>

            <div class="form-group">
                <label class="" for="content">Текст: </label>
                <textarea class="form-control" id="content" v-model="content" cols="30" rows="10"></textarea>
            </div>

            <button class="btn btn-primary btn-block" @click="createThread"> Подтвердить </button>
        </b-modal>
</template>

<script>
import axios from 'axios';

export default ({
    name: 'PostingForm',
    data() {
        return {
            title: '',
            content: ''
        }
    },
    methods: {
        createThread: function() {
            this.$bvModal.hide('modal-posting')
            const user = localStorage.getItem('user');
            const username = JSON.parse(user).username;
            const thread = {
                authorUsername: username,
                title: this.title,
                contentText: this.content
            };
            axios.post("http://localhost:4000/api/threads/create", thread)
                .catch(error=> {
                    console.log(error.message);
                });
        }
    }
})
</script>
