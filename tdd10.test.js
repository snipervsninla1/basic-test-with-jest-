const numEven=require('./tdd10')

test('even numbers of 1 to the given number',()=>{

    const nbrPaire=2;
    expect(numEven(nbrPaire)).toEqual([2]);
});

// test('even numbers of 1 to the given number',()=>{

//     const nbrPaire=4;
//     expect(numEven(nbrPaire)).toEqual([2, 4]);
// });

// test('even numbers of 1 to the given number',()=>{

//     const nbrPaire=6;
//     expect(numEven(nbrPaire)).toEqual([2, 4, 6]);
// });