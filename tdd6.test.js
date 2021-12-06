const orderOfString = require('./tdd6.js')

test ('string in order or not',()=>{
const str="abc"
    expect(orderOfString(str)).toString(true);
});

// test ('string in order or not',()=>{
//     const str="xyz"
//         expect(orderOfString(str)).toString(true);
//     });

//  test ('string in order or not',()=>{
//         const str="123"
//             expect(orderOfString(str)).toString(true);
//         });

//  test ('string in order or not',()=>{
//             const str="aabbcc"
//                 expect(orderOfString(str)).toString(true);
//             });