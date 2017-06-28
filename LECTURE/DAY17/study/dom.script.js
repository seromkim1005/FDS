/*! dom.script.js @ 2017, yamoo9.net */
(function(global, $){
  'use strict';

  // ——————————————————————————————————————
  // 속성 제어
  // ——————————————————————————————————————
  // .hasAttribute()
  // .getAttribute()
  // .setAttribute()
  // .removeAttribute()

  // FDS.attr(prop)        // GET
  // FDS.attr(prop, value) // SET
  // FDS.removeAttr(prop)  // DELETE

  var container = $.selector('.container');
  var container_lis = $.selectorAll('li', container);

  global.container = container;

  // Loop
  $.each(container_lis, function(li){
    // SET
    $.attr(li, 'style', 'color: tan');
    // GET
    console.log( $.attr(li, 'style') );
    // Event
    li.onclick = function() {
      $.removeAttr(this, 'style');
    };
  });

  // $.each(container_lis, function(li){
  //   li.setAttribute('data-key', 'kfjlj23l424');
  // });

  // ——————————————————————————————————————
  // 스타일 제어
  // ——————————————————————————————————————
  // .style
  // .cssText
  // .getComputedStyle | currentStyle

  // ——————————————————————————————————————
  // 이벤트
  // ——————————————————————————————————————

  // .on{event_type}
  // .addEventListener() | .attachEvent()
  // .removeEventListener() | .detachEvent()

  // 이벤트 객체
  // 이벤트 타켓
  // 이벤트 기본 동작 차단
  // 이벤트 전파 흐름
  // 이벤트 위임
  // 이벤트 커런트 타겟

})(window, window.FDS);