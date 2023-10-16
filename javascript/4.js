// "Pyramid of Doom" or "Callback Pyramid,"

asyncOperation1(function (result1) {
  // Handle the result of asyncOperation1
  asyncOperation2(result1, function (result2) {
    // Handle the result of asyncOperation2
    asyncOperation3(result2, function (result3) {
      // Handle the result of asyncOperation3
      asyncOperation4(result3, function (result4) {
        // Handle the result of asyncOperation4
        // ...
      });
    });
  });
});

//  To mitigate callback hell and improve code readability and maintainability, you can use techniques such as:

//Named Functions: Define your callback functions separately and give them meaningful names. Then, reference these named functions in your async operations.

function handleResult1(result1) {
  // Handle the result of asyncOperation1
  asyncOperation2(result1, handleResult2);
}

function handleResult2(result2) {
  // Handle the result of asyncOperation2
  asyncOperation3(result2, handleResult3);
}

// ...

asyncOperation1(handleResult1);


//   Promises: Use Promises to handle asynchronous operations in a more structured and linear way. Promises provide a cleaner way to handle asynchronous code and avoid callback nesting.
asyncOperation1()
  .then((result1) => asyncOperation2(result1))
  .then((result2) => asyncOperation3(result2))
  .then((result3) => asyncOperation4(result3))
  .then((result4) => {
    // Handle the final result
  })
  .catch((error) => {
    // Handle errors
  });


// Async/Await: If your JavaScript environment supports it (ES6+), you can use async/await to write asynchronous code in a more synchronous-style manner, which is easier to read and understand.

try {
  const result1 = await asyncOperation1();
  const result2 = await asyncOperation2(result1);
  const result3 = await asyncOperation3(result2);
  const result4 = await asyncOperation4(result3);
  // Handle the final result
} catch (error) {
  // Handle errors
}
