import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from'./routes.js'
//Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes:Routes
});

//filters
Vue.filter('to-upper',(value)=>{
  return value.toUpperCase();
});

//custem directive
Vue.directive('rainbow',{  //difining custom directive
  bind(el){
    el.style.color="#"+Math.random().toString().slice(2,8); //creating a random colour
  }
});
new Vue({
  el:'#app',
  render: h => h(App),
  router:router,
})//.$mount('#app')
