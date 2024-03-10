console.log((document.getElementsByTagName("span")[0].style.color = "red"));
console.dir((document.getElementsByTagName("span")[0].style.color = "green"));



// Create a new paragraph element
const pd= document.createElement("p")
pd.textContent = "this is content of my paragraph"
pd.appendChild(document.createComment("this is comment using appendchild funtion"))
pd.appendChild(document.createTextNode("i am using textNode "))

console.log(pd)

console.log("selft tag name "+pd.tagName)
console.log("selft  "+pd.nodeName)
console.log("first child tag name "+pd.firstChild.tagName)
console.log("first child  name "+pd.firstChild)
console.log("first child node name "+pd.firstChild.nodeName)
console.log("second child tag name "+pd.childNodes[1].tagName)
console.log("second child node name "+pd.childNodes[1].nodeName)
console.log("second child  name "+pd.childNodes[1])
console.log("third child tag name "+pd.childNodes[2].tagName)
console.log("third child node name "+pd.childNodes[2].nodeName)
console.log("third child name "+pd.childNodes[2])

// Get a reference to the element


const ch11 = document.getElementById("water").innerHTML = "<p>tajmal is <b><i>beautiful</i></b> turist place</p>"
// const c13 = document.getElementById("my").innerHTML="<p>how to make easy life</p>"
const c13 = document.getElementById("my")
c13.innerHTML="smartphone is the bigest friend and eneime"
// c13.style.color = "red"
c13.outerHTML="<div>that remove current and add themself</div>"

// document.getElementById("heyhidden").outerHTML="<p> khush rho</p>"
document.getElementById("heyhidden").hidden = false;