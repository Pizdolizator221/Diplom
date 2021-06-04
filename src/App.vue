<template>
  <div id="app">
    <Navbar/>
    <router-view/>
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

  export default {
    name: 'App',
    components: {
      'Navbar': Navbar
    }
  }
</script>
