// Object

// object => properties, methods

// const person = {
//     name: 'prem',
//     bio: ()=>{
//         return "ska"
//     }
// }
// console.log(person.bio())

// -------making a function and calling it for different object using same function-------

// const person = (name, add) => {
//     return{
//         personName: name,
//         address: add, 
//         bio(){
//             // console.log(this, "____")
//             return `Hey this person is ${this.personName} and lives at ${this.address}`
//         },
//         upper(){
//             this.personName = this.personName.toUpperCase()
//             this.address = this.address.toUpperCase()
//         },
//         lower(){
//             this.personName = this.personName.toLowerCase()
//             this.address = this.address.toLowerCase()
//         }
//     }
// }

// const p = person("prem", "sydney")
// p.upper()
// console.log(p.bio())

// const p1 = person("sam", "Rockdale")
// p1.lower()
// console.log(p1.bio())







// -----Class--------

//  class Person {
//     #secretkey;

//     constructor(n, a){
//         this.personName = n;
//         this.address = a;
//         this.#secretkey = "skjcscmdnu"
//     }

//     bio(){
//         // console.log(this, "____")
//         return `Hey this person is ${this.personName} and lives at ${this.address} and secretkey is ${this.#secretkey}`;
//     }
//     upper(){
//         this.personName = this.personName.toUpperCase()
//         this.address = this.address.toUpperCase();
//     }
//     lower(){
//         this.personName = this.personName.toLowerCase()
//         this.address = this.address.toLowerCase();
//     }
//  }

// // const p = new Person("Prem", "Sydney");
// // p.number = "0000847";
// // p.upper();
// // console.log(p)
// // console.log(p.bio())

// const p1 = new Person ("Sam", "SSSSSS")  // Polymorphism
// console.log(p1, p1.address, p1.bio())



// >---------- Inheritance -----------<


// class Livings {
//     constructor ({name, dob}){
//         this.name = name
//         this.dob = dob 
       
//     }
//     boi(){
//         return `hi i am ${this.name} and was born in ${this.dob} ${this.petBio()}`
//     }
// } 


// class Human extends Livings {
//     constructor ({name, dob, pet}){
//         super(name, dob)
//         this.petName = pet
//     }
//     boi(){
//         return `hi i am ${this.name} and was born in ${this.dob} ${this.petBio()}`
//     }

//     petBio(){
//         return`My pet name is ${this.petName} and i love it.`
//     }
// }
// const person = {
//     name: "Mary",
//     dob: "2222",
//     pet: "yuno"
// }

// const pObj = new Human(person)



/////  =====Functinomal Programming ======


// =========Side Effects =========

// let total = 0
// const add = (a,b) => {
//     total = a+b
//     return total
// }

// const asn = add(3,4)
// console.log(asn)

// this does 2 things 

// pure function 

// const add = (a,b) => a+b
// console.log(add(1,2))

// High Order Function

// const add = (a,b) => a+b
// const subs = (a,b) => a-b

// const calculate = (a, b, func) => {
//     return func(a,b)
// }

// const ans = calculate(2, 4, add)
// console.log(ans)
// const ans1 = calculate(2, 1, subs)
// console.log(ans1)


// const addAndSquare = (a,b) =>{

//     const ttl = a+b 
//     const square = (multiplier) =>{
//         return ttl ** multiplier
//     }
//     return square 
// }

// const result = addAndSquare(2,3)(2)
// // const result = addAndSquare(2,3)
// // console.log(result(2))
// // const ans = result(2)
// // console.log(ans)
// // -----either ways could be used ------

// console.log(result)


// ========Recursion==========



// let i = 0 
// const inrease = () => {
//     i++
//     console.log(i)
//     if (i == 100){
//         return
//     }
//     increase()
// }
// increase();


const money = [324, 2233, 232, 2323 , 3232, 2, 232]

let sum = 0 
 const total = (money) =>{
    sum += money.pop()
    if (money.length){
        return sum
    }
    total(money)

 }

 const ttl = total(money)
 console.log(ttl)