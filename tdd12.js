const palindrome=(str)=>{

    const arr=str.split('');
    const tab=[...str];
    const map=tab.reverse();
    return (map===arr.join(''))?true:false;
}
module.exports=palindrome;