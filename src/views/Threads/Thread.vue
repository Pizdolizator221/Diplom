<template>
    <fieldset class="jumbotron mt-5">
        <legend class="text-center display-4">
            {{thread.title}}
        </legend>

        <div class="container">
            {{thread.contentText}}
        </div>
    </fieldset>
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
        axios.get('http://localhost:4000/api/threads/find_by_id', {params: {_id: this._id}})
            .then(res => this.thread = res.data);
    }
})
</script>
