/**
 * -----------------------
 * DOM 스토리지(DOMStorage
 * -----------------------
 * 1. localStorage
 * 2. sessionStorage
 * 3. JSON.parse()
 * 4. JSON.stringify()
 */

(function(global){
  'use strict';

  var document = global.document;
  var forEach = Array.prototype.forEach;
  var memo, memo_buttons, memo_title, memo_content;

  function init() {
    memo = document.querySelector('.memo');
    memo_buttons = memo.querySelectorAll('button');
    bind();
  }
  function bind() {
    forEach.call(memo_buttons, function(button){
      button.addEventListener('click', detectButton);
    });
  }
  function detectButton() {
    this.classList.contains('is-save') ? saveMemo() : cancelMemo();
  }
  function saveMemo() {
    // 사용자가 입력한 메모 타이틀, 내용을 가져와서 객체로 구성
    memo_title = memo.querySelector('#memo-title');
    memo_content = memo.querySelector('#memo-content');
    // 사용자 입력한 데이터 검증
    var title = memo_title.value.trim();
    var content = memo_content.value.trim();
    if ( title === '' ) {
      global.alert('메모 제목이 비어 있습니다. 내용을 입력해주세요.');
      // 사용자가 입력하지 않은 필드에 포커스 이동
      memo_title.focus();
      return;
    }
    if ( content === '' ) {
      global.alert('메모 내용이 비어 있습니다. 내용을 입력해주세요.');
      memo_content.focus();
      return;
    }
    // 객체를 문자화 시켜야합니다.
    var memo_item = {
      title: title,
      content: content
    };
    console.log(memo_item);
    // 로컬 스토리지에 저장합니다.
  }
  function cancelMemo() {
    // 사용자가 입력한 메모 타이틀, 내용을 지웁니다.
  }

  init();

})(window);