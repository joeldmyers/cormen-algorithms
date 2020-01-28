const insertionSort = require("./insertion-sort");

describe("Insertion Sort Method", () => {
  test("It should properly sort number arrays", () => {
    expect(insertionSort([5, 1, 3])).toEqual([1, 3, 5]);
    expect(insertionSort([5, 2, 4, 6, 1, 3])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
