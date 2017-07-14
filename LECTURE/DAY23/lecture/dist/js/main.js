'use strict';

/*! main.js @ 2017, yamoo9.net */

// Card 컴포넌트 정의
// Card Component using jQuery Library //

// Card
//   .openContent()
//   .closeContent()
//   .toggleContent()
//   .save()
//   .edit()
//   .delete()

(function (global, $) {
  'use strict';

  // jQuery 로드 여부 검증

  if (!$) {
    throw 'jQuery에 의존하는 컴포넌트입니다. jQuery를 로드해주세요.';
  }

  // Card 컴포넌트 정의 구간에서만 사용 가능한 지역 변수, 함수 정의
  var $card = void 0,
      $toggle = void 0,
      $save = void 0,
      $edit = void 0,
      $delete = void 0;
  // 비공개 지역 함수
  function bind(card) {
    $toggle.on('click', onClickToggle.bind($toggle, card));
    $save.on('click', onClickSave.bind($save, card));
    $edit.on('click', onClickEdit.bind($edit, card));
    $delete.on('click', onClickDelete.bind($delete, card));
  }
  function onClickToggle(card, e) {
    e.preventDefault();
    card.toggleContent();
  }
  function onClickSave(card, e) {
    e.preventDefault();
    card.save();
  }
  function onClickEdit(card, e) {
    e.preventDefault();
    card.edit();
  }
  function onClickDelete(card, e) {
    e.preventDefault();
    card.delete();
  }

  // ----------------------------------------------------------------------
  // Constructor
  function Card(o) {
    // new 를 강제화하는 검증
    if (!this) {
      throw 'new Card() 문법으로 사용해주세요.';
    }
    // 초기에 카드 컴포넌트로 사용할 DOM 요소를 jQuery화
    $card = $(o);
    this.init();
  }

  // Prototype
  Card.fn = Card.prototype = {
    constructor: Card,
    version: '1.0.0',
    init: function init() {
      $toggle = $card.find('.card-toggle-btn');
      $save = $card.find('.card-save-btn');
      $edit = $card.find('.card-edit-btn');
      $delete = $card.find('.card-delete-btn');
      bind(this);
    },
    destory: function destory() {},
    openContent: function openContent() {},
    closeContent: function closeContent() {},
    toggleContent: function toggleContent() {
      console.log('toggle');
    },
    save: function save() {
      console.log('save');
    },
    edit: function edit() {
      console.log('edit');
    },
    delete: function _delete() {
      console.log('delete');
    }
  };

  // Export
  $.Card = Card;
})(window, window.jQuery);

// Card 컴포넌트 사용
(function (global, $) {
  'use strict';

  // var $card = $('.twitter-card');
  // $card.on('click', function() {
  //   $.shake( $card );
  // });

  global.t_card = new $.Card('.twitter-card');

  // console.log(t_card);

  global.t_card.toggleContent();
})(window, window.jQuery);