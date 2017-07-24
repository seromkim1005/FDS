/*! main.js @ 2017, yamoo9.net */
((global)=>{
  'use strict';

  global.app = new Vue({
    el: '.app',
    created () {
      this.one_piece = global.one_piece;
      this.one_piece_keys = Object.keys(this.one_piece[0]);
    },
    data: {
      search: '',
      one_piece_keys: [],
      one_piece: []
    },
    computed: {
      // 사용자가 입력한 정보와 일치하는 내용을 포함한 집합을 반환하는 계산된 속성
      filtered_one_piece(){
        let onepiece = this.one_piece;
        let search   = this.search.trim();
        // 조건 1. 사용자가 정보를 입력한 경우
        if ( search ) {
          return onepiece.filter(member=>{
            let values = Object.values( member );
            return values.some(value=>{
              return value.includes(search);
            });
          });
        }
        // 조건 2. 사용자가 정렬 버튼을 누른 경우

        return onepiece;
      }
    },
    methods: {
      inputChangeSearch(event){
        this.search = event.target.value;
      },
      readableContent(content){
        switch(content){
        case 'name': return '이름';
        case 'shortname': return '애칭';
        case 'nickname': return '별명';
        case 'image': return '사진';
        case 'regiment': return '소속';
        case 'devil_fruit': return '악마의 열매';
        case 'position': return '직위';
        case 'wanted': return '현상금';
        case 'bio': return '소개';
        }
      },
      ellipseContent(content, limit=100, suffix='...'){
        if ( typeof content !== 'string' ) {
          throw '첫번째 인자는 문자열로 전달해주세요.';
        }
        return content.slice(0,limit).trim() + suffix;
      }
    }

  });



})(window);
