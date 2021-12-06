const returnLetter=(str)=>{

    if(str.toLowerCase===str){return 'Minuscule';}
    if(str.toUpperCase===str){return 'Majuscule';}
    if(str.toLowerCase!==str && str.toUpperCase!==str){return 'Mix';}
}

module.exports=returnLetter;