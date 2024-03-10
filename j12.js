const p=document.getElementById("contain").hasAttribute("style")
const q=document.getElementById("contain").getAttribute("style")
console.log(p)
console.log(q)
const r = document.getElementById("contain").setAttribute("style", "display:flex;color:red")

console.log(r)
// const s=document.getElementById("contain").removeAttribute("style")


// document.designMode="on" //for design any web site

const t=document.getElementById("contain").dataset;
console.log(t)

const u = document.querySelector("#contain").style.color = "yellow"
const v = document.createElement("span")
v.textContent = "how to add span";
v.setAttribute("class", "chalta")
// v.tagName="spanya"

// document.querySelector("#contain").append(v) //because of append that element inside of contain id but at end
// document.querySelector("#contain").prepend(v)
// document.querySelector("#contain").before(v)
// document.querySelector("#contain").after(v)
document.querySelector("#contain").replaceWith(v)
// document.querySelector("#contain")
console.log(contain)
