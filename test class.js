
// *****test of class.js*****

export const filter = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > 20) {
      result.push(arr[i]);
    }
    return result.length > 0
      ? result
      : "il ya pas d etudiant avec un age superieur a 20";
  }
};


// *****test of class.test.js*****


import { filter } from "./class";

test('filter the elements create through a class',()=>{

  class Etudiant{
    constructor(nom,prenom,age){
      this.nom=nom;
      this.prenom=prenom;
      this.age=age;
    } 
     getFullName(){return`${this.nom} ${this.prenom}`};
  
     
  }
  const etud01=new Etudiant('NINLA','Ulrich',19);
  const etud02=new Etudiant('ATEBA','Benjamin',17);
  const etud03=new Etudiant('NGONO','Albert',5);
  const etud04=new Etudiant('ATANGANA','Alain',5);
  const etud05=new Etudiant('WOUMBI','Frederic',7);
;
  
  const arr=[];
      arr.push(etud01);
      arr.push(etud02);
      arr.push(etud03);
      arr.push(etud04);
      arr.push(etud05);
    
  expect(filter(arr)).toString('il ya pas d etudiant avec un age superieur a 20');
})


