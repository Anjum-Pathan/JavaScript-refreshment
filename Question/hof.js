//Higher order function
//Given an array of objects, 
//write a function that returns a new array with only the names of each object.

// Function to extract names from an array of objects using higher-order functions
function extractNames(objectsArray) {
    const namesArray = objectsArray.map(obj => obj.name);
    return namesArray; 
  }
    const arrayOfObjects = [
    { name: 'John', age: 28 },
    { name: 'Jane', age: 22 },
    { name: 'Sam', age: 35 }
  ];
  

  const names = extractNames(arrayOfObjects);
  
  // Output the result
  console.log(names); 
  