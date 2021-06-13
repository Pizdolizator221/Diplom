<template>
  <div class="container-fluid">
    <div class="container mt-5">
      <p class="text-center lead">
        <b-button v-b-modal.modal-posting class="btn btn-primary">Открыть форму постинга</b-button>
      </p>
    </div>

    <div>
      <div class="jumbotron" v-for="thread in threads" v-bind:key="thread._id">
        <h4 class="text-center">
          <button class="btn btn-link" @click="open(thread._id)"> {{thread.title}} </button>
        </h4>
        {{ thread.contentText }}
      </div>
    </div>


    
  </div>
</template>

<script>
  import axios from 'axios';
  // import threadsService from '../../services/threadsService';

  export default {
    name: 'Feed',
    data () {
      return {
        threads: null
      };
    },
    mounted () {
      axios.get('http://localhost:4000/api/threads').then(res => (this.threads = res.data));
    },
    methods: {
      open(_id) {
        this.$router.push(`/thread/${_id}`);
      }
    }
  }
</script>
