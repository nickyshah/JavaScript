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

 class Person {
    #secretkey;

    constructor(n, a){
        this.personName = n;
        this.address = a;
        this.#secretkey = "skjcscmdnu"
    }

    bio(){
        // console.log(this, "____")
        return `Hey this person is ${this.personName} and lives at ${this.address} and secretkey is ${this.#secretkey}`;
    }
    upper(){
        this.personName = this.personName.toUpperCase()
        this.address = this.address.toUpperCase();
    }
    lower(){
        this.personName = this.personName.toLowerCase()
        this.address = this.address.toLowerCase();
    }
 }

// const p = new Person("Prem", "Sydney");
// p.number = "0000847";
// p.upper();
// console.log(p)
// console.log(p.bio())

const p1 = new Person ("Sam", "SSSSSS")  // Polymorphism
console.log(p1, p1.address, p1.bio())



// >---------- Inheritance -----------<

