/*! jquery.swipe.study.js @ 2017, yamoo9.net */
(function(global, $){
  'use strict';

  // jQuery가 준비되었나?
  if (!$) { throw '해당 .swipe() 플러그인은 jQuery를 먼저 불러와야 사용이 가능합니다.' }
  // jQuery.prototype.swipe 메서드가 존재하는가?
  if ( !$.fn.swipe ) {
    // Touch Event (Mobile)
      // touchstart, touchmove, touchend, touchenter, touchleave, touchcancel
    // Mouse Event (Desktop)
      // mousedown, mousemove, mouseup, mouseenter, mouseleave
    $.fn.swipe = function(callback){
      var $this = this;
      return $.each($this, function(i, el){
        var $el = $this.eq(i);
        var touch,
            startX, startY,
            moveX, moveY,
            distanceX, distanceY,
            direction, directionX, directionY;
        function computedTouch(e){
          touch = e.changedTouches[0];
          moveX = global.parseInt(touch.clientX,10);
          moveY = global.parseInt(touch.clientY,10);
          distanceX = global.parseInt( moveX - startX, 10 );
          distanceY = global.parseInt( moveY - startY, 10 );
          directionX = distanceX > 0 ? 'right' : 'left';
          directionY = distanceY > 0 ? 'down' : 'up';
          direction = directionX + ' ' + directionY;
        }
        $el.on({
          touchstart: function(e){
            e.preventDefault();
            touch = e.changedTouches[0];
            startX = global.parseInt(touch.clientX,10);
            startY = global.parseInt(touch.clientY,10);
            callback.call($el, {
              type: 'start',
              touch, startX, startY
            }, e);
          },
          touchmove: function(e){
            e.preventDefault();
            computedTouch(e);
            callback.call($el, {
              type: 'move',
              touch, direction, distanceX, distanceY, moveX, moveY
            }, e);
          },
          touchend: function(e){
            e.preventDefault();
            computedTouch(e);
            callback.call($el, {
              type: 'end',
              touch, direction, distanceX, distanceY,
              lastX: moveX,
              lastY: moveY
            }, e);
          }
        });
      });
    };
  }

})(window, window.jQuery);