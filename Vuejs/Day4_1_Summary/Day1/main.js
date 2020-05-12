var VueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Iphone'
    },
    methods: {
        talk: function(text){
            return "Hello " + text;
        } 
    }
    // options
  });
console.log(VueInstance)

setTimeout(() =>{
    VueInstance.title = "Samsung"
}, 3000);