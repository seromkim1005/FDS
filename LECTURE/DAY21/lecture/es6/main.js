/*! main.js @ 2017, yamoo9.net */

// JSON:
// https://api.myjson.com/bins/f0etn
((global, $) => {
  'use strict';

  let api_id = 'f0etn';
  let api_address = `https://api.myjson.com/bins/${api_id}`;

  // Ajax GET
  $.get(api_address).then(data => {
    console.groupCollapsed('jQuery Ajax 데이터 로드');

    console.log(data);

    console.groupEnd('jQuery Ajax 데이터 로드');
  });

})(window, window.jQuery);

(function(global, $){
  'use strict';

  console.groupCollapsed('jQuery 버전 출력');

  console.log('jQuery 버전? $().jquery = ', $().jquery);
  console.log('jQuery 버전? $.fn.jquery = ', $.fn.jquery);
  console.log('jQuery 버전? $.prototype.jquery = ', $.prototype.jquery);
  console.log('jQuery 버전? jQuery.prototype.jquery = ', jQuery.prototype.jquery);

  console.groupEnd('jQuery 버전 출력');


})(window, window.jQuery);

(function(global, $){
  'use strict';

  // 메서드 체이닝이 가능한 이유는
  // jQuery 객체가 메서드마다 반환되기 때문
  // > 모든 메서드가 가능한 것은 아님 (API 문서 확인)

  // 팩토리 함수
  // CSS 선택자를 전달
  $('h1')
    // CSS 속성을 제어하는 jQuery 객체(인스턴스)의 메서드를 사용
    .css('color', 'tan')
    .addClass('is-3')
    .removeClass('is-1');

  // jQuery 인스턴스 메서드 검증
  console.groupCollapsed('jQuery 인스턴스 메서드 검증');

    console.log('jQuery.prototype.css', !!jQuery.prototype.css);
    console.log('jQuery.prototype.addClass', !!jQuery.prototype.addClass);
    console.log('jQuery.prototype.removeClass', !!jQuery.prototype.removeClass);
    console.log('jQuery.prototype.radioClass', !!jQuery.prototype.radioClass);

  console.groupEnd('jQuery 인스턴스 메서드 검증');

  // DOM Node 전달
  // DocumentNode
  // Host Object 전달
  // Document {}
  // .on() jQuery 인스턴스 메서드
  // $(document).on('click', function(e) {
  $(document).on('click', e => {
    console.log(e.target);        // Event Object 의 target 속성 값은?
    console.log(e.currentTarget); // Event Object 의 currentTarget 속성 값은?
    // 중요!!!!!
    // 함수 값(리터럴)에서는 this가 이벤트의 주인을 가리키지만,
    // 화살표 함수 내 this는 상위 컨텍스트를 가리킨다.
    console.log(this);            // Arrow Function 내부의 this는?
  });

  // Window {}
  // 사용자가 스크롤 이벤트를 발생시키면,
  // 콜백 함수가 실행된다.
  let $window = $(window);
  let $main   = $('.main');

  $window.on('scroll', function(){
    $window.scrollTop() > 123 ?
    // this.scrollTop() > 123 ?
      $main.addClass('is-fixed') :
      $main.removeClass('is-fixed');
  });
  // }.bind($window));

})(window, window.jQuery);
