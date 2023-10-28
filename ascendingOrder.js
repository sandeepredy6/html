//{0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
function ascending(array) {
  let arry = false;
  while (!arry) {
    arry= true;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        arry = false;
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