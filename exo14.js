
// *****exo14.js*****

export const checkString = (val) =>
  val !== val.toUpperCase()
    ? "cette chaine est en mminuscule"
    : "cette chaine est en majuscule";
a



// *****exo14.test.js*****

import { checkString } from "./exo14";

test("check the string", () => {
  const val = "good";
  expect(checkString(val)).toString("cette chaine est en mminuscule");
});

test("check the string", () => {
  const val = "BAD";
  expect(checkString(val)).toString("cette chaine est en majuscule");
});




