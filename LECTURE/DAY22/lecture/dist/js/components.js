'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*! components.js @ 2017, yamoo9.net */
(function (global, $) {
  'use strict';

  var Notification = function () {
    function Notification(selector) {
      _classCallCheck(this, Notification);

      if ($.type(selector) !== 'string') {
        throw 'CSS 선택자를 전달해주세요';
      }
      if (selector.trim() === '') {
        throw '빈 문자열 입니다.';
      }
      if (!this) {
        throw 'new Notification()으로 실행해주세요';
      }
      this.$el = $(selector);
      this.$el.find('.delete').on('click', this.close.bind(this));
    }

    _createClass(Notification, [{
      key: 'close',
      value: function close() {
        this.$el.remove();
      }
    }]);

    return Notification;
  }();

  global.Notification = Notification;
})(window, window.jQuery);

(function (global, $, Notification) {
  'use strict';

  new Notification('.site-noti');
})(window, window.jQuery, window.Notification);