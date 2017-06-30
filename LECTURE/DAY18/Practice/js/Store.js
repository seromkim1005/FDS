/*! Store.js @ 2017, yamoo9.net */
var Store = function(global){
  'use strict';

  // 비공개 데이터
  var state = [];
  var config = {};

  // 옵션 설계
  // 사용자가 옵션 전달을 필수로 할 것인가? required: true
  // 사용자가 기본 데이터를 설정하도록 할 것인가? default: []
  // 사용자가 어떤 데이터 포멧으로 설정하도록 할 것인지? types: 'any'
  var default_settings = {
    required: false,
    default: [],
    types: 'any'
  };

  var type = function(o) {
    return Object.prototype.toString.call(o).slice(8,-1).toLowerCase();
  };

  var makeArray = function(o) {
    return Array.prototype.slice.call(o);
  };

  // 믹스인 패턴을 활용하는 유틸리티 함수
  var mixin = function() {
    var args = Store.makeArray(arguments);
    for (var i=0, l=args.length; i<l; i++) {
      if ( Store.type(args[i]) !== 'object' ) {
        throw '전달인자로 객체만 허용합니다.';
      }
    }
    var mixin_obj = args.shift();
    var next = args.shift();
    do {
      // mixin_obj <- o2 복제(합성)
      for ( var prop in next ) {
        if ( next.hasOwnProperty(prop) ) {
          mixin_obj[prop] = next[prop];
        }
      }
      next = args.shift();
    } while ( next );

    return mixin_obj;
  };

  var checkTypes = function(o, types) {
    var valid = false;
    var config_arr = String(types).split(',');
    if ( !o ) { throw '검증할 데이터(첫번째 전달인자)를 전달해주세요'; }
    console.log(config_arr);
    for ( var i=0, item; (item=config_arr[i++]); ) {
      if ( item === type(o) ) {
        return true;
      }
    }
    if (!valid) {
      throw '허용되지 않은 데이터 타입입니다. 허용된 데이터 타입은 ' + config.types + '과 같습니다.';
    }
  };

  // ——————————————————————————————————————
  // 생성자 함수(Class)
  // ——————————————————————————————————————
  function Store(options) {
    // new를 사용하지 않을 경우 사용자에게 경고!!!
    if ( !(this instanceof Store) ) {
      throw 'new Store() 형태로 사용하셔야 합니다.';
    }
    // 전달 받은 옵션을 사용하여 객체를 초기화
    this.init(options);
  };

  // ——————————————————————————————————————————————
  // 생성자 함수의 메서드(Static Method, Class Method)
  // ——————————————————————————————————————————————
  Store.include = function(key, value) {
    if ( key && typeof key === 'string' ) {
      Store[key] = value;
    }
    if ( key && !key.length && typeof key === 'object' ) {
      for (var prop in key) {
        if ( key.hasOwnProperty(prop) ) {
          Store[prop] = key[prop];
        }
      }
    }
  };

  Store.include({
    type: type,
    mixin: mixin,
    makeArray: makeArray,
    // 기본 설정을 사용자로 하여금 수정하게 할 것이라면?
    // 아래와 같이 공개할 수 있다.
    default_settings: default_settings
  });

  // ——————————————————————————————————————
  // 프로토타입 객체(Prototype)
  // ——————————————————————————————————————
  // 생성된 모든 객체가 공유하는 멤버(Member)
  // 프로토타입 객체를 참조하는 별칭(Alias) 설정
  Store.fn = Store.prototype = {
    constructor: Store,
    version: '0.0.1',
    init: function(options){
      // options 검증
      // 옵션이 없거나, 배열이라면?
      if ( Array.isArray(options) ) {
        state = options;
      } else {
        mixin(config, default_settings, options || {});
      }
      // 옵션이 객체라면?
      if ( type(options) === 'object' ) {
        // 옵션 객체 (사용자 전달한 옵션)
        // 개발자가 기본 설정한 객체와 사용자가 전달한 옵션 객체를 합친다.
        // 믹스인 패턴을 사용한 유틸리티 함수가 필요하다.
        state = config.default;
      }
    },
    create: function(o){
      if (!o) { throw '생성할 데이터를 전달해야 합니다.' }
      if ( config.types !== 'any' ) { checkTypes(o, config.types); }
      state.push(o);
    },
    has: function(index) {
      if (type(index) !== 'number') { throw '인덱스는 숫자여야 합니다.'; }
      return !!state[index];
    },
    get: function(index){
      if ( (type(index) === 'undefined') && index !== 0) { return state; }
      var has_index = this.has(index);
      if ( !has_index ) { throw '존재하지 않는 데이터입니다.' }
      if (has_index && index > -1) { return state[index]; }
    },
    update: function(index, item){
      if ( (!index && index !== 0) || !this.has(index)) { throw '해당 인덱스(첫번째 인자) 데이터가 없습니다.' }
      console.log(item);
      if ( config.types !== 'any' ) { checkTypes(item, config.types); }
      state.splice(index, 1, item);
    },
    delete: function(index){
      if (!index || !this.has(index)) { throw '제거할 인덱스(첫번째 인자) 데이터가 없습니다.' }
      state.splice(index, 1);
    }
  };

  // 생성자 함수 외부에 공개
  return Store;

}(window);