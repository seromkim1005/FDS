/*! DOM.Script.js @ 2017, yamoo9.net */

// HTML DOM
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
  // function init() {
  //   body = document.body;
  //   console.log('after load - body is:', !!body); // 접근 가능
  // }

  // window 객체의 onload 이벤트 속성에 함수를 할당 (시점에 함수 실행
  // window.onload = init;

  // body 바로 아래서 스크립트를 실행했을 때 h1 요소를 찾을 수 있나?
  var headline = document.getElementsByTagName('h1'); // ['h1']
  console.log('headline:', headline);
  console.log('headline[0].textContent:', headline[0].textContent);

}) // (window, window.document);

// Core(XML) DOM
;(function(global){
  'use strict';

  var document = global.document;
  var html = document.getElementsByTagName('html').item(0);
  var head = document.getElementsByTagName('head').item(0);
  var body = document.getElementsByTagName('body').item(0);

  // DOM API를 사용해서 노드리스트에 접근한 후, 개별 아이템을 추출
  var headline = document.getElementsByTagName('h1')[0];
  var abbr_in_headline = headline.getElementsByTagName('abbr')[0];

  console.log('headline:', headline);
  console.log('abbr_in_headline:', abbr_in_headline);

  // 부모노드(parentNode) 탐색
  console.log('h1 요소노드의 부모의 부모의 부모는?', headline.parentNode.parentNode.parentNode); // #document
  console.log('h1 요소노드의 부모의 부모의 부모는 document 객체?', headline.parentNode.parentNode.parentNode === document); // true
  console.log('document 객체의 부모노드는?', document.parentNode);     // null
  console.log('h1 요소의 부모노드는?', headline.parentNode);           // body
  console.log('abbr 요소의 부모노드는?', abbr_in_headline.parentNode); // h1

  // 자식노드(firstChild, lastChild) 탐색
  console.log('headline의 첫번째 자식은?', headline.firstChild); // 공백이 없다면 ? <abbr> : #text
  console.log('headline의 마지막 자식은?', headline.lastChild);  // ' Script'

})(window);