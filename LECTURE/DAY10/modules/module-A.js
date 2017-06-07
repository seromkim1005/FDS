// 전역(Global Scope)
// 변수, 함수 선언 => 전역 변수, 전역 함수 => 전역 객체 속성/메서드

// 전역
// Public
var m1 = (function(){

  // 지역 변수
  // 은폐(Private)된 공간이 형성
  var module = function() {
    console.log('A file. Function.');
  };

  console.log('isType(module, "function"):', isType(module, "function"));

  // 외부에서 접근 가능하도록 공개
  return module;

}());