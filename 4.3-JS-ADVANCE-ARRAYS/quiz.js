const pplArray = [{
    firstName: "Selene",
    age: 31,
    height: 5.1
  },
  {
    firstName: "David",
    age: 33,
    height: 6.1
  },
  {
    firstName: "Julio",
    age: 24,
    height: 5.6
  }
];

const nameExist = (name)=> {
  let result = pplArray.find((person)=>{
    return person.firstName === name 
  });
  return result ? true: false;
};


//console.log(nameExist("David"))
//console.log(nameExist("Oscar"))
//console.log(nameExist("Julio"))

const arrColors = ["Red", "Blue", "White"];

const colorExist = (color)=> {
  return arrColors.includes(color) 
};

//console.log(colorExist("blue"));

let over = (height)=>{
  return pplArray.filter((person)=>{
    return person.height > height;
  });
};

//console.log(over(5.0));

const add = pplArray.map(person=> ({...person, age: + 1}));

const taller = (height)=> {
return pplArray.map((person)=>{
 return {...person, height: person.height + 2}
});
}

console.log(taller());
