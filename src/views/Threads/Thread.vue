<template>
    <h1> {{thread.title}} </h1>
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
