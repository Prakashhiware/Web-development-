console.log("events");

//its working
// let a = document.getElementsByClassName("contain")[0]
// a.onclick = () => {
//     let b = document.getElementsByClassName("contain")[0]
//    b.innerHTML=" <b> chaliye shuru karte hai</b>"
// }


function go() {

    console.log("hii")
}

let con = document.getElementById("btn")
con.onclick = () => {
    
}

con.onclick = function fast() {
    let qq = document.getElementsByClassName("contain")[0]
   
    if ( qq.style.display != "none" ) {
        qq.style.display = "none" 
    } else[
        qq.style.display="block"
    ]
}

document.querySelectorAll(".box1")
let ee = document.querySelectorAll(".box1")[0]
ee.onclick = (fra,tra) => {
    ee.style.background="red"
}

let job = document.querySelector("#ai")

job.onclick = () => {
    cry.textContent="sure sir we take over you"
}
let cry = document.createElement("p")
// cry.setAttribute("style", "border:2px solid green; height:70px ;width :70px; transition: 2s linear hell; ")
// cry.setAttribute("style", "height:100px ;width:100px ")
job.append(cry)
// job.before(cry)
// job.after(cry)
// job.prepend(cry)
function chal(){
document.body.innerHTML="<b>nothing si </b>"
}
cry.className = "employe"
cry.classList.remove("employe")
cry.classList.add("altron")
cry.classList.toggle("altron")
cry.classList.toggle("altron")


let ad = document.getElementById("poco");

let z = document.createElement("div");
z.classList.add("hey")
z.textContent = "i am content of div tag that is created in js wee cosider "
ad.style.height = "100px"
ad.style.width="100px"

function genpara1() {
    z.textContent = "click "
    ad.style.background = " yellow"
    // workng 
    // ad.style.transform="translateX(100px)"
    document.body.append(z)
}
function genpara2() {
    ad.style.background = " blue"
    z.textContent = "dblclick "
    document.body.append(z)
}
function genpara3() {
    ad.style.background = " green"
    z.textContent = "mousedown"
    document.body.append(z)
}
function genpara4() {
    ad.style.background = " grey"
    z.textContent = "mouseup"
    document.body.append(z)
}
function genpara5() {
    z.textContent = "mouseout "
    ad.style.background=" purple"
    document.body.append(z)
}
function genpara6() {
    z.textContent = "mouseover "
    ad.style.background=" pink"
    document.body.append(z)
}function genpara7() {
    z.textContent = "leave "
    ad.style.background = randomcolor();
    console.log(randomcolor())
    document.body.append(z)
     
}
function genpara8() {
    z.textContent = "mouse move"
    ad.style.background=" brown"
    document.body.append(z)
}
function genpara9() {
    z.textContent = "leave "
    ad.style.background=" orange"
    document.body.append(z)
}
ad.addEventListener("click", genpara1)
ad.addEventListener("dblclick",genpara2)
ad.addEventListener("mousedown",genpara3)
ad.addEventListener("mouseup",genpara4)
ad.addEventListener("mouseout",genpara5)
ad.addEventListener("mouseover",genpara6)
ad.addEventListener("mouseleave",genpara7)
ad.addEventListener("mousemove", genpara8)



// in other word us of events
function sea() {
    let r = document.createElement('div');
    r.className = 'box';
    r.textContent = 'congratulation';
    document.body.appendChild(r)
    r.style.backgroundColor = "green";
    // Assigning random background color
    r.style.height = "50px"
    r.style.width="100px"
}

function randomcolor() {
    let letter = "1234567890abcdef"
    let co = "#";
    
    for (let i = 0; i < 6; i++) {
        // letter[i]
        
        // letter[Math.random()*16]//then number consider 0 to 16
        co += letter[Math.floor(Math.random() * 16)] //math.floor mean gives largest number that is 4.0 =4; 3.9= 3; mean only integer not right side point
    }
    // console.log(co)
    return co;
}

// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     console.log(color)
//     return color;
//   }



// var button = document.getElementById('myInput');
// button.addEventListener("keydown", function(event) {
//     console.log('Event type:', event.type);
//     console.log('Target element:', event.target);
//     console.log('Timestamp:', event.timeStamp);
//     console.log('Mouse coordinates (clientX, clientY):', event.clientX, event.clientY);
    
// });
var input  = document.getElementById('myInput');
input.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
    console.log('Physical key code:', event.code);
    console.log('Shift key pressed:', event.shiftKey);
    console.log('Ctrl key pressed:', event.ctrlKey);
    console.log('Alt key pressed:', event.altKey);
    console.log('Meta key pressed:', event.metaKey);
    console.log('Key location:', event.location);
});