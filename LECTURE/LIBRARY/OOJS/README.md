# JavaScript [객체 지향 프로그래밍(OOP)](https://goo.gl/ohoxxc)

객체 지향 프로그래밍(Object-Oriented Programming)으로, 프로그램을 어떻게 설계해야 하는지에 대한 일종의 개념이자 방법론을 말한다.

프로그램을 단순히 데이터와 처리 방법으로 나누는 것이 아니라, 프로그램을 수많은 '객체'라는 기본 단위로 나누고 이 객체들의 상호작용으로 서술하는 방식이다.

**절차적 프로그래밍과 비교**

기존 절차적 프로그래밍에서는 함수를(메소드) 기계, 데이터를 원료로 생각해서 데이터가 함수 사이를 통과하면서 차츰 순서대로 가공돼 나가는 방식으로 이해한다면 객체 지향 프로그래밍에서는 데이터를 중심으로 메서드가 데이터에 접근해서 수정한다는 개념이다. 즉 원료가 움직이냐 기계(함수{메소드})가 움직이냐의 차이.

### Store 라이브러리

저장소(Store) 관리 객체

데이터 관리 CRUD (`Create(생성)`, `Read(읽기)`, `Update(수정)`, `Delete(제거)`)

- Store
  - state [비공개]
  - read
  - write
  - update
  - remove

```js
// 위시리스트 데이터 관리 객체 생성
var wish_list = new Store();

// 인덱스 2 값에 기억된 데이터 읽기
wish_list.read(2);
// 마지막 인덱스 값에 새로운 데이터 쓰기
wish_list.write({ content: '재능 기부' });
// 인덱스 0 값에 기억된 데이터 수정
wish_list.update(0, { content: '세계일주' });
// 인덱스 3 값에 기억된 데이터 제거
wish_list.remove(3);
```


### FDS 라이브러리

DOM(Document Object Model) 컨트롤 객체

- 생성자 함수(Function, Class)
  - CSS 선택자 문자열
  - HTML 문자열<br>검증 정규식 `/^\s*<(\w+|!)[^>]*>/`
  - Element Node
  - Nodelist Array
  - Nodelist
  - HTML Collection
  - 스태틱 메서드(Static Methods) / 유틸리티 메서드

- 프로토타입 객체(Object, Prototype)
  - 인스턴스 메서드(Instance Methods, 객체 공용(공유))
  - 메서드 체이닝(Method Chaining)
  - 속성 확장(Extend Properties)

```js
// 팩토리 함수
function FDS(selector, context) {
  // 생성자 함수를 통해 생성된 객체 반환
  return new FDS.prototype.init(selector, context);
};

// 생성자 함수
FDS.prototype.init = function(param, context) {

  // 컨텍스트 설정
  context = !context ? document : (context && context.nodeType) ? context : qa(context)[0];

  // 1. 빈 문자열 또는 아무 값도 전달하지 않은 경우
  if ( !param || typeof param === 'string' && param.trim() === '' ) {
    this.length = 0;
    return this;
  }

  // 2. HTML 문자열을 전달한 경우
  if ( typeof param === 'string' && /^\s*<(\w+|!)[^>]*>/.test(param) ) {
    var frag = document.createDocumentFragment();
    var temp = document.createElement('div');
    frag.appendChild(temp);
    frag.firstChild.innerHTML = param;
    var temp_children = frag.firstChild.children;
    for ( var i=0, l=temp_children.length; i<l; i++ ) {
      this[i] = temp_children[i];
    }
    this.length = l;
    return this;
  }

  // 3. 요소노드를 전달한 경우
  if ( param && param.nodeName ) {
    this.length = 1;
    this[0] = param;
    return this;
  }

  // 4. 문자열을 전달한 경우: CSS 선택자
  var nodes;
  if ( typeof param === 'string' ) {
    nodes = context.querySelectorAll(param);
  }
  // 5. 배열 또는 유사배열을 전달한 경우:
  //    Nodelist Array, Nodelist, HTML Collection
  else {
    nodes = param;
  }
  for ( var i=0, l=nodes.length; i<l; i++ ) {
    this[i] = nodes[i];
  }
  this.length = l;
  return this;

};
```

**데이터 관리 객체를 사용한 예시**

```js
var FDS = (function(global){
  'use strict';

  // 지역 내 참조 객체
  var document = global.document;

  // 팩토리 함수
  var FDS = function(selector, context){
    return new FDS.prototype.init(selector, context);
  };

  // 공개 유틸리티 함수
  FDS.each = function(o, callback) {
    Array.from(o).forEach(callback);
  };

  // 비공개 유틸리티 함수
  var _qa = function(selector, context) {
    return (context || document).querySelectorAll(selector);
  };

  // Private 데이터 관리 객체
  var _dataset = {
    store: [],
    current: 0,
    // getData(index)
    getData: function(index){
      index = index || this.current - 1;
      return this.store[index];
    },
    // pushData(item)
    pushData: function(item) {
      this.store.push(item);
      this.current++;
    },
    // setData(index, item)
    setData: function(index, item) {
      this.store.splice(index, 0, item);
      this.current++;
    },
    // removeData(index)
    removeData: function(index) {
      this.store.splice(index, 1);
      this.current++;
    },
    undoData: function() {
      this.store.length = --this.current;
      return this.getData(this.store.length - 1);
    }
  };

  // 팩토리 함수에서 사용하는 생성자 함수
  var $ = FDS.prototype.init = function(selector, context) {
    if ( selector.nodeType === 1 ) {
      _dataset.pushData([selector]);
    } else {
      _dataset.pushData( _qa(selector, context) );
    }
  };

  // 프로토타입 객체
  $.prototype = {
    constructor: FDS,
    _collection: function() {
      return _dataset.store;
    },
    find: function(selector) {
      var nodelist = _dataset.getData();
      var collection = [];
      FDS.each(nodelist, function(node) {
        FDS.each(_qa(selector, node), function(n){
          collection.push(n);
        });
      });
      _dataset.pushData( collection );
      return this;
    },
    filter: function(callback) {
      var nodelist = _dataset.getData();
      var filteredlist = nodelist.filter(callback);
      _dataset.pushData( filteredlist );
      return this;
    },
    eq: function(index) {
      this.filter(function(item, n){
        return n === index;
      });
      return this;
    },
    undo: function() {
      var nodelist = _dataset.undoData();
      return this;
    },
    addClass: function(name) {
      var nodelist = _dataset.getData();
      FDS.each(nodelist, function(n){
        n.classList.add(name);
      });
      return this;
    },
    removeClass: function(name) {
      var nodelist = _dataset.getData();
      FDS.each(nodelist, function(n){
        n.classList.remove(name);
      });
      return this;
    },
    toggleClass: function(name) {
      var nodelist = _dataset.getData();
      FDS.each(nodelist, function(n){
        n.classList.toggle(name);
      });
      return this;
    },
    on: function(type, callback) {
      var nodelist = _dataset.getData();
      FDS.each(nodelist, function(n,i) {
        n.addEventListener(type, callback);
      });
      return this;
    },
    off: function(type, callback) {
      var nodelist = _dataset.getData();
      FDS.each(nodelist, function(n,i) {
        n.removeEventListener(type, callback);
      });
      return this;
    }
  };

  // 팩토리 함수 반환
  return FDS;

})(window);
```

### FDS 구조

- Core
  - `FDS()`
  - `.each()`
- Traversing
  - `.find()`
  - `.children()`
  - `.filter()`
  - `.eq()`
  - `.lt()`
  - `.gt()`
  - `.slice()`
  - `.first()`
  - `.last()`
  - `.next()`
  - `.prev()`
  - `.parent()`
  - `.siblings()`
- Manipulation
  - `.html()`
  - `.text()`
  - `.append()`
  - `.prepend()`
  - `.before()`
  - `.after()`
  - `.replace()`
  - `.clone()`
  - `.remove()`
- Attributes
  - `.attr()`
  - `.removeAttr()`
- CSS
  - `.css()`
  - `.hasClass()`
  - `.addClass()`
  - `.removeClass()`
  - `.toggleClass()`
  - `.radioClass()`
- Events
  - `.on()`
  - `.off()`