// Single line Comment


/* Multi 
line commnent */


// console.log("Hello World");


// ====Variable =====

// var, let, constant

// var name;  //creating variable 

// var firstName = "Nicky "; // assigning value 

// let lastName = "Shah"
// const dob =  "15-11-1998"

/*
console.log(firstName)
console.log(lastName)
console.log(dob)
*/

// also can be written as 
// console.log(firstName, lastName, dob)

// firstName = "sam"
// lastName = "Smith"
// dob = "11-11-1111" 




// console.log(firstName, lastName, dob)


// JS Operator

// Arithmatic Operators 



// Primitive Data Types

// string
    // const name = "nicky";

// number 

// const num = 123;
// safe number -2^53-1 to 2^53-1


// const pet === "cow"

// if (pet === "cat") {
//     console.log("meow")
// } else if (pet === "dog"){
//     console.log("woff")
// } else if(pet === "cow"){
//     console.log("moo")
// } else{
//     console.log("bjhbjhbh")
// }


// Template literals 

// const a = 5;
// const b = 6;

// const sum = a+b


// const str = "when we add the value of " + a + " and " + b + " is " + sum

// const str = `
// when we add ${a} and ${b}, the total value is 
// ${a+b}
// `
// console.log('when we add the value of a and b is ' + sum)
// console.log(str)


// Arrow function


// function add(){
//     console.log("from add function")
// }


// LOOPS

// for loop 
 
// for(initial, condition, inc/decrement){

// }

// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }

// while consition

// let i = 0;
// while(i < 10){
//     console.log(i)
//     i++
// }
    


// let i = 0;
// while (i < 10){
//     i++;
//     if (i%2 !== 0 ){
//         continue
//     }
//     console.log(i)
    
// }




///////  JS Data Manipulation 


// Number

/// safe number -2^53-1 to 2^53-1 


// downcasting 

//  const num = "345"
//  const val = +num

// const num = "2222.2223s"

// const val = parseInt(num)
// const val = parseFloat(num)

    // console.log(val, typeof val, isNaN(num))



//// String 
// const str = "Hi i'm Nicky Shah"
// const str = 'Hi i\'m "Nicky Shah"'
// const str = ` Hi i'm "Nicky Shah, and I live in Sydney `
// const val = str.length
// const val = str.toLowerCase()
// const val = str[15]
// const val = str.indexOf("e")
// const val = str.lastIndexOf("e")
// const val = str.lastIndexOf("Shah")
// const val = str.replace("Shah", "smith")
// const val = str.replace("i", "y")
// const val = str.replaceAll("i", "y")

// const val = str.substring(0, 5)
// const val = str.substring(6)
//both are counted from zero

// const val = str.slice(3)
// const val = str.slice(3, 6)
// const val = str.slice(-1)   --- negative sign is given to count backwards 

// const val = str.includes("nicky")
// const val = str.search("Nicky")
// const val = str.charAt(3)  //--- this gives the character at the index at 3 

// const val = str.charCodeAt(3)

// const val = str.split(' ')
// const val = str.trim()

// console.log(val, val.length)

// console.log(str.length, str)



// Array Manipultion

// const vals = [
//     "Nicky",
//     543,
//     true, 
//     null, 
//     [232,322,222, "nicky"],
//     {}


// ]


// console.log(vals, typeof vals)


// const fruits = ["banana", "apple", "orange", "Mango"]

// fruits.push("Mango")  --- adds data at last 
// fruits.unshift("mango")   --- adds data at the front

// const dt = fruits.pop() --- removes the data from last
// const dt = fruits.shift()   ///--- removes the data from first

// console.log(fruits.length)
// console.log(fruits[2])

// const dt = fruits.slice(1,3)
// const dt = fruits.splice(1,3)  /// makes a new array where 1 means starting postion and 3 means 3 items of that array

// const dt = fruits.splice(1,0, "potato") 
// this means 1 meaning starting position 1 and 0 means dont delete any item as it is 0 and third item is potato meaing at the position of 1 add potato.

// console.log(dt)

// console.log(fruits)
// console.log(fruits.short((a, b)=> a-b))
// console.log(fruits.reverse())


// const fruits = ["banana", "apple", "orange", "Mango"]

// console.log(fruits.toString())  //changing the array to string

// const data = fruits.join("|")

// console.log(data)

// console.log(fruits)
// Array Loops

// fruits.forEach((itm, i)=>{
//     console.log(itm + "is yummy", i)
// })

//        const newArg = fruits.map((item, index) => {
//     console.log(item, index)
//     return "SKU-" + item.toUpperCase()
// })

// console.log(newArg)

// const newArg = fruits.filter((fruit)=>{
//     return !fruit.includes("e")   /// '!' means any object in array that doesn't have e in them.
// })


// const result = fruits.find((item) => {
//     // return item.includes("e")
//     return item.includes("eww")

// })
// const result = fruits.every((item) => 
//     // return item.includes("e")
//      item.includes("a")

// )

// console.log(result)

// const money = [343, 333, 222, 333]

// const total = money.reduce((subttl, item) => {
//     return subttl + item
// }, 10 )
// console.log(total)

// const arg =  Array(100).fill("💖")
// console.log(arg)

// challenge No 1  

// 1.a. create an array of 50 random number programmatically between range of 1 to 100 

// let arr = [];

// for (let i = 0; i < 50; i++) {
//   arr.push(Math.floor(Math.random() * 100) + 1);

// }
// console.log(arr);

// const arg = []
// const num = math.random



// 2. sort the array in the descendiong order 

// const a = arr
// a.sort((a,b)=> b-a)
// console.log(a)



//3. get total of the array 

// const total = a.reduce((a,b) => {
//     return a+b
// }, 0)
// console.log(total)




//4. Divide original array into 2 new arrays that contains even or odd numbers only each . 

// const even = arr.filter(num => num % 2 === 0)
// const odd = arr.filter((num) => num % 2 !== 0)
// console.log(even)
// console.log(odd)


//5. remove duplicate number for the orriginal array. 


// const uniquearg = arr.filter((item, i) => i === 
// arr.indexof(item))
// console.log(uniquearg)



const arg = []
let counter = 0
while (arg.length<50){
    const num = Math.floor(Math.random() * 100) + 1
    if(arg.indexOf(num) === -1){ arg.push(num)  }
    // if(!arg.indexOf(num)){ arg.push(num)    }

    // arg.indexOf(num) === -1 && arg.push(num)
    // arg.indexOf(num) === -1 ? arg.push(num): null;
    counter++
}
console.log(arg)
console.log(counter)
// const uniarr = 



// const yoyo = () => console.log(5+6);
// console.log("1. log")

// setTimeout(()=>{
//     console.log("2. inside first set timeout"); 

// }, 500);

// console.log("3. after first setTime out")





