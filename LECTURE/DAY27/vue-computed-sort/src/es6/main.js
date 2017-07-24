/*! main.js @ 2017, yamoo9.net */
((global)=>{
  'use strict';

  global.app = new Vue({
    el: '.app',
    data: {
      search: '',

    },
    computed: {

    },
    methods: {
      inputChangeSearch(event){
        this.search = event.target.value;
      }
    }

  });



})(window);
