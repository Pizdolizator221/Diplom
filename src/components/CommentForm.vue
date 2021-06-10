<template>
    <b-modal id='modal-comment' title="Форма постинга" hide-footer> 

        <div class="form-group">
            <label class="" for="content">Текст: </label>
            <textarea class="form-control" id="content" v-model="content" cols="30" rows="10"></textarea>
        </div>

        <button class="btn btn-primary btn-block" @click="reply()"> Подтвердить </button>
    </b-modal>
</template>

<script>
import axios from 'axios';

export default ({
    data() {
        return {
            content: ''
        }
    },
    methods: {
        reply() {
            this.$bvModal.hide('modal-comment')
            const user = localStorage.getItem('user');
            const username = JSON.parse(user).username;
            const thread = {
                threadId: this.$route.params._id,
                authorUsername: username,
                contentText: this.content
            };
            axios.post("http://localhost:4000/api/threads/reply", thread)
                .catch(error=> {
                    console.log(error.message);
                });
        }
    }
})
</script>
