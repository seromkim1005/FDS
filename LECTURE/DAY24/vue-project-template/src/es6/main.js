/*! main.js @ 2017, yamoo9.net */

// Reactivity Engine
// https://goo.gl/nWp9cu
((global) => {
  'use strict';

  function Seer (dataObj) {
    let signals = {};

    observeData(dataObj);

    return {
      data: dataObj,
      observe,
      notify
    };

    function observe (property, signalHandler) {
      if(!signals[property]) signals[property] = [];
      signals[property].push(signalHandler);
    }

    function notify (signal) {
      if(!signals[signal] || signals[signal].length < 1) return;
      signals[signal].forEach((signalHandler) => signalHandler());
    }

    function makeReactive (obj, key) {
      let val = obj[key];

      // ES5 (2009, IE 9+)
      Object.defineProperty(obj, key, {
        get () {
          return val;
        },
        set (newVal) {
          val = newVal;
          notify(key);
        }
      });
    }

    function observeData (obj) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          makeReactive(obj, key);
        }
      }
      parseDOM(document.body, obj);
    }

    function syncNode (node, observable, property) {
      node.textContent = observable[property];
      observe(property, () => node.textContent = observable[property]);
    }

    function parseDOM (node, observable) {
      const nodes = document.querySelectorAll('[s-text]');

      for (const node of nodes) {
        syncNode(node, observable, node.attributes['s-text'].value);
      }
    }

  }

  global.Seer = Seer;

})(window);


// Data(State)
((global) => {
  'use strict';

  // global.user = global.Seer({
  //   name: 'henry',
  //   age: 26,
  //   message: 'henry is hansome guy'
  // });

  global.user = {
    name: 'henry',
    age: 26,
    message: 'henry is hansome guy'
  };

})(window);

// Vanilla Script
((global, user) => {
  'use strict';

  let document = global.document;
  let user_input = null;
  let print_user_input = null;

  function init() {
    user_input = document.querySelector('.user-input');
    print_user_input = document.querySelector('.print-user-input');
    render();
    bind();
  }

  function bind() {
    user_input.addEventListener('keyup', update);
  }

  function render() {
    let msg = user.data.message;
    user_input.value = msg;
    print_user_input.textContent = msg;
  }

  function update(e) {
    let value = e.target.value;
    user.data.message = value;
    print_user_input.textContent = value;
  }

  init();


}) //(window, window.user);

// jQuery Library
;((global, user, $) => {
  'use strict';
  let $user_input, $print_user_input;
  function init() {
    $user_input = $('.user-input');
    $print_user_input = $('.print-user-input');
    render();
    bind();
  }
  function bind() {
    $user_input.on('keyup', update);
  }
  function render() {
    let value = user.message;
    $user_input.val(value);
    $print_user_input.text(value);
  }
  function update(e) {
    let value = e.target.value;
    user.message = value; // Update State
    $print_user_input.text(value); // Update View
  }
  init();
})(window, window.user, window.jQuery);

// Vue Framework
((global, user, Vue) => {
  'use strict';

  let document = global.document;

  // Create Vue {} Instance
  new Vue({
    // Mount DOM Element
    el: '.vue-demo',
    // Vue Data
    data: {
      message: 'Hello Vue :-)'
    }
  });

})(window, window.user, window.Vue);
