
console.log("today date is 12 -3-2024")
console.log("insertion className and classList ")

const m1 = document.querySelector(".contain")
m1.insertAdjacentHTML("afterbegin","<b>  after begin new air vision are announce </b>")
m1.insertAdjacentHTML("afterend","<b> after end new air vision are announce </b>")
m1.insertAdjacentHTML("beforebegin","<b> before begin new air vision are announce </b>")
m1.insertAdjacentHTML("beforeend","<b> before begin new air vision are announce </b>")


const m2 = document.querySelector(".nahi");
m2.insertAdjacentText("afterbegin", 'cotainer cha pahila element text')
m2.insertAdjacentText("beforebegin", "ye container chya pehla text ahe")
m2.insertAdjacentText("afterend", "purn container zalya nanter")
m2.insertAdjacentText("beforeend", "container cha last  elemnt ext")

const li=document.createElement("div")

li.textContent = "here we go "

const diva = document.querySelector(".third")
diva.prepend(li);//first element of third // afterbegin
diva.append(li)//first element of third //beforeend

diva.before(li)//aadhi from third  //beforebegin
diva.after(li)//nanter from third //afterend
diva.replaceWith(li) //tela hatvl dusra thevl 

//remove element node
li.remove(); //tela hatvun takle


// className and classList
myDiv.className = " hwo hy bye"
myDiv.classList.remove("hy");
myDiv.classList.add("go");
myDiv.classList.toggle("bye") //no
myDiv.classList.toggle("bye")//yes

