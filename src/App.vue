<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <PostingForm/>
  </div>
</template>

<style>
:root{
  --green: #42b983;
  --blue: #2c3e50;
}
</style>

<script>
  import Navbar from './components/Navbar'
  import PostingForm from './components/PostingForm.vue'

  export default {
    name: 'App',
    components: {
      'Navbar': Navbar,
      'PostingForm': PostingForm
    }
  }
</script>
