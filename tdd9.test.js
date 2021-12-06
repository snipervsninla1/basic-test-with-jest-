const leapYear=require('./tdd9')

test('know a leap year ',()=>{

    const year=2020;

    expect(leapYear(year)).toString('true');
});

test('know a leap year ',()=>{

    const year=1200;

    expect(leapYear(year)).toString('false');
});

test('know a leap year ',()=>{

    const year=2000;

    expect(leapYear(year)).toString('true');
});