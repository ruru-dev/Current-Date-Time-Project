// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()
  let currentDay = currentDate.getDay()
  let currentTime = currentDate.getTime()
  document.getElementById("display-element").innerHTML = `The current day is ${currentDay} and the 
    current time is ${currentTime}`;
}
 

// Write a JavaScript program to convert a number to a string.
const numToString = (num) => {
 let newString = num.toString();
 console.log(newString);
 document.getElementById("display-num-to-string").innerHTML = newString;
}

// Write a JavaScript program to convert a string to the number.

const stringToNum = (word) => {
  let newNum = parseInt(word);
  console.log(newNum);
  document.getElementById("display-string-to-num").innerHTML = newNum;
 }

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  const printType = (data) => {
    console.log(typeof data);
    document.getElementById("display-type").innerHTML = typeof data;
   }

// NOTE: Input fields will always output string as the type.

   // * Boolean
   // * Null
   // * Undefined
   // * Number
   // * NaN
   // * String

// Write a JavaScript program that adds 2 numbers together.

const addingNumbers = (num1, num2) => {
  let sum = parseInt(num1) + parseInt(num2);
  console.log(sum);
  document.getElementById("add-numbers-result").innerHTML = sum;
}

// Write a JavaScript program that runs only when 2 things are true.

const areRachelsChildren = (gender1, gender2) => {

  let message = '';
  
  if ((gender1 === "male") && (gender2 === "male")) {
    message = "Rachel has two boys!"
  }
  else{
    message = "These are not Rachel's children!"
  }
  console.log(message);
  document.getElementById("display-children").innerHTML = message;
}

// Write a JavaScript program that runs when 1 of 2 things are true.

const rachelIsHappy = (sleep, iceCream) => {

  let message = '';

  if ((sleep) || (iceCream)) {
    message = "Rachel very happy!"
  }
  else {
    message = "Rachel tired and hangry"
  }
  document.getElementById("display-rachel-mood").innerHTML = message;
}

// Write a JavaScript program that runs when both things are not true.  

const rachelNotEat = (rawFood,peas) => {

  let message = '';

  if (!rawFood && !peas) {
    message = "Rachel will eat"
  }
  else {
    message = "Rachel will not eat"
  }
  document.getElementById("display-rachel-eat").innerHTML = message;
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
