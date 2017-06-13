/*! FDS.js @ 2017, yamoo9.net */

var FDS = function(global){

  var document = global.document;

  // ——————————————————————————————————————
  // JavaScript 유틸리티 함수
  // ——————————————————————————————————————

  function type(data) {
    return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
  }
  function isType(data, kind) {
    // validateError()를 사용하여 오류 조건을 발생시킴:
    // kind 데이터 유형이 'string'이 아니면(!), 오류를 발생시킨다. (설정 메시지 출력)
    validateError(kind, '!string', '2번째 전달인자는 문자열이어야 합니다');
    return type(data) === kind;
  }
  function validateError(data, kind, error_message) {
    data = type(data);
    if ( kind.indexOf('!') === 0 ) {
      if ( data !== kind.slice(1) ) { throw error_message || '두 값이 다르기에 오류입니다.'; }
    } else {
      if ( data === kind ) { throw error_message || '두 값은 동일하기에 오류입니다.'; }
    }
    return '오류는 발생하지 않았습니다';
  }
  function randomNumber(n) {
    n = n || 2; // 0, 1
    validateError(n, '!number', '숫자 값을 전달해주세요.');
    return Math.floor( Math.random() * n );
  }
  function randomMinMax(min, max) {
    validateError(min, '!number', '첫번째 인자 최솟값을 전달해주세요.');
    validateError(max, '!number', '두번째 인자 최댓값를 전달해주세요.');
    max = max - min;
    return Math.round( Math.random() * max ) + min;
  }
  function randomRange(n1, n2) {
    var min, max;
    min = Math.min(n1, n2);
    max = Math.max(n1, n2);
    return randomMinMax(min, max);
  }
  function isNumber(data) {
    return isType(data, 'number') && !Number.isNaN(data);
  }
  function isString(data) {
    return isType(data, 'string');
  }
  function isBoolean(data) {
    return isType(data, 'boolean');
  }
  function isFunction(data) {
    return isType(data, 'function');
  }
  function isArray(data) {
    return isType(data, 'array');
  }
  function isObject(data) {
    return isType(data, 'object');
  }
  function makeArray(o) {
    if ( !('length' in o) ) { return []; }
    return Array.prototype.slice.call(o);
  }

  // ——————————————————————————————————————
  // DOM 검증 유틸리티 함수
  // ——————————————————————————————————————
  function isElementNode(node) {
    return node.nodeType === document.ELEMENT_NODE;
  }
  function isTextNode(node) {
    return node.nodeType === document.TEXT_NODE;
  }
  function validateElementNode(node) {
    if ( !node || !isElementNode(node) ) {
      throw '요소노드를 반드시 전달해야 합니다';
    }
  }

  // ——————————————————————————————————————
  // DOM 선택 API: 유틸리티 함수
  // ——————————————————————————————————————
  function id(name) {
    validateError(name, '!string', '전달인자는 문자여야 합니다.');
    return document.getElementById(name);
  }
  function tagAll(name, context) {
    validateError(name, '!string', '전달인자는 문자여야 합니다.');
    if ( context && !isElementNode(context) && context !== document ) {
      throw '두번째 전달인자는 요소노드여야 합니다.';
    }
    return (context||document).getElementsByTagName(name);
  }
  function tag(name, context) {
    return tagAll(name, context)[0];
  }
  // IE 9+ 에서만 지원되는 신 기술
  // function classes(name, context) {
  //   return (context || document).getElementsByClassName(name);
  // }

  // IE 8- 에서도 호환되는 크로스 브라우징 유틸리티 메서드
  var classAll = function(){
    var _classAll;
    // IE 9+ 모던 브라우저
    if ( 'getElementsByClassNames' in Element.prototype ) {
      _classAll = function(name, context) {
        validateError(name, '!string', '첫번째 인자는 문자열을 전달해야 합니다.');
        if ( context && !isElementNode(context) ) { throw '두번째 인자는 요소노드여야 합니다.' }
        return (context || document).getElementsByClassName(name);
      };
    }
    // IE 8- 구형 브라우저
    else {
      _classAll = function(name, context) {
        validateError(name, '!string', '첫번째 인자는 문자열을 전달해야 합니다.');
        // name = 클래스 속성명
        // context = 상위 요소객체 | document (기본값)
        // 컨텍스트 객체 내부 또는 도큐멘트 객체 내부에서 모든 요소를 수집한다.
        context = context || document;
        var all_els = tagAll('*', context);
        var match_collection = [];
        // all_els 순환 처리
        // 사용자가 전달한 name과 일치하는 class 속성 값이 있는 요소들을 수집
        // 수집된 객체를 반환
        for ( var i=0, l=all_els.length; i<l; i++ ) {
          var el = all_els.item(i);
          if( el.className === name && name !== '' ) {
            match_collection.push(el);
          }
        }
        return match_collection;
      };
    }
    // 함수 내보내기
    // 클로저 함수
    return _classAll;
  }();

  var classSingle = function(name, context) {
    return classAll(name, context)[0];
  };

  // ——————————————————————————————————————
  // DOM 탐색 API: 유틸리티 함수
  // ——————————————————————————————————————
  var firstChild = function(){
    var _firstChild = null;
    // 조건을 1번만 확인
    if ( 'firstElementChild' in Element.prototype ) {
      _firstChild = function(el_node) {
        validateElementNode(el_node);
        return el_node.firstElementChild;
      };
    } else {
      _firstChild = function(el_node) {
        validateElementNode(el_node);
        return el_node.children[0];
      };
    }
    return _firstChild;
  }();
  var lastChild = function(){
    var _lastChild = null;
    if ( 'lastElementChild' in Element.prototype ) {
      _lastChild = function(el_node) {
        validateElementNode(el_node);
        return el_node.lastElementChild;
      };
    } else {
      _lastChild = function(el_node) {
        validateElementNode(el_node);
        var children = el_node.children;
        return children[ --children.length ];
      };
    }
    return _lastChild;
  }();
  var nextSibling = function() {
    var _nextSibling;
    if ( 'nextElementSibling' in Element.prototype ) {
      _nextSibling = function(el_node) {
        validateElementNode(el_node);
        return el_node.nextElementSibling;
      };
    } else {
      _nextSibling = function(el_node) {
        validateElementNode(el_node);
        do {
          el_node = el_node.nextSibling;
        } while(el_node && !isElementNode(el_node));
      };
      return el_node;
    }
    return _nextSibling;
  }();
  var previousSibling = function() {
    var _previousSibling;
    if ( 'previousElementSibling' in Element.prototype ) {
      _previousSibling = function(el_node) {
        validateElementNode(el_node);
        return el_node.previousElementSibling;
      };
    } else {
      _previousSibling = function(el_node) {
        validateElementNode(el_node);
        do {
          el_node = el_node.previousSibling;
        } while(el_node && !isElementNode(el_node));
        return el_node;
      };
    }
    return _previousSibling;
  }();
  var parent = function(node, depth) {
    validateElementNode(node);
    depth = depth || 1;
    do { node = node.parentNode; }
    while(node && --depth);
    return node;
  };
  var hasChild = function(node) {
    validateElementNode(node);
    return node.hasChildNodes();
  }

  // ---------------------------------------
  // 반환: FDS 네임스페이스 객체
  return {
    info: {
      version: '0.0.1',
      author: 'yamoo9',
      url: 'https://yamoo9.github.io/FDS',
      license: 'MIT'
    },
    // 공개 API
    // JavaScript 유틸리티
    type:          type,
    isNumber:      isNumber,
    isFunction:    isFunction,
    isArray:       isArray,
    isObject:      isObject,
    makeArray:     makeArray,
    validateError: validateError,
    // DOM 선택 API: 유틸리티
    id: id,
    tagAll: tagAll,
    tag: tag,
    classAll: classAll,
    classSingle: classSingle,
    // DOM 탐색 API: 유틸리티
    first: firstChild,
    last: lastChild,
    prev: previousSibling,
    next: nextSibling,
    parent: parent,
    hasChild: hasChild
  };

}(window);