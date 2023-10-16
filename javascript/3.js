// Define a function that takes a callback function as an argument
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    
    // Check if a callback function is provided and call it
    if (typeof callback === 'function') {
      callback();
    }
  }
  
  // Define a callback function
  function sayGoodbye() {
    console.log('Goodbye!');
  }
  
  // Call the greet function with a name and a callback
  greet('Alice', sayGoodbye);
  
  // Output:
  // Hello, Alice!
  // Goodbye!
  