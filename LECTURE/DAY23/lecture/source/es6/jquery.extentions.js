/**
 * jQuery 함수 속성 확장
 * 유틸리티 메서드
 */
(function($){
  'use strict';

  if ( !$.random ) {
    $.random = n => Math.floor(Math.random() * n);
  }

  if ( !$.cache ) {
    $.cache = el => $.data(el, '$el') || $.data(el, '$el', $(el));
  }

  if ( !$.shake ) {
    $.shake = ($el, time=2000, shake=10, distance=5) => {
      let duration = time/shake/4;
      $el.css('position', 'relative');
      $.when(
        $el
          .stop()
          .animate({left: -distance}, duration)
          .animate({left: distance}, duration)
          .animate({left: 0}, duration)
      ).done(()=>$el.removeAttr('style'));
    }
  }

})(window.jQuery);