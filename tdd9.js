const leapYear=(year)=>{

    if ((year % 400) ===0 || (year % 4) ===0){
return true;
    }if((year %100)!==0 ){return false}
}
module.exports=leapYear;