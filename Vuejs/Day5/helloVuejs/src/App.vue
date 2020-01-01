<template>
  <div id="app">
    <!-- <CompHeader></CompHeader> -->
    <!-- <CompHeader/> -->
    <comp-header/>
    <list-user/>
    <h1>{{ msg }}</h1>
    <comp-footer/>
    
  </div>
</template>

<script>
/* 
App
  Header
  ListProduct
    Product
    Product
    Product
    Product
    Product
  Footer
*/
import CompHeader from './components/ComponentHeader.vue';
import CompFooter from './components/ComponenentFooter';
import ListUser from './components/ListUser.vue';
export default {
  name: 'app',
  data () {
    return {
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
