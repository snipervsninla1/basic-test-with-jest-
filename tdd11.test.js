const mirror=require('./tdd11')

test(' turn this painting into a mirror',()=>{

    const arr=[1, 2, 3];
    expect(mirror(arr)).toEqual([1, 2, 3, 2, 1]);
});

// test(' turn this painting into a mirror',()=>{

//     const arr=[9, 8, 7];
//     expect(mirror(arr)).toEqual([9, 8, 7, 8, 9]);
// });

// test(' turn this painting into a mirror',()=>{

//     const arr=[10, 20];
//     expect(mirror(arr)).toEqual([ 10, 20, 10 ]);
// });