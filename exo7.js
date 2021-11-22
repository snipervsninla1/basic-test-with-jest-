
// *****exo7.js*****

export const somCube = (arr) => {
  let som = 1;
  let cub = 0;

  for (let i = 0; i < arr.length; i++) {
    som = Math.pow(arr[i], 3);
    cub += som;
  }
  return cub;
};



// *****exo7.test.js*****

import { somCube } from "./exo7";

test("sum of cubes of all ", () => {
  const arr = [1, 2, 3];

  expect(somCube(arr)).toBe(36);
});



