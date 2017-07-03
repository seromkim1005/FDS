/*! FDS/ajax.js @ 2017, yamoo9.net */
;(function(global){
  'use strict';

  // 네임스페이스 패턴
  global.FDS = global.FDS || {};

  // 비공개
  var xhr = null;
  var JSON = global.JSON;
  var config = {};
  var defaults = {
    url: '',
    method: 'GET',
    async: true,
    params: null,
    success: function() {},
    fail: function() {}
  };
  var type = function(data) {
    return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
  };
  var isType = function(data, kind) {
    return type(data) === kind;
  };
  var mixin = function() {
    var args = Array.prototype.slice.call(arguments);
    for (var i=0, l=args.length; i<l; i++) {
      if ( !isType(args[i], 'object') && !isType(args[i], 'function') ) { throw '전달인자로 객체만 허용합니다.'; }
    }
    var mixin_obj = args.shift();
    var next = args.shift();
    do {
      for ( var prop in next ) {
        if ( next.hasOwnProperty(prop) ) { mixin_obj[prop] = next[prop]; }
      }
      next = args.shift();
    } while ( next );
    return mixin_obj;
  };

  // 생성자 함수(팩터리 패턴 사용)
  var ajax = function(options, success, fail) {
    // new를 강제화 하지 않는 패턴
    if ( !(this instanceof ajax) ) { return new ajax(options, success, fail); }
    // options가 전달되지 않은 경우
    if ( !options ) { mixin(config, defaults, {}); }
    // options 전달인자가 문자열인 경우
    if ( typeof options === 'string' ) { mixin(config, defaults, {url: options}); }
    // options 전달인자가 객체일 경우
    if ( typeof options === 'object' && !Array.isArray(options) ) { mixin(config, defaults, options) };
    // success, fail 전달인자 덮어쓰기
    if (typeof success === 'function') { config.success = success; }
    if (typeof fail === 'function') { config.fail = fail; }
    // 객체 초기화
    this.init(config);
  };

  // 유틸리티
  ajax.param = function(o) {
    var encode_string = '';
    for ( var key in o) {
      if ( o.hasOwnProperty(key) ) {
        if ( encode_string.length > 0 ) { encode_string += '&'; }
        else { encode_string += global.encodeURI(key + '=' + o[key]); }
      }
    }
    return encode_string;
  };
  ajax.parse = function(str) {
    return JSON.parse(str);
  };
  ajax.stringify = function(o) {
    return JSON.stringify(o);
  };
  ajax.get = function(url, success, fail) {
    return ajax(url, success, fail);
  };
  ajax.post = function(url, params, success, fail) {
    var options = {
      method: 'POST',
      url: url,
      params: params || {}
    };
    return ajax(options, success, fail);
  };

  // 프로토타입
  ajax.prototype = {
    constructor: ajax,
    init: function(config, success, fail) {
      var o = this;
      xhr = new global.XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if ( this.status === 200 && this.readyState === 4 ) {
          config.success.call(o, xhr.response, xhr);
        } else {
          config.fail.call(o, xhr.status, xhr);
        }
      };
      xhr.open(config.method, config.url, config.async);
      switch (config.method.toUpperCase()) {
        case 'GET': this.get(xhr); break;
        case 'POST': this.post(xhr, config.params); break;
      }
      return this;
    },
    get: function(xhr) {
      xhr.send(null);
      return this;
    },
    post: function(xhr, params) {
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      params = ajax.param(params);
      xhr.send(params);
      return this;
    }
  };

  // FDS 네임스페이스 객체의 메서드로 공개
  global.FDS.ajax = ajax;

})(window);