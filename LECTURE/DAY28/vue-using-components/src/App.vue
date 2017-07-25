<template lang="pug">
  #app.container(v-cloak)
    .columns
      .column.is-6.is-offset-3
        app-headline
          div hi, vue js
        //- h1.title.is-3(v-text="subject")
</template>

<script>
// Vue CLI 환경 === Node.js 환경(Back-End)
// 필요한 개발 의존 모듈은 로드 후에 사용 가능
// import Vue from 'vue';
import AppHeadline from './components/AppHeadline.vue';
// import AppHeadline from './components/AppHeadline';

export default {
  name: 'app',
  components: {
    AppHeadline
  },
  mounted () {
    // 글로벌 Vue 컴포넌트가 등록되어 있는지 검증
    // console.log(!!Vue.component('app-headline'));
    // let AppHeadline = Vue.component('app-headline');
    // console.log(typeof appHeadline);
    // new AppHeadline();
  },
  data () {
    return {
      subject: 'Vue 컴포넌트 학습'
    }
  }
}
</script>

<style lang="sass">
[v-cloak]
  display: none

html
  font-size: 100%
  background: #fff
body
  margin: 0
#app
  margin-top: 50px
</style>
