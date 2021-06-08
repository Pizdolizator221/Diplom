<template>
    <fieldset class="jumbotron mt-5">
        <legend class="text-center display-4">Регистрация</legend>
        <div class="container">

            <div class="mb-5">
                <form>
                    <div class="row mb-3">
                        <label class="col-lg-3" for="username">Имя пользователя</label>
                        <input required class="col-lg-6" type="text" v-model="username" id="username" placeholder="Имя пользователя">
                    </div>

                    <div class="row mb-3">
                        <label class="col-lg-3" for="firstName">Имя</label>
                        <input required class="col-lg-6" type="text" v-model="firstName" id="firstName" placeholder="Имя">
                        
                        <p class="col-md-3 text-danger" v-if="firstNameError">
                            * Введите корректные данные
                        </p>
                    </div>

                    <div class="row mb-3">
                        <label class="col-lg-3" for="lastName">Фамилия</label>
                        <input required class="col-lg-6" type="text" v-model="lastName" id="lastName" placeholder="Фамилия">

                        <p class="col-md-3 text-danger" v-if="lastNameError">
                            * Введите корректные данные
                        </p>
                    </div>

                    <div class="row mb-3">
                        <label for="group" class="col-lg-3">Группа</label>
                        <select class="form-control col-lg-6" id="group" v-model="group">
                            <option selected value="И-17-1">И-17-1</option>
                            <option value="И-18-1">И-18-1</option>
                            <option value="И-19-1">И-19-1</option>
                            <option value="И-20-1">И-20-1</option>
                        </select>

                    </div>

                    <div class="row mb-3">
                        <label class="col-lg-3" for="email">Почта</label>
                        <input required class="col-lg-6" type="text" v-model="email" id="email" placeholder="Адрес электронной почты">

                        <p class="col-md-3 text-danger" v-if="emailError">
                            * Введите корректный адрес электронной почты
                        </p>
                    </div>

                    <div class="row mb-3">
                        <label class="col-lg-3" for="password">Пароль</label>
                        <input required class="col-lg-6" type="password" v-model="password" id="password" placeholder="Введите пароль">

                        <p class="col-md-3 text-danger" v-if="passwordError">
                            * Введите пароль
                        </p>
                    </div>

                    <div class="row mb-3">
                        <label class="col-lg-3" for="passwordRepeat">Повторите пароль</label>
                        <input required class="col-lg-6" type="password" v-model="passwordRepeat" id="passwordRepeat" placeholder="Повторите пароль">

                        <p class="col-md-3 text-danger" v-if="passwordError">
                            * Пароли должны совпадать
                        </p>
                    </div>

                    <div class="row mb-3">
                        <label class="col-lg-3" for="phoneNumber">Номер телефона</label>
                        <input required class="col-lg-6" type="text" v-model="phoneNumber" id="phoneNumber" placeholder="Введите номер телефона">

                        <p class="col-md-3 text-danger" v-if="phoneNumberError">
                            * Введите корректный номер телефона
                        </p>
                    </div>
                </form>
            </div>
            <button class="btn btn-primary ml-auto mr-auto d-block" @click="createUser()">Подтвердить</button>
        </div>
    </fieldset>
</template>

<script>
import usersService from '../../services/usersService';

const nameRegex = /[А-Яа-я]/;
const emailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
const phoneRegex = /^((\+7|7|8)+([0-9]){10})$/;

export default ({
    data() {
        return {
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordRepeat: '',
            phoneNumber: ''
        }
    }, 
    computed: {
        firstNameError() { return (!nameRegex.test(this.firstName)) },
        lastNameError() { return (!nameRegex.test(this.lastName)) },
        emailError() { return (!emailRegex.test(this.email)) },
        passwordError() {
            if (this.password && this.passwordRepeat) {
                if (this.password === this.passwordRepeat) {
                    return false
                } else {
                    return true
                }
            } else return true
        },
        phoneNumberError() { return (!phoneRegex.test(this.phoneNumber)) }
    },
    methods: {
        async createUser () {
            if(this.firstNameError || this.lastNameError || this.emailError || this.passwordError || this.phoneNumberError) return alert ('Заполните форму регистрации');

            const requestBody = {
                username: this.username,
                firstName: this.firstName,
                lastName: this.lastName,
                group: this.group,
                email: this.email,
                password: this.password,
                phoneNumber: this.phoneNumber
            };

            await usersService.createUser(requestBody);
            this.$router.push('/');
        }
    }
})
</script>
