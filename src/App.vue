<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <PostingForm/>
    <CommentForm />
    <BookForm />
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
  import CommentForm from './components/CommentForm.vue'
  import BookForm from './components/BookForm.vue'

  export default {
    name: 'App',
    components: {
      'Navbar': Navbar,
      'PostingForm': PostingForm,
      'CommentForm': CommentForm,
      'BookForm': BookForm
    }
  }
</script>
