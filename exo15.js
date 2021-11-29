
// *****exo1.js*****

export
const add =(x,y)=>{

  return new Promise ((resolve,reject)=>{
   
     if ((typeof x === 'string') && (typeof y === 'string')){resolve()}
     else {reject()}
  })
}
 
  
  


// *****exo1.test.js*****

import { add } from "./exo15";

test('promise containing the result',()=>{

  return  add().then(()=>{ console.log(x+''+y)});
  
  expect(add('test','item')).toMatch('test item');
});


test('promise containing the result',()=>{

 return add().catch(()=>{ console.log("Must provide two parameters")});

  expect(add('test')).toMatch("Must provide two parameters");
});



