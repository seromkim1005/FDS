import Vue from 'vue';
import App from './App.vue';

// 글로벌 Vue 컴포넌트 등록
// import AppHeadline from './components/AppHeadline';

// 루트 Vue 인스턴스가 아닌,
// 컴포넌트 정의에서는 data는 반드시 함수여야 한다.
// 그리고 객체를 반환해야 한다.
const AppHeadline = {
  template: `
    <div class="component-root">
      <h3 class="title is-3">{{ headline }}</h3>
    </div>
  `,
  data(){
    return {
      headline: 'App Headline JS File'
    };
  }
};

// Vue.component('app-headline', AppHeadline);

// Vue {} 인스턴스와 VueComponent 객체의 차이

const vueIns = {
  template: '',
  methods: {},
  computed: {},
  watch:{},
  data: {}
};

const vueComp = {
  template: '',
  methods: {},
  computed: {},
  watch:{},
  data(){
    return {}
  }
};

new Vue(vueIns); // Vue Instance
Vue.component('temp', vueComp); // Vue Component

// Root Component
new Vue({
  el: '#app',
  // 로컬 Vue 컴포넌트 등록
  // components:{
  //   'app-headline': AppHeadline
  // },
  render: h => h(App)
});
