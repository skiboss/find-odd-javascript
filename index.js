console.log('Write solutions here');

function findOdd(array) {
  return array.filter((element) => element % 2 != 0);
}

console.log(findOdd([1, 2, 3, 4, 5, 6, 7]));
