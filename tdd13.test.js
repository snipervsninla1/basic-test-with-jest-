const returnLetter=require('./tdd13')

test('return letter of one word',()=>{

    const str="WAYTOLEARNX";
    expect(returnLetter).toString('Majuscule');
});

test('return letter of one word',()=>{

    const str="waytolearnx";
    expect(returnLetter).toString('Minuscule');
});

test('return letter of one word',()=>{

    const str="WayToLearnX";
    expect(returnLetter).toString('Mix');
});