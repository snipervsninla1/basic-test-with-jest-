
// *****exo3.js*****

export function multiDiv(x, y) {
  if (y === 0) {
    return (x + "*" + y + "=" + x * y +" et " + x + "/" + y +" est impossible par " + y);
  }
  return x + "*" + y + "=" + x * y + "et" + x + "/" + y + "=" + x / y;
}

// *****exo3.test.js*****

import { multiDiv } from "./exo3";

test("multiply and divide two numbers", () => {
  expect(multiDiv(2, 0)).toBe("2*0=0 et 2/0 est impossible par 0");
});


