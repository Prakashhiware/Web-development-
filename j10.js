console.log("i am id and class")
document.getElementById("watermelon").innerHTML = "kahi pn";

var elements = document.getElementsByClassName('myClass');
for(var i = 0; i < elements.length; i++){
	elements[i].style.color = "#0097fd";
}

let j = document.getElementsByClassName("fruit");
j[2].style.backgroundColor = "#64a54d"

document.querySelector('.myClass').style.color ="#a2349d";


let s = document.querySelectorAll(".fruit").forEach((e) => {
    console.log(e);
    e.style.backgroundColor="rgb(22,223,11)"
})
// s[1].style.color="blue"
let q=document.getElementsByTagName("div")
q[1].matches("div.fruit")

q[1].closest("div.container")

    

document.getElementById("have").innerHTML = "tu hai sabse acha"
let da = document.getElementById('have');
da.style.color = "green";


da.style.background = "yellow"

document.querySelector("#have").style.boxShadow="  4px 10px 15px 1px black"
document.getElementById('have').matches("have")

document.getElementsByTagName("nav")[0].style.color="green"
document.getElementsByTagName("nav")[0].style.backgroundColor="aqua"