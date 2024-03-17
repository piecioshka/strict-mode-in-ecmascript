// `if` statement:

if (true) {
  function fn() {}
}

console.log(typeof fn); // 'undefined'

// `for` loop:

for (let i = 0; i < 10; i++) {
  function fn() {}
}

console.log(typeof fn); // 'undefined'

// `while` loop:

let j = 0;

while (j < 3) {
  function fn() {}
  j++;
}

console.log(typeof fn); // 'undefined'

// `do...while` loop:

let k = 0;

do {
  function fn() {}
  k++;
} while (k < 3);

console.log(typeof fn); // 'undefined'
