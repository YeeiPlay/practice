const names = ["Mike", "John", "Steve", "Carlos", "Matt", "Nicole", "Michelle"];
//initial array no change yet
console.log("Initial Array:", names)

//method will remove arrays's last item
let removelastName = names.pop();
console.log("Removed last item:", removelastName);

//Method to remove first array item
names.shift();

//method to get last item in array without removing it
const lastItem = names[names.length - 1];
console.log("last item:", lastItem);



//method to get first item in array without removing it
const firstItem = names[0];
console.log("first item:", firstItem);

//method to add item to end of list
names.push("Yusuf-Al-Colocho");
console.log("Push Method to end of array:", names);


//method to add item to beginning of list
names.unshift("Yusuf");
console.log("unshift Method to add at the start of an array:", names);

// How to get item in the middle of any array's length 

const middleMan = Math.floor(names.length / 2);
//const middleMan = Math.round((names.length -1) / 2); (just another wait of getting middle guy)
console.log("middle guy here:", names[middleMan]);

// Higher Order Array //
console.log("////////higher order Array /////////")
const getYusuf = names.find((name) => {
  return name === "Yusuf"
});

console.log("FutureDev here:", getYusuf);
const string = names.toString();
console.log("to string method, ", string);

const sliceMethod = names.join("-");
console.log("joint Method; ", joinMethod);

names.splice(0, 0, "new guy!");
console.log("spliceMethods ", names);

names.reverse(0, 0, "new guy!");
console.log("reverseMethods ", names);

const moreNames = ["Jason", "Lucas", "Mike"];
const newArray = names.concat(moreNames);

//New way to handle concat (spread operator)
const easyWay = [...names, ...moreNames];

const twoName = names.slice(0, 1);
console.log("slice method", twoName);


const contacts = [{
    name: "Steve",
    age: 26
  },
  {
    name: "Oscar",
    age: 34
  },
  {
    name: "Jason",
    age: 14
  },
  {
    name: "Sam",
    age: 44
  }
];
// checks for the first match or person over 30 years old and stop
const firstOverThirty = contacts.find((person) => {
  return person.age > 30;
})
console.log("First Mature and wise person:", firstOverThirty);

// checks for everyone over 30 years old!
const allOverThirty = contacts.filter((person) => {
  return person.age > 30;
});

// console.log("mature and wise person:", firstOverThirty);

// console.log("mature and wise person:", allOverThirty);

//Make everyone a year older than they are
const makeThemOlder = contacts.map((person) => {
  return {
    name: person.name,
    age: person.age + 1
  }
})

const findMike = contacts.findIndex((person) =>{
  return person.name === "mike"
});

console.log("find index method", findMike)

const coolName = "Yusuf";
console.log("every method:", everyMethod);



// console.log("this is the array after map:", contacts)

// let newContacts = [...contacts];

// for(let i = 0; i < newContacts.length; i++){
//   let person = newContacts[i];
//   person.name = "ken"
// }
