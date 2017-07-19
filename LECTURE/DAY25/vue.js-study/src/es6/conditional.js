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
          img: 'https://search.pstatic.net/common?type=o&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201608%2F20160816113515714-5897352.jpg',
          id: '@mk.kim',
          bio: 'iure nulla distinctio vero, non itaque pariatur unde exercitationem enim alias labore eligendi.'
        },
        {
          name: '김진아',
          img: 'https://search.pstatic.net/common?type=o&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F53%2F201007211101455201.jpg',
          id: '@hm.song',
          bio: 'Voluptates doloremque illum error, odit quibusdam maiores sint, consequatur.'
        },
        {
          name: '유건',
          img: 'https://search.pstatic.net/common?type=o&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F149%2F201107201212419221.jpg',
          id: '@sy.choun',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        }
      ],
      metopo: {
        concept: '막춤',
        who: '막장 드라마 주인공'
      },

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

(function(global, $, Vue){
  'use strict';

  $('.add-content-btn').on('click', function(){
    var o = global.app.metopo;
    var key = 'user_input';
    var value = $(this).prev().val();
    // Vue 생성자 함수의 메서드인 set()을 사용하는 방법
    Vue.set(o, key, value);
    // Vue{} 인스턴스(객체) 메서드를 사용하는 방법
    // Vue{} 등록된 methods 안의 this.$set()
  });

})(window, window.jQuery, window.Vue);