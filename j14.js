console.log("i am timer")


const timeid =setTimeout(() => {
    alert("timer after 5 second")
 const yes=prompt("said yes or no")
    if ("yes"== yes) {
        let p1= document.createElement("div");
        p1.textContent = "new element of timer"
        let p2 =document.querySelector(".contain")
    p2.append(p1)
    }
    else {
clearTimeout(timeid)
    }
}, 4000)


const witharg = (a,b) => {
    console.log(" i am now runing")
    a + b
}

setTimeout(witharg, 2000, 10, 10)
let i = 0;
let id1 =setInterval(() => {
    
  
    i++;
    if (i>5) {
        clearInterval(id1)
    } else {
        // document.body.innerHTML = "<p> how are you</p>"
        console.log("runing"+i)
    }
}, 2300);