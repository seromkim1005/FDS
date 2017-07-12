/*! main.js @ 2017, yamoo9.net */

// JSON //
// https://api.myjson.com/bins/f0etn

;(function(global, $){
  'use strict';

  /** 모듈 내 지역 변수 */
  let $component,
      $lists,
      $labels,
      time = 300; // 0.3s

  /** 초기화 함수 */
  function init(){
    // 객체 참조
    $component = $('.ui-accordion');
    $lists     = $component.find('.menu-list');  // .find() 메서드 사용
    $labels    = $('.menu-label a', $component); // context 전달인자 사용
    // 이벤트 바인딩
    bind();
    // 초기 실행
    $lists.hide();                  // 모든 리스트 감추기
    $labels.eq(1).trigger('click'); // 특정 레이블 활성화 클릭 실행
  }
  /** 이벤트 핸들링 */
  function bind() {
    $labels.on('click', toggleList);
  }
  /** 이벤트 핸들러 */
  function toggleList(e) {
    e.preventDefault();      // 기본 동작 차단
    let $this = $(e.target); // 클릭한 대상 jQuery화 참조
    let $list = $this.parent().next();
    // if ( $list.css('display') === 'none' ) {
    if ( !$list.is(':visible') ) {
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