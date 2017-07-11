'use strict';

/*! main.js @ 2017, yamoo9.net */

// JSON:
// https://api.myjson.com/bins/f0etn
(function (global, $) {
  'use strict';

  var api_id = 'f0etn';
  var api_address = 'https://api.myjson.com/bins/' + api_id;

  // Ajax GET
  $.get(api_address).then(function (data) {
    console.groupCollapsed('jQuery Ajax 데이터 로드');

    console.log(data);

    console.groupEnd('jQuery Ajax 데이터 로드');
  });
})(window, window.jQuery);

(function (global, $) {
  'use strict';

  console.groupCollapsed('jQuery 버전 출력');

  console.log('jQuery 버전? $().jquery = ', $().jquery);
  console.log('jQuery 버전? $.fn.jquery = ', $.fn.jquery);
  console.log('jQuery 버전? $.prototype.jquery = ', $.prototype.jquery);
  console.log('jQuery 버전? jQuery.prototype.jquery = ', jQuery.prototype.jquery);

  console.groupEnd('jQuery 버전 출력');
})(window, window.jQuery);

(function (global, $) {
  'use strict';

  // 메서드 체이닝이 가능한 이유는
  // jQuery 객체가 메서드(모든 메서드가 가능한 것은 아님)마다 반환되기 때문

  $('h1').css('color', 'tan').addClass('is-3').removeClass('is-1');
})(window, window.jQuery);