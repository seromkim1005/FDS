/*! dom.script.js @ 2017, yamoo9.net */
(function(global, _){
  'use strict';

  var document = global.document;

  // ——————————————————————————————————————
  // 생성 (Creating)
  // ——————————————————————————————————————

  // 동적으로 요소노드를 생성
  var list = document.createElement('ul');
  var list_item = document.createElement('li');
  var headline = document.createElement('h2');
  var list_link = document.createElement('a');
  var list_img = document.createElement('img');

  console.group('요소노드 검증');

  console.log('list:', list);
  console.log('list_item:', list_item);
  console.log('list_link:', list_link);
  console.log('list_img:', list_img);
  console.log('list.nodeType:', list.nodeType);
  console.log('list_item.nodeType:', list_item.nodeType);
  console.log('list_link.nodeType:', list_link.nodeType);
  console.log('list_img.nodeType:', list_img.nodeType);

  console.groupEnd('요소노드 검증');

  // 동적으로 속성노드를 생성 (거의 사용되지 않음)
  // 생성된 <a> 요소에 href 속성을 설정(생성해서)
  var list_link_href = document.createAttribute('href');
  // 생성된 <img> 요소에 src, alt 속성을 설정(생성해서)
  var list_img_src = document.createAttribute('src');
  var list_img_alt = document.createAttribute('alt');

  // 동적으로 생성된 속성노드의 노드 값을 설정
  list_link_href.nodeValue = 'https://github.com/yamoo9';
  list_img_src.nodeValue = 'https://unsplash.it/300/200/?random';
  list_img_alt.nodeValue = 'architecture';

  // 동적 생성된 속성노드 확인(검토)
  console.group('속성노드 검증');

  console.log('list_link_href:', list_link_href);
  console.log('list_img_src:', list_img_src);
  console.log('list_img_alt:', list_img_alt);
  console.log('list_link_href.nodeType:', list_link_href.nodeType);
  console.log('list_img_src.nodeType:', list_img_src.nodeType);
  console.log('list_img_alt.nodeType:', list_img_alt.nodeType);

  console.groupEnd('속성노드 검증');

  // 동적으로 텍스트노드 생성
  var headline_text = document.createTextNode('새로운 것은 존재하지 않는다. 아직 내가 못 본 것일 뿐.');

  console.group('텍스트노드 검증');

  console.log('headline_text:', headline_text);
  console.log('headline_text.nodeType:', headline_text.nodeType); // 3

  console.groupEnd('텍스트노드 검증');

  // ——————————————————————————————————————
  // 조작 (Manipulation)
  // ——————————————————————————————————————

  // 요소노드를 요소노드에 붙이려면?
  // 부모노드.appendChild(자식노드)
  // ul
  //  li
  //    h2
  //    a(href)
  //      img(src, alt)
  list.appendChild(list_item);
  list_item.appendChild(headline);
  list_item.appendChild(list_link);
  list_link.appendChild(list_img);
  console.log('list:', list);

  // 속성노드를 요소노드에 붙이려면?
  list_link.setAttributeNode(list_link_href);
  list_img.setAttributeNode(list_img_alt);
  list_img.setAttributeNode(list_img_src);

  // 텍스트노드를 요소노드에 붙이려면?
  headline.appendChild(headline_text);


})(window, window.FDS);