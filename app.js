const arrays = [
  42,
  true,
  "Hello World!",

  {
    name: "john",
    age: 25,
    isStudent: false,
  },

  false,
  3.14,
  "javaScript is fun",
];

//                                      QUESTION 1



const stringifiedArrays = arrays.map(( element, index) => String(element));

console.log(stringifiedArrays);

//                                      QUESTION 2

const numbers = arrays.filter((element , index) => typeof element === 'number');

console.log(numbers);

//                                      QUESTION 3

arrays.forEach((element , index) => {
    console.log(typeof element);
  });

//                                      QUESTION 4

  const sumOfNumbers = arrays.reduce((element , index) => typeof index === 'number' ? element + index : element, 0);
console.log(sumOfNumbers);

//                                      QUESTION 5

const firstBoolean = arrays.find( (element , index) => typeof element === 'boolean');
console.log(firstBoolean);

//                                      QUESTION 6

const indexOfObject = arrays.findIndex((element , index) => typeof element === 'object' && !Array.isArray(element));
console.log(indexOfObject);

//                                      QUESTION 7

const containsNumber = arrays.some((element , index) => typeof element === 'number');
console.log(containsNumber);

//                                      QUESTION 8

const allStrings = arrays.every((element , index) => typeof element === 'string');
console.log(allStrings);


