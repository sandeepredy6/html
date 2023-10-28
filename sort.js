//{0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}

function Sort(array) {
    let arr = false;
    while (!arr) {
     arr= true;
      for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
          arr = false;
          let tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }
  
  var numbers = [0, 1, 1, 0, 1, 2, 1, 3, 2, 2, 3, 3, 0, 0, 0, 1];
  Sort(numbers);
  console.log(numbers);
  