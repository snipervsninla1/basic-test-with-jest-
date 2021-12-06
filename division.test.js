const div= require('./division.js');

test("division of two numbers", () => {
    expect(div(2, 0)).toBe("impossible");
  });
  
  test("division of two numbers", () => {
    expect(div(2, 2)).toBe(1);
  });
