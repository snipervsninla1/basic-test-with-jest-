
// *****exo6.js*****

export

const higthPaireNumber=(arr)=>{
const test=arr.filter(item=>item % 2 == 0);
return Math.max(...test);
}


// *****exo6.test.js*****

import { higthPaireNumber } from "./exo6";

test("even bigger number of Array", () => {
  const arr = [2, 88, 10, 99, 55];
  expect(higthPaireNumber(arr)).toBe(88);
});


