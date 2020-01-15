<template>
    <div class="list-user">
        <!-- <p>List User Component</p> -->
        <user 
            v-for="user in listUser"
            v-bind:key="user.id"
            v-bind:user="user"
            v-on:deteleUser="deleteUser"
        />
        <!-- <user/>
        <user/>
        <user/>
        <user/> -->
        
    </div>
</template>

<script>
/*
App
    ListUser -> Không dc thay đổi arrListUser -> Truyền tiếp Event thêm 1 lần nữa ra App.vue
        User -> Truyền event thong báo cho ListUser
        User
        User
*/
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
    },
    methods: {
        deleteUser(data) {
            
            // console.log('deteleUser ListUser.vue', data);
            this.$emit('deleteUserEvent', data);
        }
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
