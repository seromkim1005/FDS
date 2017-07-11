/*! main.js @ 2017, yamoo9.net */

// JSON:
// https://api.myjson.com/bins/f0etn

;(function(global, $){
  'use strict';

  let $component,
      $lists,
      $labels,
      time = 300;

  /** 초기화 함수 */
  function init(){

    $component = $('.ui-accordion');
    $lists = $component.find('.menu-list');
    $labels = $('.menu-label a', $component);
    $lists.hide();

    // 이벤트 바인딩
    bind();

    // 초기 실행
    $labels.eq(0).trigger('click');

  }
  /** 이벤트 핸들링 */
  function bind() {
    $('.menu-label a', $component).on('click', toggleList);
  }
  /** 이벤트 핸들러 */
  function toggleList(e) {
    e.preventDefault();
    let $this = $(e.target);
    let $list = $this.parent().next();
    if ( $list.css('display') === 'none' ) {
      $list.show(time);
      $this.addClass('is-active');
    } else {
      $list.hide(time);
      $this.removeClass('is-active');
    }
  }

  // 초기화 실행
  init();

})(window, window.jQuery);