(function(global, $){
  'use strict';

  var app, memo_storage, memo, memo_buttons, memo_title, memo_content, memo_items;

  var document         = global.document;
  var forEach          = Array.prototype.forEach;
  var memo_api_address = '';

  function init() {
    // 메모 API 주소 설정
    memo_api_address = 'http://localhost:3000/memo-app/';
    // 메모 앱 문서 객체 참조
    app              = document.querySelector('.app');
    memo             = app.querySelector('.memo');
    memo_buttons     = memo.querySelectorAll('button');
    memo_items       = app.querySelector('.memo-item-container');
    memo_title       = memo.querySelector('#memo-title');
    memo_content     = memo.querySelector('#memo-content');

    // 데이터 로드
    load();
  }
  function load() {
    // memo_api_address 에서 데이터 가져오기 (GET)

    // 데이터 가져온 후, 렌더링
    // 이벤트 바인딩
    // render();
    // bind();
  }
  function render() {
    var template = '';
    memo_items.innerHTML = '';
    memo_storage.forEach(function(memo, index){
      template += '<article class="memo-item column is-3 message is-primary">'+
        '<div class="message-header">'+
          '<h5 class="memo-item-title">'+memo.title+'</h5>'+
          '<button data-remove-index="'+index+'" type="button" class="delete" aria-label="메모 아이템 제거"></button>'+
        '</div>'+
        '<div class="message-body">'+
          '<p class="memo-item-content">'+memo.content+'</p>'+
        '</div>'+
      '</article>';
    });
    memo_items.innerHTML = template;
  }
  function bind() {
    forEach.call(memo_buttons, function(button){
      button.addEventListener('click', detectButton);
    });
    memo_items.addEventListener('click', removeMemo);
  }
  function detectButton() {
    this.classList.contains('is-save') ? saveMemo() : cancelMemo();
  }
  function removeMemo(ev) {
    var target = ev.target;
    if ( target.localName === 'button' && target.classList.contains('delete') ) {
      var remove_id = target.dataset.removeIndex;
      // memo_api_address 에서 데이터 지우기 (DELETE)

      render();
      ev.stopPropagation();
    }
  }
  function validateMemo(title, content) {
    if ( title.value.trim() === '' ) {
      global.alert('메모 제목이 비어 있습니다. 내용을 입력해주세요.');
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
    if ( validateMemo(memo_title, memo_content) ) { return; }
    var memo_item = {
      title: memo_title.value,
      content: memo_content.value
    };
    // memo_api_address 에서 데이터 추가하기 (POST)

    cancelMemo();
    render();
  }
  function cancelMemo() {
    memo_title.value = '';
    memo_content.value = '';
  }

  init();

})(window, window.jQuery);