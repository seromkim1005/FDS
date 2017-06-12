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

  // 이전/다음 형제노드(previousSibing, nextSibing) 탐색
  console.log(abbr_in_headline.previousSibling); // ?
  console.log(abbr_in_headline.nextSibling);     // ?

  // 자식노드들 중에서 요소노드만 골라내기
  function onlyElementNodeCollection(el) {
    if ( !el || el.nodeType !== 1 ) { throw '요소노드를 전달하세요'; }
    var el_childs = el.childNodes;
    var collection = [];
    // 순환문을 돌려서 요소 노드만 별도로 수집한 객체를 변수에 참조해보자.
    // 노드.nodeType (요소노드 = 1, 속성노드 = 2, 텍스트노드 = 3, 주석노드 = 8)
    for ( var i=0, l=el_childs.length; i<l; i++ ) {
      var child = el_childs[i];
      // if ( child.nodeType === 1 ) {
      //   collection.push(child);
      // }
      if ( child.nodeType !== 1 ) { continue; }
      collection.push(child);
    }
    return collection;
  }
  // 위의 로직을 가진 유틸리티 함수를 만들어 보자.
  var result = onlyElementNodeCollection(headline);
  // 결과 확인
  console.log(result);

}) // (window);

// DOM API (탐색(Travelsing) 속성)
;(function(global){
  'use strict';
  var document = global.document;

  // NODE.childNodes   VS   NODE.children
  // childNodes 는 모든 자식 노드를 반환
  // children 은 자식 중, 요소노드만 반환

  var target = document.getElementById('target-parent');
  // console.log(target);
  console.log('target.childNodes:', target.childNodes);
  console.log('target.children:', target.children);

  console.log('target.firstChild === target.childNodes[0]:', target.firstChild === target.childNodes[0]);
  console.log('target.lastChild === target.childNodes[target.childNodes.length - 1]:', target.lastChild === target.childNodes[target.childNodes.length - 1]);

})(window);