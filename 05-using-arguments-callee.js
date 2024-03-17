function first() {
  console.log('first');
  second();
}

function second() {
  console.log('second', arguments.callee); // TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
}

first();
