// first find and grap which elements you want to modify or change and ten 


// const elm = document.getElementById("first")
// const elm = document.getElementsByClassName("first")


// const elm = document.querySelector("#first")
// const elm = document.querySelector(".info1")
// const elm = document.querySelectorAll(".info1")


// const elm = document.getElementsByTagName("div/")
// const elm = document.querySelectorAll("div > div")






// console.log(elm)



// apply the change
// 
// document.write("Hehehehehhe")

// const display = document.querySelector(".display")

// // const display = document.getElementsByClassName("display")

// const txt = display.innerText;
// console.log(txt)
// // console.log(display)


// const display = document.getElementsByClassName("display")[0];

// display.innerText = "Sam Smith"
// display.innerHTML = "<h1>Click Me</h1>"
// display.setAttribute("id", "test")

// display.innerHTML = "<h1>Click Me</h1>"

// console.log(display)

// const elm = document.getElementsByTagName("a")
// console.log(elm)
// const elm = document.querySelector("a")
// console.log(elm)


// const elm = document.querySelector("a")

// elm.style.color = "red"
// elm.style.fontSize = "2rem"
// elm.style.textDecoration = "none"

const display = document.querySelector(".aaa")
// console.log(display)
// const func = () => {
//     console.log(display)
//     display.classList.toggle("success")
// }
// display.addEventListener("onClick", ())
// display.addEventListener("click", () =>{
//     display.classList.toggle("success")
// })




display.addEventListener("click", ()=>{
    display.innerText = display.innerText.split("").reverse("").join("");
})

// const display = document.querySelector(".aaa");
// // console.log(display);

// document.addEventListener("click", )