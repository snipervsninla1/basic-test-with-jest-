
// *****exo1.js*****

export function random(x) {
  var t = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  if (x === t) {
    return "Good Work";
  }
  return "Not matched";
}


// *****exo1.test.js*****

import {random} from "./exo1";

test('takes an aleatory number and returns a word',()=>{
expect(random(4)).toBe("Not matched")});


