/**
 * -----------------------
 * DOM 스토리지(DOMStorage
 * -----------------------
 * 1. localStorage
 * 2. sessionStorage
 * 3. JSON.parse() <-> JSON.stringify()
 */

(function(global){
  'use strict';

  var document     = global.document;
  var localStorage = global.localStorage;
  var forEach      = Array.prototype.forEach;
  var JSON         = global.JSON;
  var memo_data_id = 'memo-data';
  var memo_storage, memo, memo_buttons, memo_title, memo_content;

  // 애플리케이션 초기화 과정에서 수행되는 일들....
  function init() {
    // 애플리케이션 컴포넌트 참조
    memo = document.querySelector('.memo');
    memo_buttons = memo.querySelectorAll('button');
    // 로컬 스토리지(서버)에서 저장된 데이터를 로드
    loadMemoData(memo_data_id);
    // 이벤트 바인딩
    bind();
  }
  function loadMemoData(id) {
    var loaded_data = localStorage.getItem(id);
    if (!loaded_data) {
      localStorage.setItem(id, JSON.stringify([]));
    } else {
      memo_storage = JSON.parse(loaded_data);
    }
  }
  function bind() {
    forEach.call(memo_buttons, function(button){
      button.addEventListener('click', detectButton);
    });
  }
  function detectButton() {
    this.classList.contains('is-save') ? saveMemo() : cancelMemo();
  }
  function validateMemo(title, content) {
    if ( title.value.trim() === '' ) {
      global.alert('메모 제목이 비어 있습니다. 내용을 입력해주세요.');
      // 사용자가 입력하지 않은 필드에 포커스 이동
      memo_title.focus();
      return true;
    }
    if ( content.value.trim() === '' ) {
      global.alert('메모 내용이 비어 있습니다. 내용을 입력해주세요.');
      memo_content.focus();
      return true;
    }
    return false;
  }
  function saveMemo() {
    // 사용자가 입력한 메모 타이틀, 내용을 가져와서 객체로 구성
    memo_title = memo.querySelector('#memo-title');
    memo_content = memo.querySelector('#memo-content');
    // 사용자 입력한 데이터 검증
    // 요구된 입력 내용이 충족되지 않았을 경우, 사용자에게 알리고 함수를 종료
    if ( validateMemo(memo_title, memo_content) ) { return; }
    // 사용자 입력 정보를 객체로 구성
    var memo_item = {
      title: memo_title.value,
      content: memo_content.value
    };
    // 사용자 입력 정보 객체를 메모스토리지 배열에 추가
    memo_storage.push(memo_item);
    // 메모스토리지 배열 객체를 문자화
    var memo_data = JSON.stringify(memo_storage);
    // 문자화된 데이터를 로컬 스토리지에 저장
    localStorage.setItem(memo_data_id, memo_data);
  }
  function cancelMemo() {
    // 사용자가 입력한 메모 타이틀, 내용을 지웁니다.
  }

  init();

})(window);