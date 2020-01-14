<template>
    <header>
        <h1>{{ title }} <br> 
            <button v-on:click="changeTitleHeader"> Change title from Component App.vue</button>
        </h1>
    </header>
</template>

<script>
export default {
    name: 'com-header',
    props: {
        title: String,
    },
    data() {
        return {
            
        }
    },
    methods: {
        changeTitleHeader(e) {
            // Do not change props value in this file
            // -> Truyền sự kiện thông báo ra ngaoì
            // -> Kích hoạt sự kiện 'changeTitleEvent' trong CompHeader.vue
            // -> Khi kích hoạt function bên ngaoì App.vue nó sẽ chạy
            // -> Khi function đó được chạy -> Thay đổi dữ liệu
            
            console.log("Before active changeTitleEvent in CompHeader.vue");
            var data = {
                title: 'test -> data was emited by event'
            }
            this.$emit('changeTitleEvent', data);
            console.log("After actived changeTitleEvent in CompHeader.vue");
            // this.title = "Change title to something";
            console.log(this.title);
        }
    }
}
</script>

<style>

</style>
