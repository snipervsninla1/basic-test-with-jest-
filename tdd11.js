const mirror=(arr)=>{

    const n=[...arr]
    const tab=n.pop();
    const newArr=n.reverse();

    return arr.concat(newArr);
}

module.exports=mirror;