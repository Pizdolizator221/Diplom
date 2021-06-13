<template>
  <div class="container-fluid">
    <div class="container mt-5">
      <h1 class="display-4 text-center">АПТ</h1>
      <div class="text-center lead">
        Добро пожаловать <br>

        <div v-if="isLoggedIn" class="">
          <router-link class="btn btn-primary"  to="/feed">Перейти к постам</router-link>
          <br>
        </div>
        <div class="" v-else>
          <router-link class="btn btn-primary"  to="/register">Зарегистрироваться</router-link>
          <br>
        </div>
        <img src="http://localhost:4000/tehan.jpg" alt="." class="border border-primary rounded mt-3">
      </div>
    </div>  
  </div>
</template>

<script>
  export default {
    name: 'Home',
    computed: {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    }
  }
</script>
