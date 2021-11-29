
// *****exo11.js*****

export const suppRoll = (étudiant) => {
  console.log(étudiant);
  delete étudiant.rollno;
  console.log(étudiant);
  return étudiant;
};



// *****exo11.test.js*****

import { suppRoll } from "./exo11";

test("delete roolno property", () => {
  const étudiant = {
    nom: "« David Rayy »",
    sclass: "« VI »",
    rollno: 12
  };

  expect(suppRoll(étudiant)).toEqual({
    nom: "« David Rayy »",
    sclass: "« VI »"
  });
});



