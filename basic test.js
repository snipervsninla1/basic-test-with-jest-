// *****addition.js*****

export
  const add=(num1,num2)=>num1+num2;

// *****addition.test.js*****

import { add } from "./addition";
  test('addition of two numbers',()=>{
    expect(add(2,5)).toBe(7);
  });

// *****division.js*****

export
  const div=(dividing,divisor)=>divisor===0?'impossible':dividing/divisor;

// *****division.test.js*****

import { div } from "./division";
  test("division of two numbers", () => {
    expect(div(2, 0)).toBe("impossible");
  });
  test("division of two numbers", () => {
    expect(div(2, 2)).toBe(1);
  });

// *****multiplication.js*****

export 
  const multi=(num1,num2)=>num1*num2;

// *****multiplication.test.js*****

import { multi } from "./multiplication";
  test('multiplication of two numbers',()=>{
    expect(multi(2,2)).toBe(4);
  })