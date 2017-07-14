'use strict';

/**
 * jQuery 함수 속성 확장
 * 유틸리티 메서드
 */
(function ($) {
  'use strict';

  if (!$.random) {
    $.random = function (n) {
      return Math.floor(Math.random() * n);
    };
  }

  if (!$.cache) {
    $.cache = function (el) {
      return $.data(el, '$el') || $.data(el, '$el', $(el));
    };
  }

  if (!$.shake) {
    $.shake = function ($el) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
      var shake = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
      var distance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;

      var duration = time / shake / 4;
      $el.css('position', 'relative');
      $.when($el.stop().animate({ left: -distance }, duration).animate({ left: distance }, duration).animate({ left: 0 }, duration)).done(function () {
        return $el.removeAttr('style');
      });
    };
  }
})(window.jQuery);