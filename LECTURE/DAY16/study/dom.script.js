/*! dom.script.js @ 2017, yamoo9.net */

// Emmet 설정
(function(emmet){
  'use strict';
  emmet.require('textarea').setup({
    pretty_break: true,
    use_tab: true
  });
})(global.emmet);

;(function(global, document, $){
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
  // var data = [3, 7, 9, 101];
  // data.forEach(function(item, index, arr){
  //   console.log(item);
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

  function copyEvent( copyed, copy ) {
    // copyed: 능력을 복제할 자
    // copy: 능력을 가진 자
    forEach.call(copyed, function(item, index){
      item.onclick = copy[index].onclick;
    });
  }

  global.cloneNodeGNB = function () {
    // 참조된 변수(노드)를 복제한다. (.cloneNode([false|true]))
    // var copyed_gnb = gnb.cloneNode(true);
    // 이벤트 복제까지 수행하려면?
    // copyEvent( $.selectorAll('a', copyed_gnb) , gnb_links );

    // 유틸리티 사용 예시
    var copyed_gnb = $.clone(gnb, true);
    // 복제된 노드를 변수에 참조해서 특정 위치(.copyzone)에 삽입
    $.appendChild(copyzone, copyed_gnb);
  };

  // ---------------------------------------
  // 클래스 속성 제어
  // 속성 추가, 제거, 소유, 토글

  // .classList
  //    .contains()
  //    .add()
  //    .remove()
  //    .toggle()
  //    .keys()
  //    .values()
  //    .entries()

  // DOM 삽입
  // .innerHTML
  // getter / setter
  // [GETTER] Node.innerHTML
  // [SETTER] Node.innerHTML = 'HTML Code';

  // .insertAdjacentHTML()
  // .insertAdjacentElement()
  // .insertAdjacentText()


  // 데이터 접두사 속성 제어
  // .dataset

  // 속성 제어
  // .getAttribute()
  // .setAttribute()
  // .removeAttribute()
  // .hasAttribute()


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