const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


// const titleCased = () => {
//   const cap = tutorials.split(" ");
//   cap.map(first => first[0].toUpperCase() + first.substring(1)).join(" ")  
//   return tutorials
// }


// function titleCased(tutorials) {
//   const caps = tutorials.split(' ').map(capitalize).join(' ');
//   return tutorials.charAt(0).toUpperCase()+tutorials.slice(1);
// }


// const titleCased = () => {
//   return array.map(element => 
//     element.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
//   )}

  // const titleCased = () => {
  //   return tutorials.map(function(splitted) {
  //     return splitted.split(' ').map(function(capitalizeFirstLetter) {
  //       return capitalizeFirstLetter.charAt(0).toUpperCase() + capitalizeFirstLetter.slice(1)
  //     }).join(' ')
  //   })
  // }
  

const titleCased = () => {
  return tutorials.map(function(splitted) {
    return splitted.split(' ').map(function(capitalizeFirstLetter){
      return capitalizeFirstLetter.charAt(0).toUpperCase() + capitalizeFirstLetter.slice(1)
    }).join(' ')
  })
}
//from my understanding, we are referencing tutorials, then splitting each word, the with the split words, we capitalize each letter by specifiying the charAt(0).toUpperCase() then inserting it back in by .slice(1), then joining the words back together. I do not think i can ever pass this lab.

  /*
  NOTES:

  .map() transforms every element in an array to another value

  function map(array) {
  for (const element of array) {
    // Do something to each element
  }
}


Callback:
We want map to only be concerned with iterating over the collection and passing each element to a callback

Example:

function map(array, callback) {
  for (const element of array) {
    callback(element);
  }
}


map([1, 2, 3], function (num) {
  console.log(num * num);
});
// LOG: 1
// LOG: 4
// LOG: 9


So we want to map and array, then do something with that data. map pulls it apart, and the call back function does something with those values to return a new value



const oldAccounts = [
  { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 44, title: "Developer Apprentice", accessLevel: "user" },
];

const newEngineers = map(oldAccounts, function (account) {
  return Object.assign({}, account, { accessLevel: "admin" });
});

- given oldAccounts, we want to create a new object for the newEngineers
- newEngineers is made up of the oldAccounts, but we are changing the accessLevel from "user" to "admin"

we want to map(oldAccount, callback(each account)){
  and return the object, but after assigning(each account, with new accessLevel, of "admin")
}

  */