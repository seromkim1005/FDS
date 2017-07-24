/*! main.js @ 2017, yamoo9.net */
((global)=>{
  'use strict';

  global.app = new Vue({
    el: '.app',
    created () {
      this.one_piece = global.one_piece;
      this.one_piece_keys = Object.keys(this.one_piece[0]);
      this.one_piece_keys.forEach(key=>{
        // 반응성 속성 설정
        this.$set(this.sort_states, key, 1);
      });
    },
    data: {
      search: '',
      sort_by: '',
      sort_states: {},
      one_piece_keys: [],
      one_piece: []
    },
    computed: {
      filtered_one_piece(){
        let onepiece   = this.one_piece;
        let search     = this.search.trim();
        let sort       = this.sort_by;
        let sort_state = this.sort_states[sort];
        // 조건 1. 사용자가 정보를 입력한 경우
        if ( search ) {
          onepiece = onepiece.filter(member => Object.values(member).some(value => value.includes(search)));
        }
        // 조건 2. 사용자가 정렬 버튼을 누른 경우
        if ( sort ) {
          // 배열 onepiece를 복사한 후,
          onepiece = onepiece.slice().sort((a,b)=>{
            a = a[sort];
            b = b[sort];
            // console.log('a: %s, b: %s', a, b);
            return (a > b ? 1 : a < b ? -1 : 0) * sort_state;
          });
          // 복사된 데이터(배열)을 순환 처리 비교 정렬(sort)
          // 결과 반환
        }
        return onepiece;
      }
    },
    methods: {
      inputChangeSearch(event){
        this.search = event.target.value;
      },
      sortBy(key){
        this.sort_by = key;
        this.sort_states[key] = this.sort_states[key] * -1;
      },
      toggleLabel(key){
        return this.sort_states[key] > 0 ?
          '내림차순 정렬' :
          '오름차순 정렬';
      },
      toggleClass(key){
        return this.sort_states[key] > 0 ?
          'fa-sort-down' :
          'fa-sort-up';
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
