
// *****exo8.js*****

export 

const comparTwoObject = (Object1, Object2) => {
  return Object1.nom === Object2.nom
    ? "valeurs de propriété équivalentes"
    : Object1.prenom === Object2.prenom
    ? "valeurs de propriété équivalentes"
    : Object1.age === Object2.age
    ? "valeurs de propriété équivalentes"
    : Object1.sexe === Object2.sexe
    ? "valeurs de propriété équivalentes"
    : "differente valeur de propriété";
};



// *****exo8.test.js*****



import { comparTwoObject } from "./exo8";

test("compare two object", () => {
  const Object1 = {
    nom: "alima",
    prenom: "arthur",
    age: 22,
    sexe: "masculin"
  };
  const Object2 = {
    nom: "ngonde",
    prenom: "elisabeth",
    age: 22,
    sexe: "feminin"
  };

  expect(comparTwoObject(Object1, Object2)).toString(
    "valeurs de propriété équivalentes"
  );
});

test("compare two object", () => {
  const Object1 = {
    nom: "alima",
    prenom: "arthur",
    age: 28,
    sexe: "masculin"
  };
  const Object2 = {
    nom: "ngonde",
    prenom: "elisabeth",
    age: 22,
    sexe: "feminin"
  };

  expect(comparTwoObject(Object1, Object2)).toString(
    "differente valeur de propriété"
  );
});



