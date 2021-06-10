<template>
    <b-modal id='modal-auth' title="Авторизация" hide-footer>
            <div class="form-group">
                <label class="" for="email">Почта: </label>
                <input class="form-control" type="email" id="email" v-model="authEmail">
            </div>

            <div class="form-group">
                <label class="" for="password">Пароль: </label>
                <input class="form-control" type="password" id="password" v-model="authPassword">
            </div>

            <p class="lead text-center mt-3">
                <b-button @click="$bvModal.hide('modal-auth')" class="bg-white border-white">
                <router-link to="/register" > Зарегестрироваться </router-link>
                </b-button>
            </p>

            <button class="btn btn-primary btn-block" @click="auth()"> Войти </button>
        </b-modal>
</template>

<script>
export default ({
    data() {
        return{
            authEmail: '',
            authPassword: ''
        }
    },
    methods: {
        auth () {
            this.$bvModal.hide('modal-auth')
            const requestBody = {
                email: this.authEmail,
                password: this.authPassword
            }
            this.$store.dispatch('login', requestBody)
                .then(() => this.$router.push('/feed'))
                .catch(err => console.log(err));
        }
    }
})
</script>
