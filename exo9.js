
// *****exo9.js*****

export const filterArray = (arr) => {
  const secondarr = arr.filter((item) => item > 5);
  return secondarr;
};


// *****exo9.test.js*****

import { filterArray } from "./exo9";

test("filter array", () => {
  // const arr =['a','b',10,8,1,4];

  expect(filterArray(["a", "b", 10, 8, 1, 4])).toEqual([10, 8]);
});


