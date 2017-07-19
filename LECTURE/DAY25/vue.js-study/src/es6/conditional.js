/*! main.js @ 2017, yamoo9.net */
((global)=>{
  'use strict';

  // 마운트 엘리먼트 설정
  // 데이터 설정
  // true or false 값을 가진 데이터 속성을 추가
  let bootstrap = {
    el: '#app',
    data: {
      is_login: false,
      user: {
        name: '김민기',
        id: '@mk.kim'
      }
    },
    methods: {
      changeMode() {
        this.is_login = !this.is_login;
      }
    }
  };

  // 뷰 객체 생성
  global.app = new Vue(bootstrap);

})(window);
