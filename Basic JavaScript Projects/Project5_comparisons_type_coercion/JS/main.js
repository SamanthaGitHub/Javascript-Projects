document.write(10<1) // this is false
document.write("\n") //these are to make it slightly easier to read, even though it isn't a true new line
document.write(1<10) //true
document.write("\n")
document.write(5==6) //false
document.write("\n")
document.write("10"+5) //the string of '10'with a 5 added to the string, not the value, leaves 105
document.write("\n")
document.write(typeof "10 written in quotation marks is a string")

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0; //this will result in infinity
}

function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN('test string'); //true; a string is  anot a number
}

function my_Function3() {
    document.getElementById("Test3").innerHTML = 9E310; //too big of a number, so infinity is displayed
}

function my_Function4() {
    document.getElementById("Test4").innerHTML = -7E310; //the same as above, but negative infinity
}

function not_Function() {
    document.getElementById("not").innerHTML = !(1>2) //true; 1 isn't greater than 2
}
function not_Function2() {
    document.getElementById("not2").innerHTML = !(2>1) //false; 2 is greater than one
}

console.log(2+5E310) //this will display in the console of the browser as infinity
console.log(5>6)  //this will display in the console of the browser as false
console.log(5===5)  //this will display in the console of the browser as true; the type AND value are the same
console.log(5==="red")  //this will display in the console of the browser as false
console.log(5==="five")  //this will display in the console of the browser as false
console.log(5===6)  //this will display in the console of the browser as false
console.log(5>2 && 2<3)  //this will display in the console of the browser as true because both are true
console.log(4>5 || 5<6)  //this will display in the console of the browser as true; at least one is true