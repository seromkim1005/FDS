/*! components.js @ 2017, yamoo9.net */
(function(global, $){
  'use strict';

  class Notification {
    constructor(selector) {
      if ( $.type(selector) !== 'string' ) { throw 'CSS 선택자를 전달해주세요'; }
      if ( selector.trim() === '' ) { throw '빈 문자열 입니다.'; }
      if ( !this ) { throw 'new Notification()으로 실행해주세요'; }
      this.$el = $(selector);
      this.$el.find('.delete').on('click', this.close.bind(this));
    }
    close() {
      this.$el.remove();
    }
  }

  global.Notification = Notification;

})(window, window.jQuery);

(function(global, $, Notification){
  'use strict';

  new Notification('.site-noti');

})(window, window.jQuery, window.Notification);