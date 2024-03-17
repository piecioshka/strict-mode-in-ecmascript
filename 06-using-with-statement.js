const person = {
  name: 'Piotr',
  surname: 'Kowalski',
};

with (person) {
  // SyntaxError: Strict mode code may not include a with statement
  console.log({ name });
  console.log({ surname });
}
