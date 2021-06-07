<template>
  <div class="container-fluid">
    <div class="container mt-5">
      <h1 class="display-4 text-center">Main page</h1>
      <p class="text-center lead">
        aboba <br>
        aboba <br>
        amogus <br>
      </p>
    </div>

    <section>
      <div class="jumbotron" v-for="thread in threads" v-bind:key="thread._id">
        {{ thread.contentText }}
      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Home',
    data () {
      return {
        threads: null
      };
    },
    mounted () {
      axios.get('http://localhost:4000/api/threads').then(res => (this.threads = res.data));
    }
  }
</script>
