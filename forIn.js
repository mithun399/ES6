//==========for start==============

for (let i = 0; i <= 5; i++) {
    console.log(i);
}
//==========for End==============

//==========for in start========
const myobj = {
    name: "mithun",
    dob: "1998 ",

}

for (property in myobj) {
    console.log(property)
}
//==========for in end========

//==========for of start========

const myarr = [1, 2, 3, 4, 5]

for (element of myarr) {
    console.log(element)
}

//==========for of end========


//array er jonno for in use korle index return korbe,string use korleo same
//but for of use korle array or string ta show korbe