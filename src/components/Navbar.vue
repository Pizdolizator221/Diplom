<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <router-link class="navbar-brand" to="/"> АПТ </router-link>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li v-if="isAdmin" class="nav-item">
                        <router-link class="nav-link" to="/users">Пользователи</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Главная</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">Информация</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link v-if="isLoggedIn" class="nav-link" to="/feed">Feed</router-link>
                    </li>
                    <li class="nav-item ml-4" v-if="!isLoggedIn">
                        <b-button v-b-modal.modal-auth>Вход</b-button>
                    </li>
                    <li class="nav-item ml-4" v-else>
                        <b-button @click="logout()">Выход</b-button>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

        <LoginModal/>
    </div>
</template>

<script>
import LoginModal from './LoginModal.vue';

export default ({
    components: {
        'LoginModal': LoginModal
    },
    computed: {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn},
      isAdmin: function () {
            const user = localStorage.getItem('user');
            const role = JSON.parse(user).role;
            const roleCheck = role =='admin' ? true : false;
            const result = roleCheck && this.isLoggedIn ? true : false
            return result;
        }
    },
    methods: {
        logout () {
        this.$store.dispatch('logout')
          .then(() => this.$router.push('/register'));
      }
    }
})
</script>
