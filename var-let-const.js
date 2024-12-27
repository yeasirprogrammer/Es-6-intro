// var: No Reson to use var
// let: allow to reasign!
// const: do not reasign allow!

const money = 25;
const rich = money +25;
console.log(rich);
let count = 0;
count = count+10;
console.log(count);


const numbers = [23,4,23,12,56];
// numbers= [5,6,7,8,9]
numbers[1] = 55;
numbers.push(8,9,10)
console.log(numbers);


// object 

let student = {
    name: 'monya patil',
    class: 12
}
student = {name: 'kokil khointi'}
console.log(student);

// loop
let sum = 0;
for( let i= 0; i <10; i++){
    const num = i; 
    sum = sum+num;
}
console.log(sum);
