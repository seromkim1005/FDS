/*! ajax-using-lib.js @ 2017, yamoo9.net */
(function(global, $){
  'use strict';

  var json = global.JSON;

  // Ajax 통신 사용
  $.get('/DB/people.json', function(data){
    data = json.parse(data);
    console.log(data);
  });

})(window, window.FDS);