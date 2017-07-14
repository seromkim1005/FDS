/*! main.js @ 2017, yamoo9.net */
(function(global, $){
  'use strict';

  // Card Component using jQuery Library //
  // Card
  //   .openContent()
  //   .closeContent()
  //   .toggleContent()
  //   .save()
  //   .edit()
  //   .delete()

  // jQuery 로드 여부 검증
  if (!$) { throw 'jQuery에 의존하는 컴포넌트입니다. jQuery를 로드해주세요.' }

  // Constructor
  function Card(o) {
    // new 를 강제화하는 검증
    if (!this) { throw 'new Card() 문법으로 사용해주세요.'; }
    // 초기에 카드 컴포넌트로 사용할 DOM 요소를 jQuery화
    this.$card = $(o);
  }

  // Prototype
  Card.fn = Card.prototype = {
    constructor: Card,
    version: '1.0.0',
    init: function(){},
    destory: function(){},
    openContent: function(){},
    closeContent: function(){},
    toggleContent: function(){},
    save: function(){},
    edit: function(){},
    delete: function(){}
  };

  // Export
  $.Card = Card;

})(window, window.jQuery);