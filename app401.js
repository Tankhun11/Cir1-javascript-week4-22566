//deffine function
const fname = "Mark Zuckerberg";
function hello(fname,age,position){
    console.log("Hello",fname,age,position);
}
//call function
let position = window.prompt("Enther Position: ")
document.getElementById("test").innerHTML = position;
hello(fname, 45, position);

hello("Elon Musk",50,"CEO")