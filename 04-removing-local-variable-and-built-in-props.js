(function () {
  'use strict';

  const list = [];

  delete list; // SyntaxError: Delete of an unqualified identifier in strict mode.
})();

(function () {
  'use strict';

  delete [].length; // TypeError: Cannot delete property 'length' of [object Array]
})();
