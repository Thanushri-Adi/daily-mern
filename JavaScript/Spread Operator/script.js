// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.
// The function should return a new array with the original array values and all of the additional arguments doubled.

function doubleAndReturnArgs(arr, ...args){
    return [
        ...arr4,
        ...args.map((x)=> x*2)
    ];
};
const arr4=[2,4,6,9,5,3];
// console.log(doubleAndReturnArgs(arr4,3,8,9,7));

//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the
// keys and values of the firstobject and secondobject

function mergeObjects(obj1,obj2){
    const objnew = {...obj1,...obj2};
    return objnew;
};
obj1 = {
    "name" : "a"
};
obj2 = {
    "age" : 18
};
// console.log(mergeObjects(obj1,obj2));