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

  const titleCased = () => {
    return tutorials.map(function(splitted) {
      return splitted.split(' ').map(function(capitalizeFirstLetter) {
        return capitalizeFirstLetter.charAt(0).toUpperCase() + capitalizeFirstLetter.slice(1)
      }).join(' ')
    })
  }
  