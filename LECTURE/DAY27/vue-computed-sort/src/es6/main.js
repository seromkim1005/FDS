/*! main.js @ 2017, yamoo9.net */
((global)=>{
  'use strict';

  global.app = new Vue({
    el: '.app',
    created () {
      this.one_piece = global.one_piece;
      this.one_piece_keys = Object.keys(this.one_piece[0]);
    },
    data: {
      search: '',
      one_piece_keys: [],
      one_piece: []
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
