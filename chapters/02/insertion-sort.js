const insertionSort = array => {
  for (var j = 1; j < array.length; j++) {
    let item = array[j];
    let i = j - 1;

    while (i >= 0 && array[i] > item) {
      array[i + 1] = array[i];
      i--;
    }
    array[i + 1] = item;
  }
  return array;
};

const reverseInsertionSort = array => {
  for (var j = 1; j < array.length; j++) {
    let item = array[j];
    let i = j - 1;

    while (i >= 0 && array[i] < item) {
      array[i + 1] = array[i];
      i--;
    }
    array[i + 1] = item;
  }
  return array;
};

const linearSearch = (array, num) => {
  console.log("num", num, "array", array);
  for (var i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return i;
    }
  }
  return -1;
};

module.exports = {
  insertionSort,
  reverseInsertionSort,
  linearSearch
};
