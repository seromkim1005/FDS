const Todos = (function(global){
  'use strict';

  // 비공개 변수
  let document = global.document;
  // 비공개 데이터
  let config = {};
  let defaults = {
    el: null,
    template: '',
    data: {},
    methods: {}
  };
  // 비공개 함수
  let init = confing => {
    // 템플릿 문서화
    if(!config.template.trim()) { throw 'template는 초기화에 필요한 필수 속성입니다.'; }
    let template = createfragDOM(config.template);
    // 마운팅
    let mount_el = document.querySelector(config.el);
    mount_el.appendChild(template);
    // 루프 템플릿
    loopTemplate(template);
  };
  let createfragDOM = template => {
    template = template.includes('#') ? document.querySelector(template).innerHTML : template;
    let frag = document.createDocumentFragment();
    let root = document.createElement('div');
    frag.appendChild(root);
    root.innerHTML = template;
    return root.children[0];
  };
  let loopTemplate = template => {
    let loop = template.querySelector('[data-for]');
    let content = loop.dataset.for.split('in')[0].trim();
    let match = loop.dataset.for.split('in')[1].trim();
    for (var item in config.data) {
      if (config.data.hasOwnProperty(item) && item === match) {
        match = config.data[item];
      }
    }
    // 렌더링 템플릿
    renderTemplate(template, loop, match, content);
  };
  let renderTemplate = (template, loop, data, content) => {
    let backup_loop = loop;
    template.removeChild(loop);
    data.forEach(function(item, index){
      backup_loop.removeAttribute('data-for');
      let binding_el = backup_loop.querySelector('[data-content]');
      if ( binding_el && binding_el.dataset.content === content ) {
        binding_el.innerHTML = item.trim();
      }
      template.appendChild( backup_loop.cloneNode(true) );
    });
    // 이벤트 바인딩
    customEventBinding(template);
  };
  let customEventBinding = template => {
    let clicks = template.querySelectorAll('[data-click]');
    Array.prototype.slice.call(clicks).forEach(function(clickable) {
      var match = clickable.getAttribute('data-click');
      for (var method in config.methods) {
        if (config.methods.hasOwnProperty(method) && method === match) {
          clickable.removeAttribute('data-click');
          clickable.onclick = config.methods[method];
        }
      }
    });
  };

  // 공개 Class
  class Todos {
    // 생성자
    constructor(options) {
      // 객체 합성
      Object.assign(config, defaults, options);
      // 초기화
      init(config);
    }
    // GETTER 함수
    get _config() {
      return config;
    }
  }

  // 외부에 공개
  return Todos;

})(window);