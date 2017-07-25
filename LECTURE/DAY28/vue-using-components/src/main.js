import Vue from 'vue';
import App from './App.vue';

// 글로벌 Vue 컴포넌트 등록
// import AppHeadline from './components/AppHeadline';
// Vue.component('app-headline', AppHeadline);

// Root Component
new Vue({
  el: '#app',
  // 로컬 Vue 컴포넌트 등록
  // components:{
  //   'app-headline': AppHeadline
  // },
  render: h => h(App)
});
