/*! main.js @ 2017, yamoo9.net */
((global) => {
  'use strict';

  global.watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
      question: '',
      answer: '질문을 하기 전까지는 대답할 수 없습니다.'
    },
    computed: {
      computed_question(){
        // console.log('computed');
        this.getAnswer();
        return this.question;
      }
    },
    // watch: {
    //   question(newValue){
    //     this.getAnswer();
    //     return newValue;
    //   }
    // },
    methods: {
      getAnswer: _.debounce(
        function () {
          if (this.question.indexOf('?') === -1) {
            this.answer = '질문에는 일반적으로 물음표가 포함 됩니다. ;-)';
            return;
          }
          this.answer = '생각중...';
          var vm = this;
          axios.get('https://yesno.wtf/api')
            .then(function (response) {
              vm.answer = _.capitalize(response.data.answer);
            })
            .catch(function (error) {
              vm.answer = '에러! API 요청에 오류가 있습니다. ' + error;
            });
        },
        // 사용자가 입력을 기다리는 시간(밀리세컨드) 입니다.
        500
      )
    }
  });

})(window);
