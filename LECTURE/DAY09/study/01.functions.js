/*! 01.functions.js @ 2017, yamoo9.net */

// ——————————————————————————————————————————————————————
// 함수
// 1. MDN 레퍼런스는 끝나기 한시간 전에 읽어보라고 이야기 할 겁니다.
// 2. 내일 뭐할 건지 이야기 드립니다.
// ——————————————————————————————————————————————————————

// ---------------------------------------
// 함수 선언하기
// 1. 함수 식(익명함수)을 변수에 할당(대입) -> 참조
var registerUserInfo = function() { console.log('registerUserInfo 함수 실행'); };
// 2. 함수 이름을 붙여서 선언하기 -> 함수 선언문
function getUserInfo(){ console.log('getUserInfo 함수 실행'); }


// ---------------------------------------
// 함수 호출하기
// 함수인지 검증 후 실행

// [문] if문을 사용한 예
if ( isFunction(registerUserInfo) ) {
  registerUserInfo();
}

// [식] 논리 연산자(&&, ||)를 사용한 예
// m1 && m2: m1이 참일 때 m2도 실행
// m1 || m2: m1이 거짓일 때 m2가 실행
isFunction(getUserInfo) && getUserInfo();

// ---------------------------------------
// 함수 범위(영역, Scope)
// 전역, 지역
// ES6 이전의 환경에서는 범위는 함수 영역 밖에 존재하지 않는다.

// ---------------------------------------
// 스코프 체인(Scope Chain)

// Global Scope
var g_scope = '전역 변수';
// Local Scope (in function)
function localScope() {
  // 함수 안 (지역)
  // 1. 변수 영역
  // 2. Parameters(매개변수) 영역
  // 3. 함수를 포함하는 상위 영역
  // 4. 전역
  // 5. ReferenceError 발생!
  console.log('g_scope:', g_scope);

  // 함수는 실행 가능
  innerScopeFn();
  // 스코프 호이스팅 현상 발생
  function innerScopeFn() {
    console.log('l_scope:', l_scope); // ???
    var l_scope = '지역 변수';
  }

}

// 함수 실행
// 전역에서 localScope라는 함수가 실행되었다.
// 전역 변수, 전역 함수 -> 전역 객체의 속성(메서드) 이다.
// window.localScope()
localScope();


// ---------------------------------------
// this 컨텍스트(Context)
// 영역 내, this 변수가 무엇을 참조하나?
// 함수를 누가 실행시켰나?
// 컨텍스트 메뉴(Context Menu)

// 전역 함수 정의
// window 전역 객체의 속성(메서드)
function whoCallMe() {
  // this는 자신(this)을 포함하는 함수를 실행시킨 컨텍스트 객체(주체)
  console.log('this:', this);
}
// 명시적 함수 실행
window.whoCallMe(); // this -> window {}

// 암시적 함수 실행
whoCallMe(); // this -> window {}

// 객체의 속성(메서드) 정의
var me = {
  whatIsThis: function() {
    console.log('this:', this);
  },
  // whoCallMe: whoCallMe
  callMe: whoCallMe
};

// 명시적 함수(객체.속성(메서드)) 실행
me.whatIsThis(); // this -> me {}


// ---------------------------------------
// Arguments(전달인자)와 Parameters(매개변수)
function displayBlockElement(el) {
  // 매개변수 el = 전달인자;
  // el = <element id="app"></element>;
  // var 를 사용하는 것은 일반 변수
  // 함수의 선언 구문 () 괄호 안에 선언된 변수 === 매개변수(parameters)
  // 함수 로직
  // 전달 받은 요소의 display 스타일 속성 값을 'block'으로 설정한다.
  el.style.display         = 'block';
  // CSS 속성(2개 이상의 음절로 구분되는)을 적용한 예시
  el.style.borderTopColor  = '#4321fe';
  el.style['margin-right'] = '1rem';
}

// 함수가 실행될 때,
// 무엇을 전달할 것인가?
// 전달인자(arguments)
// displayBlockElement( document.getElementById('app') ); // <element id="app"></element>

// this 참조 검증
// 전역 함수를 정의
// 전역 함수 명시적 실행
// 전역 함수 암시적 실행을 통해 this 가 참조하는 객체가 무엇인지 확인
// 전역에서 this는 무엇을 참조(가리키나)?

// 사용자 객체를 정의
// 사용자 객체의 메서드로 이미 정의된 바 있는 전역 함수를 참조 시켜본다. (함수이름 O, 함수이름() X )
// 사용자 객체의 메서드를 실행해 봄으로서 this 가 참조하는 객체를 확인한다.


// ---------------------------------------
// Arguments(전달인자) 객체

// 수의 합을 반환하는 함수
function sum(n1, n2, n3, n4, n5) {
  // 전달된 인자가 몇 개인지 모를 때?
  // 인자를 집합으로 만들면?
  // 사용자가 전달한 인자들을 집합(Array)의 아이템으로 설정해보세요.

  var num_collection = [n1, n2];
  num_collection.push(n3);
  num_collection.push(n4);
  num_collection.push(n5);

  // num_collection.length === 5

  // length를 알고 있는 당신?
  // 구문 반복 처리
  // while, do ~ while, for

  var l = num_collection.length; // l === 5
  var result = 0;
  while (l--) {
    var n = num_collection[l]; // 4, 3, 2, 1
    if ( !isNumber(n) ) { throw '오류' }
    result + n;
  }

  return result;

}

function anotherSum() {
  // 사용자가 함수를 실행할 때, 전달한 인자의 집합 객체를 참조하는 변수 제공
  // 유사 배열(Array like Object): 배열과 비슷
  // 배열처럼 length 속성을 가진다.
  // arguments // [1, 2], [1, 2, 3, 4, 5], [1010, 100, 210, 35, -20]
  for ( var n, k=0, i=0, l=arguments.length; i<l; ++i ) {
    n = arguments[i];
    // n = 1, n = 2
    k += n;
  }
  return k;
}

anotherSum(1, 2); // 2
anotherSum(1, 2, 3, 4, 5); // 5
anotherSum(1010, 100, 210, 35, -20); // 5


// ---------------------------------------
// 재귀(再歸) 함수


// ---------------------------------------
// 즉시 실행 함수 (IIFE)

// ---------------------------------------
// 모듈 패턴

// ---------------------------------------
// 클로저(Closures)

// ---------------------------------------
// 엄격모드(Strict)

// ES5에서 추가된 엄격 모드(Strict Mode)는 기능 추가가 아닌,
// 오류 발생 가능성이 있는 코드를 제거하는 역할을 한다.

// 엄격 모드를 지원하는 브라우저에서는 오류 발생 가능성이 있는 코드 작성 시 오류를 발생하지만,
// 지원하지 않는 구형 브라우저는 이를 단순하게 무시한다. 즉, 호환성에 문제는 없다.
// (하위 호환성 유지) 엄격 모드는 개별적인 유효범위(함수, 전역 유효범위 등)
// 내부 첫 라인에 아래와 같은 문자열을 선언하면 된다.



// ---------------------------------------
// Javascript 함수는 일급객체

// Javascript 함수는 일반 함수로서
// 때론 생성자 함수, 함수의 인자, 함수의 반환 값, 객체의 멤버, 배열의 원소로서 다양하게 사용된다.

// 일급객체(First-Class Object)의 특징

// 변수, 데이터 구조 안에 담을 수 있다.
// 인자(Parameter, Argument)로 전달할 수 있다.
// 반환 값(Return Value)으로 사용할 수 있다.
// 런타임(실행) 중에 생성할 수 있다.
// 할당에 사용된 이름과 관계 없이 고유하게 식별할 수 있다.

// CASE 1. 변수에 함수를 할당할 수 있다.
// CASE 2. 함수의 인자로 함수가 전달될 수 있다.
// CASE 3. 함수의 반환 값으로 함수를 내보낼 수 있다. (객체도 가능)
// CASE 4. 객체의 속성으로 함수를 설정할 수 있다. (메소드)
// CASE 5. 배열의 원소(Item)로 함수를 메모리할 수 있다.



// ---------------------------------------
// JavaScript는 객체 지향 언어

// Javascript는 잘 알려진 객체 지향 언어의 Class와는 다른 방법(Prototype)으로 객체 지향을 구현할 수 있다.
// (ECMAScript 2015(ES6)에서는 Class를 사용할 수 있다) Javascript가 지원하는 프로토타입(Prototype)은
// 코드를 재사용하는 방법 중 하나로 객체의 능력을 상속(Inheritance) 할 수 있도록 구현한다.

// 사용자가 생성한 모든 함수는 prototype 속성(프로퍼티)을 가지는데 이는 프로토타입은 객체(빈 객체)를 참조한다.
// 프로토타입 객체에 멤버를 추가하면 상속을 통해 생성자를 통해 생성된 객체(인스턴스)는 이를 물려받아 사용가능하다.

