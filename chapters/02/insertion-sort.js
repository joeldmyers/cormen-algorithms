const insertionSort = array => {
  console.log("fired method");
  for (var j = 1; j < array.length; j++) {
    let item = array[j];
    let i = j - 1;

    while (i >= 0 && array[i] > item) {
      array[i + 1] = array[i];
      i--;
    }
    array[i + 1] = item;
  }
  console.log("array!", array);
  return array;
};

module.exports = insertionSort;
