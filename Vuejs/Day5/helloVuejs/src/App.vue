<template>
  <div id="app">
    <!-- <CompHeader></CompHeader> -->
    <!-- <CompHeader/> -->
    <!-- <comp-header v-bind:titleHeader="title"/> -->
    <comp-header v-bind:title="title"/>
    <comp-header titleHeader="title"/>
    <list-user v-bind:listUser="listUser"/>
    <!-- <h1>{{ msg }}</h1> -->
    <comp-footer v-bind:title="title"/>
    
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
  }
}
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


</style>
