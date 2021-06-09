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
                    <li class="nav-item">
                        <form method="get" action="http://localhost:3000/api/users">
                            <input type="text" name="username" class="form-control mr-sm-2" placeholder="Поиск">
                        </form>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Главная</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">Информация</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/feed">Feed</router-link>
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
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
        logout () {
        this.$store.dispatch('logout')
          .then(() => this.$router.push('/register'));
      }
    }
})
</script>
