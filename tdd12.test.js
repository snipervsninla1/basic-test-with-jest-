const palindrome=require('./tdd12')

test('returns true if a number is a palindrome',()=>{
    const str='212';

    expect(palindrome(str)).toString(true);
});

// test('returns true if a number is a palindrome',()=>{

//     const str='123';
//     expect(palindrome(str)).toString(false);
// });

// test('returns true if a number is a palindrome',()=>{
//     const str='75257';

//     expect(palindrome(str)).toString(true);
// });