
let number = parseInt (prompt("input number"))
let random = parseInt(Math.random() * 2);
/*document.write(random)
if ( random === number){
    document.write(" " + "thats right");
}
else {
    document.write(" " + "not right");
} */
while (random != number) {
    alert("Try again. The number was" +" " + random)
   
    number = prompt("input number")
    random = parseInt(Math.random() * 10)
}
 alert("Thats right")   

    /*userName = prompt("what is your name")
}

let userName = prompt("What is your name")
while (userName !="Malachi") {
    alert("Enter your name")
    userName = prompt("what is your name")
}*/