//number
const n = 10 
console.log(n)

//its not a number
// const n1 = 10% 
// console.log(n1)

//it is a string
const s = '10%' 
console.log(s)

//boolean
const b = true 
console.log(b)

//epressions are values to
const f= 10.1 - 9.9
console.log(f)

//undefined
let u 
console.log(u)

//null to represent invalid values
let nu = null
console.log(nu)

//bigint is used for big numbers

const bi =  BigInt(1e+100)
console.log(bi)

const n3 = 100000000000000000000000000000000000000000000000000000000000000000000000000000
console.log(n3)
//object works like a bag or a box
const point = {
    x : 50,
    y: 200,
}
const point2 ={
    x:3,
    y:100
}
//nesting of objects
const line = {
    p:point,
    p1:point2
}


console.log(point,point2)
console.log(JSON.stringify(line))
console.log (typeof  n)
console.log (typeof  s)
console.log (typeof  b)
console.log (typeof  f)
console.log (typeof  u)
console.log (typeof  nu)
console.log (typeof  bi)
console.log (typeof  n3)
console.log (typeof  o)
