(function () {
  'use strict';

  false.name = 2; // TypeError: Cannot create property 'name' on boolean 'false'
  (14).name = 2; // TypeError: Cannot create property 'name' on number '14'
})();
