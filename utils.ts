// Define a User type
type User = {
  id: number;
  name: string;
  email: string;
};

// Function to find a user by name
function findUser(users: User[], name: string): User | undefined {
  // Loop through the array
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      return users[i]; // return the user if found
    }
  }
  return undefined; // return undefined if not found
}

// Example usage:
const users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

console.log(findUser(users, "Bob"));    // 👉 { id: 2, name: "Bob", email: "bob@example.com" }
console.log(findUser(users, "David"));  // 👉 undefined
