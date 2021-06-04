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
                    <router-link class="nav-link" to="/">Главная</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link class="nav-link" to="/about">Информация</router-link>
                    </li>
                    <li class="nav-item ml-4">
                    <b-button v-b-modal.modal-auth>Вход</b-button>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

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
                <router-link to="/" > Зарегестрироваться </router-link>
                </b-button>
            </p>

            <button class="btn btn-primary btn-block" @click="auth()"> Войти </button>
        </b-modal>
    </div>
</template>