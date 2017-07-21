/*! main.js @ 2017, yamoo9.net */
((global)=>{
  'use strict';

  // 사용자 정의 키코드 등록
  Vue.config.keyCodes = {
    f1: 112,
    f2: 113
  };

  // Firebase DB 통신 주소
  let firebase_db = 'https://vue-planlist.firebaseio.com/planlist.json';

  new Vue({
    el: '.project-team',
    created () {
      // Ajax 통신을 통해 Sever(Firebase)로부터 데이터를 GET 한 후,
      // Vue 인스턴스 데이터에 GET 한 콘텐츠를 할당(Assign)
      this.getFirebasePlanData();
    },
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
      is_transfer: false,
      plan_it: '',
      plan: []
    },
    methods: {
      getFirebasePlanData(){
        $.get(firebase_db).then(data=>{
          this.plan = Object.values(data);
        });
      },
      excludeMember(i,n){
        this.team.group[i].splice(n, 1);
      },
      updatePlanIt(e){
        this.plan_it = e.target.value;
      },
      addPlanIt(){
        let _this = this;
        let new_plan_it = {
          it: _this.plan_it,
          done: false
        };
        // _this.plan.push(new_plan_it);
        this.is_transfer = true;
        this.new_plan_it = '';

        // Firebase DB 통신으로 새로운 플랜 추가하기
        $.post(firebase_db, JSON.stringify(new_plan_it)).then(data => {
          // POST 통신이 성공하게 되면,
          // 다시 GET 통신
          this.getFirebasePlanData();
          this.is_transfer = false;
        });
      }
    }
  });

})(window);
