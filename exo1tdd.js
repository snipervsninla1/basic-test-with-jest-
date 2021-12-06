const random=(x)=> {
    var t = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    if (x === t) {
      return "Good Work";
    }
    return "Not matched";
  }

  module.exports=random;