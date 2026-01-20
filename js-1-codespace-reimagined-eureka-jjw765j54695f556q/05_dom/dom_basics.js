//In JavaScript DOM, NodeList and HTMLCollection dono collections hote hain, but thode important differences hote hain. Simple language me samjho 

// 1️⃣ NodeList

// 👉 NodeList ek collection hota hai DOM nodes ka (elements + text nodes + comments bhi ho sakte hain).

// Kaise milta hai?

// document.querySelectorAll()

// childNodes

// let items = document.querySelectorAll("li");
// console.log(items);

// Properties / Features

// Indexing hoti hai → items[0]

// Length hoti hai → items.length

// forEach() ka support hota hai

// items.forEach((item) => {
//   console.log(item.textContent);
// });

// Live or Static?

// Mostly STATIC

// Matlab DOM change hone par automatically update nahi hota
// (querySelectorAll case)

// 2️⃣ HTMLCollection

// 👉 HTMLCollection sirf HTML elements ka collection hota hai (text/comment nahi).

// Kaise milta hai?

// getElementsByClassName()

// getElementsByTagName()

// children

// let divs = document.getElementsByClassName("box");
// console.log(divs);

// Properties / Features

// Indexing hoti hai → divs[0]

// Length hoti hai → divs.length

// ❌ forEach() direct nahi hota

// // Error dega
// divs.forEach(() => {});

// Live or Static?

// LIVE collection

// DOM change → collection automatically update 🔄