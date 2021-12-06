const downString=(arr,add)=>{

const newADD=add.split(' ');
const tab=arr.map(item=>item.concat(newADD))
return tab;
}

module.exports =downString