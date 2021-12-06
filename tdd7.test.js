const downString=require('./tdd7')

test('adding a sub-string',()=>{
    const arr=["accept", "achet", "adapt"];
    const add="able";

    expect(downString(arr,add)).toString(["acceptable", "achetable", "adaptable"]);
});

test('adding a sub-string',()=>{
    const arr=["aim", "act", "ard"];
    const add="ant";

    expect(downString(arr,add)).toString(["aimant", "actant", "ardant"]);
});


