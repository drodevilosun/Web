<template>
  <div id="app">
    <!-- <CompHeader></CompHeader> -->
    <!-- <CompHeader/> -->
    <!-- <comp-header v-bind:titleHeader="title"/> -->
    <div class="container">
      <button v-on:click="title = 'Program VueJs'"> Change title from Component App.vue </button>
    
      <comp-header 
        v-bind:title="title"
        v-on:changeTitleEvent="handleChangeTitle"
      />
      <!-- <comp-header titleHeader="title"/> -->
      <list-user v-bind:listUser="listUser"/>
      <!-- <h1>{{ msg }}</h1> -->
      <comp-footer v-bind:title="title"/>
    </div>
    
  </div>
</template>

<script>
/* 
App ({title, listUser[])
  ComHeader (title)
  ListUser  (listUser[])
    User  (user - object)
    User
  ComFooter (title)
  -> props -> pass data from base component to parent component
    ->Syntaxs are the same with property -> Bind property
      -> Use v-bind: 
  -> App.vue manage all
*/
import CompHeader from './components/ComponentHeader.vue';
import CompFooter from './components/ComponenentFooter.vue';
import ListUser from './components/ListUser.vue';
export default {
  name: 'app',
  data () {
    return {
      title: 'Hello VueJs - Header ...',
      listUser: [
        {id: 100, email: 'test1@gmail1.com', active: true},
        {id: 101, email: 'test1@gmail2.com', active: false},
        {id: 102, email: 'test1@gmail3.com', active: true},
        {id: 103, email: 'test1@gmail4.com', active: false},
        {id: 104, email: 'test1@gmail5.com', active: false},
        {id: 105, email: 'test1@gmail6.com', active: true},
        {id: 106, email: 'test1@gmail7.com', active: true},
      ]
    }
  },
  components: {
    CompHeader,
    CompFooter,
    ListUser
  },
  methods: {
    handleChangeTitle(data) {
      // this.title = 'Program VueJs! -> Header change';
      this.title = data.title;
      console.log('handleChangeTitle is called after activated successfully App.vue', data);
    }
  }
}
/*
Props Down -> transfer data from base to parent
Props Down -> truyền dữ liệu từ cha vào con -> Thằng con chỉ được xài, không được phép thay đổi
Event Up -> truyền thông điệp (sự kiện) thông báo Component cha biết là nó muốn thay đổi dữ liệu -> Nhiệm vu của Component cha là nhận được thông báo và tiến hành thay đổi data
  -> Custom event in VueJs

  click -> Sự kiện có sẵn trong VueJs
  v-on:click="changeTitle"
    'click' -> Tên của sự kiện
    'changeTitle' -> Hàm xử lý khi sự kiện được kích hoạt (Khi người dúng click) 
*/
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  max-width:  1170px;
  margin: 0 auto;
  padding: 0 15px;
  min-height: 3000px;
}


</style>
