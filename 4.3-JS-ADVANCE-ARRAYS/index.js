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
names.push("Yusuf-Al-Colocho")
console.log("Push Method to end of array:", names);


//method to add item to beginning of list
names.unshift("Yusuf");
console.log("unshift Method to add at the start of an array:", names);

// How to get item in the middle of any array's length 

const middleMan = Math.floor(names.length / 2);
//const middleMan = Math.round((names.length -1) / 2); (just another wait of getting middle guy)
console.log("middle guy here:", names[middleMan]);

// Higher Order Array //
const getYusuf = names.find((name) => {
  return name === "Yusuf"
});

console.log("FutureDev here:", getYusuf);

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

console.log("mature and wise person:", firstOverThirty);

console.log("mature and wise person:", allOverThirty);

//Make everyone a year older than they are
const makeThemOlder = contacts.map((person) => {
  return {
    name: person.name,
    age: person.age + 1
  }
})

console.log("Now everyone older by one year:", makeThemOlder);
