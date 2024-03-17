console.log(this); // undefined

function example() {
  console.log('example', this);
}

example();
