/*! components.js @ 2017, yamoo9.net */
(function(global, $){
  'use strict';

  class Notification {
    constructor(selector) {
      if ( $.type(selector) !== 'string' ) { throw 'CSS 선택자를 전달해주세요'; }
      if ( selector.trim() === '' ) { throw '빈 문자열 입니다.'; }
      if ( !this ) { throw 'new Notification()으로 실행해주세요'; }
      this.$els = $(selector);
      this.$els.each(i => {
        let $el = this.$els.eq(i);
        $el.find('.delete').on('click', this.close.bind($el));
      });
    }
    close() {
      this.remove();
    }
  }

  global.Notification = Notification;

})(window, window.jQuery);

(function(global, $, Notification){
  'use strict';

  // 객체 지향 코드를 사용한 예
  // new Notification('.site-noti');

  // jQuery 코드 스타일 예
  $('.site-noti').find('.delete').on('click', function() {
    $(this).parent().remove();
  });

})(window, window.jQuery, window.Notification);