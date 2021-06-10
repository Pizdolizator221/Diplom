<template>
    <section>
        <fieldset class="mt-5">
            <legend class="text-center display-4">
                <router-link to="/feed">
                    <font-awesome-icon icon="arrow-left" />
                </router-link>
                {{thread.title}}
                
                <font-awesome-icon v-if="isYourThread" icon="star" />
            </legend>

            <div class="container">
                {{thread.contentText}}
                <br>
                <span class="text-primary">
                    - {{thread.authorUsername}}
                </span>
            </div>
            <p class="text-center">
                <br>
                <br>
                <b-button v-b-modal.modal-comment class="btn btn-primary text-center">Написать комментарий</b-button>
            </p>
        </fieldset>

        <div class="jumbotron" v-for="(comment, index) in thread.comments" v-bind:key="index">
            <h4 class="text-primary">
                {{comment.authorUsername}}
            </h4>
            <p>
                {{comment.contentText}}
            </p>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
// import threadsService from '../../services/threadsService';

export default ({
    data() {
        return{
            thread: {}
        }
    },
    props: {
        _id: {
            type: String,
            required: true
        }
    },
    mounted() {
        this.getThread();
    },
    computed: {
        isYourThread() {
            const user = localStorage.getItem('user');
            const username = JSON.parse(user).username;
            return username == this.thread.authorUsername ? true : false
        }
    },
    methods: {
        getThread() {
            axios.get('http://localhost:4000/api/threads/find_by_id', {params: {_id: this._id}})
                .then(res => this.thread = res.data);
        }
    }
})
</script>
