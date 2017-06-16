/*! dom.script.js @ 2017, yamoo9.net */
(function(global, document, $){
  'use strict';

  // .wrapper 요소 내부에는 p 요소가 있다.
  // p 요소를 찾아 그 앞에 새로운 요소노드를 삽입해보자.

    // ------------------------------------------------------------
    // 방법 1) .wrapper 요소를 찾아서...
    function methodOne() {
      var wrapper = $.selector('.wrapper');
      var new_node = $.createEl('h1', 'insertBefore');
      new_node.setAttribute('lang', 'en');
      new_node.setAttribute('class', 'wrapper-headline');
      // 문서의 특정 요소노드에 마운트(Mount)되지 않은 상태
      console.log('new_node:', new_node);
      // ~ 앞에 삽입해보자.
      // 부모노드.insertBefore(삽입노드, 부모노드를_통해_찾은_자식노드)
      // 이벤트가 요구된다면
      wrapper.onmouseover = function() {
        // 문서의 특정 요소노드에 마운트(Mount)된 상태
        // this.insertBefore(new_node, $.selector('p', this));
        $.insertBefore(new_node, $.selector('p', this));
        // $.before($.selector('p', this), new_node);
        // 이벤트의 제거
        this.onmouseover = null;
      };
    }
    // methodOne();

    // ------------------------------------------------------------
    // 방법 2) .wrapper p 요소를 찾아서...
    function methodTwo(){
      // 문서에서 대상 찾기
      var wrapper_p = $.selector('.wrapper p');
      var target = $.selector('.wrapper .target');
      // 전역에 changePosition() 함수를 공개
      global.changePosition = function(button) {
        // console.log('this:', this);
        // console.log('button:', button);
        button.setAttribute('disabled', 'disabled');
        button.removeAttribute('onclick');
        // console.log('changePosition() 함수 실행');
        // 상대적으로 insertBefore() 메서드 사용하기
        // 목표노드.부모노드.insertBefore(삽입노드,목표노드);
        // $.parent(wrapper_p).insertBefore(target, wrapper_p);
        $.insertBefore(target, wrapper_p);
        // $.before(wrapper_p, target);
      };
    }
    methodTwo();

    // ------------------------------------------------------------
    // prependChild() 데모
    function prependDemo() {
      var button = $.createEl('button', '대상 앞에 삽입');
      button.setAttribute('type', 'button');
      button.setAttribute('class', 'button is-prepend');
      var prependAction = function() {
        $.prependChild($.selector('.prepend-demo'), button);
      };
      // 특정 시간이 지난 후에 ....
      global.setTimeout(prependAction, 2000);
    }
    prependDemo();
    // ------------------------------------------------------------
    // insertAfter() 데모
    function insertAfterDemo() {
      var button = $.createEl('button', '~앞에 삽입');
      button.setAttribute('type', 'button');
      button.setAttribute('class', 'insert-after');
      var result = $.insertAfter(button, $.selector('.wrapper button'));
      console.log('result:', result);
      console.log('result.textContent:', result.textContent);
    }
    insertAfterDemo();

    function removeChildDemo() {
      global.setTimeout(afterTimeRemove, 2200);
    }
    removeChildDemo();
    function afterTimeRemove() {
      var removed_el = $.selector('.target');
      removed_el = $.removeChild(removed_el);
      // global.setTimeout(function(){
      //   afterTimeAndAttach(removed_child);
      // }, 3000);

      global.setTimeout(afterTimeAndAttach.bind(removed_el), 3000);
    }
    function afterTimeAndAttach() {
      // console.log(this); // removed_child
      $.insertAfter(this, $.selector('.prepend-demo :first-child'));
    }


})(window, window.document, window.FDS);

;