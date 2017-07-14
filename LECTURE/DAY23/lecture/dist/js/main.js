'use strict';

/*! main.js @ 2017, yamoo9.net */

// Card 컴포넌트 정의
// Card Component using jQuery Library //
(function (global, $) {
  'use strict';

  // jQuery 로드 여부 검증

  if (!$) {
    throw 'jQuery에 의존하는 컴포넌트입니다. jQuery를 로드해주세요.';
  }

  // 비공개 지역 함수
  function bind(card) {
    card._$toggle.on('click', onClickToggle.bind(card._$toggle, card));
    card._$save.on('click', onClickSave.bind(card._$save, card));
    card._$edit.on('click', onClickEdit.bind(card._$edit, card));
    card._$delete.on('click', onClickDelete.bind(card._$delete, card));
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
    this._$card = $(o);
    this.init();
  }

  // Prototype
  Card.fn = Card.prototype = {
    constructor: Card,
    version: '1.0.0',
    init: function init() {
      // card {} 내부 버튼 컴포넌트 참조
      this._$toggle = this._$card.find('.card-toggle-btn');
      this._$save = this._$card.find('.card-save-btn');
      this._$edit = this._$card.find('.card-edit-btn');
      this._$delete = this._$card.find('.card-delete-btn');
      // 이벤트 바인딩
      // card {} 전달
      bind(this);
    },
    isOpenedContent: function isOpenedContent() {
      return !this._$toggle.attr('aria-label').includes('open');
    },
    openContent: function openContent() {
      var change_open_text = this._$toggle.attr('aria-label').replace('open', 'close');
      this._$toggle.attr('aria-label', change_open_text);
      this._$toggle.find('.fa-angle-up').addClass('fa-angle-down').removeClass('fa-angle-up');
      this._$card.find('.card-content').slideDown(100);
    },
    closeContent: function closeContent() {
      var $toggle = this._$toggle;
      var change_open_text = $toggle.attr('aria-label').replace('close', 'open');
      $toggle.attr('aria-label', change_open_text);
      $toggle.find('.fa-angle-down').addClass('fa-angle-up').removeClass('fa-angle-down');
      this._$card.find('.card-content').slideUp(100);
    },
    toggleContent: function toggleContent() {
      this.isOpenedContent() ? this.closeContent() : this.openContent();
    },
    save: function save() {
      console.log('save');
    },
    edit: function edit() {
      console.log('edit');
    },
    delete: function _delete() {
      this._$card.remove();
    }
  };

  // Export
  $.Card = Card;
})(window, window.jQuery);

// Card 컴포넌트 사용
(function (global, $) {
  'use strict';

  global.t_card = new $.Card('.twitter-card');
  global.f_card = new $.Card('.facebook-card');
})(window, window.jQuery);