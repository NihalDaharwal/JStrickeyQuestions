// Template literals, introduced in ECMAScript 6 (ES6), allow you to embed expressions and create strings in a more concise and readable way. You can use template literals in various JavaScript methods and contexts. Here are some common JavaScript methods and operations where template literals work:

// 1.String Interpolation: You can directly use template literals to interpolate values within strings
const name = "Alice";
const greeting = `Hello, ${name}!`;

// 2.String Concatenation: Template literals can be used to concatenate strings with other strings or variables.
const str1 = "Hello, ";
const str2 = "world!";
const combined = `${str1}${str2}`;

// 3.Function Templates: You can use template literals to create multi-line strings inside functions.
function generateHTML(content) {
  return `
      <div class="container">
        <p>${content}</p>
      </div>
    `;
}

// 4. Tagged Templates: You can use template literals with tagged template functions to perform custom string manipulation.
function customTag(strings, ...values) {
  // Custom logic here
  return `${strings[0]}[${values[0]}]${strings[1]}`;
}

const result = customTag`The value is: ${10}`;
// result will be "The value is: [10]"

// 5.Console Output: You can use template literals when logging messages to the console for easier debugging.
const variable = 42;
console.log(`The value of variable is: ${variable}`);

// 6.Dynamically Generating HTML: When working with web development, template literals are commonly used to generate HTML dynamically.
const content = "<h1>Hello, world!</h1>";
document.getElementById("container").innerHTML = content;

// 7. URLs: Template literals can be used to create dynamic URLs.
const endpoint = "api";
const id = 42;
const url = `https://example.com/${endpoint}/${id}`;
