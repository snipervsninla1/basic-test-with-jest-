
// *****exo10.js*****

export const extractVal = (arr) => {
  return arr[(0, 1, 2)];
};



// *****exo10.test.js*****

import { extractVal } from "./exo10";
test("extract value of index for specified array", () => {
  const arr = ["a", "b", "c", 3, 2, 1];
  expect(extractVal(arr)).toMatch("c");
});



