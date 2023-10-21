/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a,b){
    return a+b;
}
let sum = addTwoNumbers(3,5);
console.log(sum);
// Arrow Function With Parameters
/* const addTwoNumbers = (a,b) =>{
    return a + b;
} */

// Single Line Arrow Function With Parameters
const addTwoNumbers2   = (a , b)=> a + b; 
 console.log(addTwoNumbers2(4,6));
// Implicit Returns
// has only one argument
const saySomthing = sms => console.log(sms);
saySomthing('only one argument');

/* 
// Returning Multiple Lines
const returnMultiLines = () =>(
    `<p>
    this is multi line
    </p>`
)
console.log(returnMultiLines());

const bracketsReturn = (a,b,c) =>(
    a+b+c
);
console.log(bracketsReturn(2,3,5));
 */
// __________________ Speard Oprators  ____________________________________

let arr1= [1,3,5];
let arr2 = arr1;
arr2.push(4);
console.log(arr2);
console.log(arr1);

/**
 * just copy array without efecting the first one
 
 */
let arr3 = [2,4,6];
let arr4 = [...arr3];

arr4.push(7);
console.log('arr4',arr4);

// objects 
let obj1 ={a:1,b:3,c:5};
let obj2 = {...obj1,c:6};
let obj3 = {...obj1,d:9};
/* console.log(obj3);
let arr5 = [...arr3,0];
console.log(arr5); */

// ------------------ rest parameter --------------------------------

const sumAll = (a ,b,c) => a+b+c;
let suma = sumAll(1,2,3);
// console.log(suma);


const sumRest = (a,b,c,...rest) => {
    let sum = a + b + c ;
    for(let i of rest){
        sum+= i;
    }
    return sum;

}
console.log(sumRest(2,4,6,8,10,12));
// -----------------------------------------------------
