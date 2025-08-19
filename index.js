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
