//Write a JavaScript function that returns array elements larger than a number

function arrEle(arr,n){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>n){
            console.log(arr[i]);
        }
    }
}
// arrEle([1,2,3,4,8,6,9,4,10],3);

// Write a JavaScript function to extract unique characters from a string

function uniqueStr(str){
    let res="";
    for(let i=0;i<str.length;i++){
        if(res.indexOf(str[i]) === -1){
            res += str[i];
        }
    }
    return res;
}
// console.log(uniqueStr("lgverjjbevlwjehjebcn"));

// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output

function maxString(arr){
    let max=0;
    let maxStr;
    for(let i of arr){
        if(i.length > max){
            max = i.length;
           maxStr = i; 
        }
    }
    return maxStr;
}
// console.log(maxString(['ahck','biduguthrthi','cdhviijv']));

//Write a JavaScript function to count the number of vowels in a String argument

function vowelCheck(str){
    let count=0;
    for(let i in str) {
    if(str[i]=='a' || str[i] =='e' || str[i]=='i' || str[i]=='o' || str[i]=='u' ){
        count += 1;
    }
}
    return count;
} 
// console.log(vowelCheck("thanushri"));

// Write a JavaScript function to generate a random number with in a range(start,end)

function randomNum(start,end){
    let random = Math.floor(Math.random()* end) + start;
    return random;  
}
// console.log(randomNum(10,30));

let a = 987654321234567823456789098765434567890987887n;
// console.log(a);

// let arr1=[1,2,3,5,7];
// let arr2=[5,6,7,9,3];
// let combine = [...arr1,...arr2];
// console.log(combine);

