
//Case Senstive
//print to the console integers will show calculation

var myName = "Yusuf"; 
var adj = "is a Dev";
console.log(myName + " " + adj);

console.log(1 + 8)

var num = 1
var num2 = "7"

console.log(num + parseInt(num2));

var animal = "Dog's";
adj = "black";
console.log("There are many " + adj + " " + animal );
animal = "Cat's"; //this will change our Dog variable into cat's
console.log("There are many " + adj + " " + animal );

//calculator one function only. 
num = prompt("Enter a number from 1 to 5");
num2 = prompt('Enter another number from 6 to 10');
var result = parseInt(num) + parseInt(num2);
console.log(result);


var results = prompt('Are you over 21? \n If you are type "yes"');
var uppercase = results.toUpperCase();

if(uppercase == "YES"){
    alert("Here is some swishers")
} else{
    alert("No tobacco for you")
}














