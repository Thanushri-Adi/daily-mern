// Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers
let arrayAverage = (arr) => {
    let sum=0;
    for(let i of arr){
        sum+=i;
    }
    return sum/arr.length;
}
// console.log(arrayAverage([1,3,5,7,8]));

// Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not
const isEven = (n) => {
    if(n%2==0){
        return "even";
    } else {
        return "odd";
    }
}
// console.log(isEven(-7));

// Square and sum the array elements using the arrow function and then find the average of the array

const arr=[1,2,3,4,5,6,7,8];
const AvgofSquares = arr => arr.reduce((sum,num) => sum+num**2,0) / arr.length;
// console.log(AvgofSquares(arr));

//Create a new array using the map function whose each element is equal to the original element plus 5

const arr2=[2,5,7,9,5,8,3];
const fiveplus = arr2 => arr2.map((num) => num+5);
// console.log(fiveplus(arr2));

// Create a new array whose elements are in upper case of words present in the original array.

const arr3=['th','ab', 'ht'];
const upper = arr3 => arr3.map((word)=>word.toUpperCase());
// console.log(upper(arr3))

