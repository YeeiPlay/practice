// ------ << added btn for instructions >> -----------------  
const btn1 = document.getElementById("btn") 


btn1.addEventListener("click", function() {
    document.getElementById("btn").style.visibility = "hidden";
  }, false);


// ------ << for loop PRACTICE STARTS HERE >> -----------------    

const students = [{
    firstName: "Jesus",
    lastName: "Reyes",
    country: "Mexico"
}, {
    firstName: "Bellal",
    lastName: "Martinez",
    country: "United States"
}, {
    firstName: "Russel",
    lastName: "Smith",
    country: "Yemen"
}, {
    firstName: "Eddris",
    lastName: "Ford",
    country: "United States"
}, {
    firstName: "Morad",
    lastName: "Hugais",
    country: "Costa Rica"
}, {
    firstName: "Yusuf",
    lastName: "Smith",
    country: "United States"
}, {
    firstName: "Mutia",
    lastName: "Perez",
    country: "Mexico"
}, {
    firstName: "David",
    lastName: "Escobar",
    country: "Colombia"
}, {
    firstName: "Edward",
    lastName: "Stark",
    country: "Canada"
}, {
    firstName: "Raul",
    lastName: "Harvey",
    country: "United States"
}, {
    firstName: "Steve",
    lastName: "Williams",
    country: "Canada"
}, {
    firstName: "Luis",
    lastName: "Enrique",
    country: "United States"
}, {
    firstName: "Adrian",
    lastName: "Hugais",
    country: "Yemen"
}, {
    firstName: "Bill",
    lastName: "Scott",
    country: "United States"
}, {
    firstName: "Leo",
    lastName: "Perez",
    country: "El Salvador"
}, {
    firstName: "Anwar",
    lastName: "Martinez",
    country: "United States"
}];

//this will add a new obj to our array
students.push( {firstName: "lopez", lastName: "Martinez", country: "Honduras"});

//for loop practice, this will print every students name and location
for (let i = 0; i < students.length; i++) {
    let firstName = students[i].firstName;
    let country = students[i].country; 
    console.log(`${firstName} is from ${country}`);
}

//This will greet every student with "Hello"
console.log("hello, Students")


