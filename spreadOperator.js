//spread operator 
var arr = [1, 2, 3]

var a = [...arr, 4, 5, 6]
console.log(a)


//rest operator

function myfunc(a, ...params) {

    console.log(a)
    console.log(params)



}
myfunc(1, 2, 3, 4, 5)



//spread and rest operator er mddhe dfrnc hocche rest shudu function e use hoi r spread concat korte jkono jaigai user kora jai