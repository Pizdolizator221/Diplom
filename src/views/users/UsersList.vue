<template>
    <section>
        <div class="jumbotron" v-for="user in users" v-bind:key="user._id">
            <h4 class="text-center">
                {{ user.username }}
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
