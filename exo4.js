
// *****exo4.js*****

export const longString = (arr) => {
  let val = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > val.length) {
      val = arr[i];
    }
  }
  return val;
};


// *****exo4.test.js*****

import { longString } from "./exo4";

test("longuest string froma array", () => {
  const arr = ["bonjour", "comment", "indisponible", "oui", "anticipe"];
  expect(longString(arr)).toString("indisponible");
});

test("longuest string froma array", () => {
  const arr = ["bonjour", "comment", "oui", "venir"];
  expect(longString(arr)).toString("there is no longest string");
});


