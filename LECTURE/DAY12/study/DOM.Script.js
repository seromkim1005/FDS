/*! DOM.Script.js @ 2017, yamoo9.net */

(function(global, document){
  'use strict';

  var html, head, body;
  html = document.documentElement;
  head = document.head;
  body = document.body;
  console.log('html:', !!html);               // 접근 가능
  console.log('head:', !!head);               // 접근 가능
  console.log('before load - body is:', !!body); // null 반환 (접근 X)

  // 초기화 함수
  function init() {
    body = document.body;
    console.log('after load - body is:', !!body); // 접근 가능
  }

  // window 객체의 onload 이벤트 속성에 함수를 할당 (시점에 함수 실행
  window.onload = init;

})(window, window.document);