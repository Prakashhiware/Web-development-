console.log("parents child slibling")

document.body.childNodes[2];

console.log("document .childNodes[1].childNodes[3]")
document.childNodes[1].childNodes[3]
console.log("first ,last , childNodes child")
console.log("")
Element.firstChild === Element.childNodes[0]

/*
false
document.body.childNodes[1]===document.body.firstchi
false
document.body.childNodes[1]===document.body.firstChild
false
document.body.childNodes[0]===document.body.firstChild
true
let ohh= doc
VM5753:1 Uncaught ReferenceError: doc is not defined
    at <anonymous>:1:10
(anonymous) @ VM5753:1
let ohh= document.body
undefined
ohh.firstChild
#text
ohh.firstElementChild
<div class=​"container">​…​</div>​ */




// at j8.js:9:42
// (anonymous) @ j8.js:9
// document.body.firstElementChild.children[2]
// <div class=​"box">​box3​</div>
// document.body.children
// HTMLCollection(4) [div.container, table, script, div#loom-companion-mv3, loom-companion-mv3: div#loom-companion-mv3]
// document.body.children[1]
// <table>​…​</table>
alert("kitida navyane tula aathvave");
alert("document.body.parentNode");//--> html>head and body </html>
