/*! dom.script.js @ 2017, yamoo9.net */
(function(global, document, $){
  'use strict';

  // ——————————————————————————————————————
  // Node Interface
  // ——————————————————————————————————————

  // 노드 복제
  // .cloneNode([deep])

  // #gnb 요소노드를 찾아서 변수에 참조
  var gnb = $.selector('#gnb');
  var copyzone = $.selector('.copyzone');

  // #gnb 내부의 a 요소에 이벤트 바인딩
  var gnb_links = $.selectorAll('a', gnb);

  // ES5 (2009)
  // Array.prototype.forEach() 인스턴스 메서드
  // [3, 7, 9, 101].forEach(function(item, index, arr){
  //   console.log(index);
  // });

  // 배열 생성자 프로토타입 객체의 메서드 forEach()를 빌려쓰자.
  var forEach = Array.prototype.forEach;
  forEach.call(gnb_links, function(link){
    link.onclick = function() {
      // e.preventDefault();
      console.log(this);
      return false;
    };
  });

  global.cloneNodeGNB = function () {
    // 참조된 변수(노드)를 복제한다. (.cloneNode([false|true]))
    var copyed_gnb = gnb.cloneNode(true);
    // 복제된 노드를 변수에 참조해서 특정 위치(.copyzone)에 삽입
    $.appendChild(copyzone, copyed_gnb);
    // 이벤트 복제까지 수행하려면?
    copyEvent( $.selectorAll('a', copyed_gnb) , gnb_links );
  };

  function copyEvent( copyed, copy ) {

  }








  // 클래스 속성 제어
  // .classList

  // 데이터 접두사 속성 제어
  // .dataset

  // 속성 제어
  // .getAttribute()
  // .setAttribute()
  // .removeAttribute()
  // .hasAttribute()

  // DOM 삽입
  // .insertAdjacentHTML()
  // .insertAdjacentElement()
  // .insertAdjacentText()

  // 스타일 제어
  // .style
  // .cssText
  // .getComputedStyle | currentStyle

  // ——————————————————————————————————————
  // Event Interface
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
  // 이벤트 전파 차단
  // 이벤트 전파 즉시 차단


})(window, window.document, window.FDS);