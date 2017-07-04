/*! ajax-using-lib.js @ 2017, yamoo9.net */
(function(global, $){
  'use strict';

  // Ajax 통신 사용
  $.get('/DB/user.json', function(data){
    $.each($.parse(data), function(key, value){
      if(key === 'results') {
        $.each(value, function(o) {
          console.log(o);
        });
      }
    });
  });

})(window, window.FDS);