/*! ajax-native.js @ 2017, yamoo9.net */
(function(global){
  'use strict';

  // AJAX Native
    // 통신(요청/응답)을 위한 API (Back-End API)
    // 사용자 인터페이스에 업데이트 렌더링
    // 사용자 인터페이스에서 요구된 요청 사항 처리 (서버에 데이터 전송, 요청)
    // HTTP Methods
      // - GET
      // - POST
      // - PUT
      // - DELETE

  // 실습

  // 비동기 통신을 위한 객체 생성
  // 생성자 함수 XMLHttpRequest()를 사용
  // 반드시 new를 사용해야 합니다.
  var xhr = new XMLHttpRequest();

  // 동기 통신 방법을 선택
  xhr.open('GET', '../DB/book.txt', false);
  // 서버에 요청(보내기)
  xhr.send(null);

  // 현재 통신 방식은 동기(Sync)이기에 아래 코드는 대기 후에 실행

  // 통신 상태 확인
  console.log('xhr 통신 상태는?', xhr.status);

  // 통신 상태가 O.K라면
  if ( xhr.status === 200 ) {
    console.log('통신 성공 :)');
    // 응답 데이터를 확인
    console.log('응답된 데이터 URL', xhr.responseURL);
    console.log('응답된 데이터 유형', xhr.responseType === ''); // true
    console.log('응답된 데이터', xhr.response);
    console.log('응답된 데이터', xhr.responseText);
  }
  // 통신 상태가 Fail 이라면
  if ( xhr.status === 404 ) {
    console.log('통신 실패 :(');
  }


  // ------------------------------------------------------------------------

  // AJAX Library (FDS.ajax)
    // - jQuery AJAX
    // - axios

})(window);