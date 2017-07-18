/*! vue-study.js @ 2017, yamoo9.net */

(function(global, Vue){
  'use strict';

  global.d = {
    title: 'Vue is Awesome',
    count: 0
  };

  new Vue({
    el: '.app',
    data: d,
    methods: {
      increaseCount() {
        this.count++;
      }
    }
  });

})(window, window.Vue);