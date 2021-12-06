const letterString =require('./tdd8')


test ('uppercase or lowercase string',()=>{

     const str="WayToLearnX"
    expect(letterString(str)).toString(false);
});

// test ('uppercase or lowercase string',()=>{

//     const str="waytolearnx"
//    expect(letterString(str)).toString(true);
// });

// test ('uppercase or lowercase string',()=>{

//     const str="WAYTOLEARNX"
//    expect(letterString(str)).toString(true);
// });