//  const max = Math.max(6,23,45,1,89,23)
//  const numbers = [ 3,5,2,45,5,43,90,32,15];
//  const arryMax = Math.max(...max.numbers);
// //  console.log(...numbers);
//  console.log(arryMax);
// //  use spread operator to copy 
// const nums = [4, 5, 87, 9];
// const nums2 =nums;
// nums2.push(12);
// console.log(nums2);


// 1. অ্যারের ক্ষেত্রে ব্যবহারে
// Spread operator অ্যারের সমস্ত এলিমেন্টকে "ভেঙে" আলাদা করে ফেলে।


// উদাহরণ ১: অ্যারে কপি করা
const numbers = [1, 2, 3];
const newNumbers = [...numbers]; // আগের array থেকে নতুন কপি
console.log(newNumbers); // [1, 2, 3]

// উদাহরণ ২: দুটি অ্যারে একত্রিত করা
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// 2. অবজেক্টের ক্ষেত্রে ব্যবহারে
// Spread operator অবজেক্টের প্রপার্টিগুলো কপি বা একত্রিত করতে ব্যবহৃত হয়।

// উদাহরণ ১: অবজেক্ট কপি করা
const person = { name: "Yeasir", age: 25 };
const newPerson = { ...person };
console.log(newPerson); // { name: "Yeasir", age: 25 }


// 3. ফাংশনের আর্গুমেন্টে ব্যবহার
// Spread operator ফাংশনে অ্যারে বা অবজেক্ট-কে আলাদা আলাদা আর্গুমেন্ট হিসেবে পাস করতে ব্যবহৃত হয়।

// উদাহরণ:

const numbers3 = [10, 20, 30];
function add(a, b, c) {
  return a + b + c;
}
console.log(add(...numbers3)); // 60 (10 + 20 + 30)

// সহজভাবে মনে রাখার উপায়:
// Spread Operator ব্যবহার করলে কোনো কিছু "ভেঙে" আলাদা করা যায়।
// এটি অ্যারে বা অবজেক্টের কপি বা একত্রিত করার জন্য দারুণ।
// তিনটি ডট (...) দিয়ে এটি ব্যবহার করা হয়।
// তোমার কোনো জায়গায় ব্যবহার করতে সমস্যা হলে, উদাহরণ দিয়ে বললে আরও ভালোভাবে বুঝিয়ে দিতে পারব। 😊