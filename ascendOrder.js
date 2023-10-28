//{0, 1, 3,  1, 0, 1, 3, 2, 1, 2, 0, 0, 0, 1, 3, 1}
function ascending(array) {
  let n = false;
  while (!n) {
    n= true;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        n= false;
        let tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

 numbers = [0, 1, 3,  1, 0, 1, 3, 2, 1, 2, 0, 0, 0, 1, 3, 1];
ascending(numbers);
console.log(numbers);