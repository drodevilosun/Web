<template>
    <div class="list-user">
        <!-- <p>List User Component</p> -->
        <user 
            v-for="user in listUser"
            v-bind:key="user.id"
            v-bind:user="user"
        />
        <!-- <user/>
        <user/>
        <user/>
        <user/> -->
        
    </div>
</template>

<script>
import User from './User.vue';
export default {
    name: 'list-user',
    props: {
        listUser: {
            type: Array,
            default: []
        }
    },
    data() {
        return {

        }
    },
    components: {
        User
    }
}
</script>

<style>
    .list-user {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .list-user .user {
        padding: 30px;

        margin-bottom: 30px;
        border: 1px solid #333;
        width: calc(33.333$ - 20px)
    }

</style>
