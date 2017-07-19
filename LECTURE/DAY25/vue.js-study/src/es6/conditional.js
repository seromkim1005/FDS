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
      numbers: 10,
      users: [
        {
          name: '김민기',
          id: '@mk.kim',
          bio: 'iure nulla distinctio vero, non itaque pariatur unde exercitationem enim alias labore eligendi.'
        },
        {
          name: '송하민',
          id: '@hm.song',
          bio: 'Voluptates doloremque illum error, odit quibusdam maiores sint, consequatur.'
        },
        {
          name: '천송이',
          id: '@sy.choun',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        }
      ],
      metopo: {
        concept: '막춤',
        who: '막장 드라마 주인공'
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
