const {
  insertionSort,
  reverseInsertionSort,
  linearSearch
} = require("./insertion-sort");

describe("Insertion Sort Method", () => {
  test("It should properly sort number arrays", () => {
    expect(insertionSort([5, 1, 3])).toEqual([1, 3, 5]);
    expect(insertionSort([5, 2, 4, 6, 1, 3])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe("Reverse Insertion Sort Method", () => {
  test("It should properly sort number arrays but in decreasing order", () => {
    expect(reverseInsertionSort([5, 1, 3])).toEqual([5, 3, 1]);
    expect(reverseInsertionSort([5, 2, 4, 6, 1, 3])).toEqual([
      6,
      5,
      4,
      3,
      2,
      1
    ]);
  });
});

describe("Linear Search Method", () => {
  test("It should properly check if ", () => {
    expect(linearSearch([5, 1, 3], 3)).toEqual(2);
    expect(linearSearch([5, 2, 4, 6, 1, 3], 6)).toEqual(3);
  });
});
