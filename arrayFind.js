//=========================array Find Start=====================
var arr=[1,2,3,4];

var result=arr.find(function(currentValue,currentIndex,arr){


    return currentValue > 2

})

console.log(result)

//=====================array find end=======================

//====================array find index start=====================

var myarr=[1,2,3,4,5,6,7,8,9]

var res=myarr.findIndex((currentValue)=>{

    return currentValue>6

})
console.log(res)



//================array find index end=====================

//array.find main array k change korena
//er moddhe 3ta jinish dorkar hote pare: currentValue,currentIndex,arr
// array.find er 1st parameter call back function and 2nd parameter this