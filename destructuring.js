const obj = {
        name: "Mithun",
        age: "24",
        DOB: "1998"
    }
    //destrcuturing er kaj hocche object theke element easy vabe ber kore ene ta ekta variable e rekhe onno jaigai use kora


const { name: title } = obj

console.log(title)


//nested object destructuring
const nobj = {
    name: "Mithun",
    age: "24",
    DOB: "1998",
    edu: {
        degree: "BSc"
    }
}
const { edu: { degree } } = nobj
console.log(degree)