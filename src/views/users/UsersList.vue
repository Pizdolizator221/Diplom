<template>
    <section>
        <div class="jumbotron" v-for="user in users" v-bind:key="user._id">
            <h3 class="text-center">
                {{user.lastName}} {{user.firstName}}, {{user.group}}
            </h3>
            <hr class="bg-dark">
            <h4 class="text-center">
                {{ user.username }} ({{user.email}})
            </h4>
        </div>
    </section>
</template>

<script>
import usersService from '../../services/usersService';

export default ({
    data() {
        return {
            users: []
        }
    },
    mounted () {
        this.getUsers();
    },
    methods: {
        async getUsers() {
            await usersService.fetchUsers()
                .then(res => this.users = res.data);
        }
    }
})
</script>
