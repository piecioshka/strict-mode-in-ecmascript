(function () {
  'use strict';

  function fn(a, a) {
    // SyntaxError: Duplicate parameter name not allowed in this context
    console.log(a);
  }
})();
