var arr = [1, 2, 3, 4, 5, 6, 7]

var sum = arr.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
}, 0)
console.log(sum)


//array reduce main array k change korena
//0 dewar karn 1 er age kono previous value nai tai previous value hisebe 0 k count korbe
// 0 initial value hisebe kaj korbe.
//reduce er kaj pura array k reduce kore ekta single value te convert kora.