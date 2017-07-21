/*! main.js @ 2017, yamoo9.net */
((global)=>{
  'use strict';

  // 사용자 정의 키코드 등록
  Vue.config.keyCodes = {
    f1: 112,
    f2: 113
  };

  new Vue({
    el: '.project-team',
    data: {
      team: {
        name: 'FDS 4기 프로젝트 명단',
        group: [
          ['강소연', '전현우'],
          ['손현', '강다인', '이소정'],
          ['김다솜', '김세롬', '지정민'],
          ['이대호', '김정욱'],
          ['이범두', '이동우', '이창호'],
          ['차혜진', '김지수', '이진아'],
          ['임기완', '이상원'],
          ['한성욱', '김태훈', '고세민'],
          ['허우창', '정미주', '기미송']
        ]
      },
      plan_it: '',
      plan: [
        { done: false, it: '아이디어 브레인 스토밍' }
      ]
    },
    methods: {
      excludeMember(i,n){
        this.team.group[i].splice(n, 1);
      },
      addPlanIt(){
        let _this = this;
        let new_plan_it = {
          it: _this.plan_it,
          done: false
        };
        _this.plan.push(new_plan_it);
      }
    }
  });

})(window);
