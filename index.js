function findElement(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return arr[i];
    }
  }
  return undefined; // if not found
}

// Example usage:
const fruits = ["apple", "banana", "cherry"];
console.log(findElement(fruits, "banana")); // 👉 banana
console.log(findElement(fruits, "mango"));  // 👉 undefined


function filterArray(arr, conditionFn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (conditionFn(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Example usage:
const fruits = ["apple", "banana", "cherry", "avocado"];

// filter fruits starting with "a"
const result = filterArray(fruits, fruit => fruit.startsWith("a"));

console.log(result); // 👉 ["apple", "avocado"]


function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Example usage:
console.log(reverseString("world")); // 👉 "dlrow"
