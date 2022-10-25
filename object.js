// Declaration of object, set and get object properties, Dot vs Bracket Notation 
// Object.keys() Object.values() 

var sakib={
    name:"sakib al hassan",
    age:30,
    country:"Bangladesh",
    isAllRounder:true,
    isCaptain:true
}

// console.log(sakib.isCaptain);  //dot notation
// console.log(sakib['country'])  //bracket notation

// var properties='country'
// console.log(sakib[properties])  //bracket notation

sakib.isActive=true  //set property
// console.log(sakib)

// console.log(Object.keys(sakib));
console.log(Object.values(sakib))






