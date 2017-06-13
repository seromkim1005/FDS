/*! photo.showcase.js @ 2017, yamoo9.net */
(function(global, _){
  'use strict';

  var photolist = [];
  var photo_info = {
    total: 10,
    width: 900,
    height: 420
  }

  // BigImage
  for ( var i=0; i<photo_info.total; i++ ) {
    var path = 'https://unsplash.it/'+photo_info.width+'/'+photo_info.height+'?image=' + i;
    photolist.push(path);
  }

  console.log(photolist.join(' '));

})(window, window.FDS);