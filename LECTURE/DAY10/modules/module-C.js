// 전역(Global Scope)
// 변수, 함수 선언 => 전역 변수, 전역 함수 => 전역 객체 속성/메서드

var m3 = (function(){

  var module = ['module-A', 'module-B'];

  console.log('type(module):', type(module));

  return module;

})();
