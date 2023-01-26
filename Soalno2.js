function test(n) {
  if(n >= 10) {
    return test(n - 1);
  } else {
    return 2 * n - 1;
  }
}
let result = test(99);
console.log(result);