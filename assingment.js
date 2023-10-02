//  sol:

function truncate_string(str,num){
  return str.slice(0,num);
}
console.log(truncate_string("Robin Singh",4));


// sol:


function abbrev_name(name) {
  const parts = name.split(" ");
  return parts[0] + " " + parts[1][0] + ".";
}
console.log(abbrev_name("Robin Singh"));


// sol:


function protect_email(email){
const parts=email.split("@");
const username=parts[0];
const domain=parts[1];
const hiddenUsername = username.slice(0,5)+"... "+ username.slice(-2);
return hiddenUsername+"@"+domain;
}
console.log(protect_email("robin_singh@example.com"));

// sol:


function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize('js string exercises'));

// sol:

function uncapitalize(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);

}
console.log(uncapitalize('Js string exercises'));

// sol:

function truncateText( str,length,ending){
  if (length==null){
  length = 100;
 }
 if (ending== null){
  ending="...";
 }
 if (str.length>length);
 return str.substr(0,length-ending.length)+ending
}

console.log(truncateText("we are going to zoo today"));
console.log(truncateText("we are going to zoo today.",19));
console.log(truncateText('we are going to zoo today.',15));

// sol:

function truncateText(str, maxLength) {
  if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
  }
  return str;
}
console.log(truncateText("This is a long sentence.", 10));
console.log(truncateText("Short text.", 15));

// sol:

function greetTimeOfDay(hours) {
    if (hours >= 6 && hours <= 11) {
        console.log("Good morning");
    } else if (hours >= 12 && hours <= 17) {
        console.log("Good afternoon");
    } else if (hours >= 18 && hours <= 23) {
        console.log("Good evening");
    }else{
      console.log("good bye")
    
    }
}
greetTimeOfDay(24)

// sol:

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log("Leap year");
  } else {
      console.log("Not a leap year");
  }
}
isLeapYear(2003)

// sol:

function positiveNegativeZero(num) {
 if (num > 0) {
      console.log("The number is Positive");
  } else if (num < 0) {
      console.log("The number is Negative");
  } else {
      console.log("The number is Zero");
  }
    }
  positiveNegativeZero(1)

  // sol:

  
function calculateGrade(score) {
  if (score >= 90) {
      console.log("A");
  } else if (score >= 80) {
      console.log("B");
  } else if (score >= 70) {
      console.log("C");
  } else if (score >= 60) {
      console.log("D");
  } else {
      console.log("F");
  }
}
calculateGrade(59)

function evenOrOdd(num) {
  if (num % 2 === 0) {
      console.log("Even");
  } else {	
      console.log("odd")
}
}
 evenOrOdd(0)

//  sol:

function checkAge(age) {
  if (age >= 18 && age <= 65) {
      console.log("Allowed");
  } else {
      console.log("Not allowed");
  }
}
checkAge(17)

// sol:

function calculateTicketPrice(age, isStudent) {
  if (age < 18 || isStudent) {
      console.log("Discounted price");
  } else {
      console.log("Regular price");
  }
}
  calculateTicketPrice(2)

// sol:


function validateUsername(username) {
  if (username.length >= 6 && /^[a-zA-Z0-9]+$/.test(username)) {
      console.log("Valid");
  } else {
      console.log("Invalid");
  }
}
validateUsername(123456)

// sol:


function selectColor(color, isAvailable) {
  if (isAvailable) {
      if (color === "blue" || color === "green") {
          console.log("Selected");
      } else if (color === "red") {
          console.log("Not available");
      } else {
          console.log("Invalid choice");
      }
  } else {
      console.log("Color not available");
  }
}

selectColor(0)

// sol:


const fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("grape");
console.log(fruits);
fruits.shift();
console.log(fruits);

// sol:

const myStack = [];
myStack.push(10);
myStack.push(20);
myStack.push(30);
console.log(myStack);
myStack.pop();
console.log(myStack);
myStack.push(40);
console.log(myStack);

// sol:

const myQueue = [];
myQueue.push("a");
myQueue.push("b");
myQueue.push("c");
console.log(myQueue);
myQueue.shift();
console.log(myQueue);
myQueue.push("d");
console.log(myQueue);

// sol : 20

const shoppingList = [];
shoppingList.push("eggs");
shoppingList.push("milk");
shoppingList.push("bread");
shoppingList.push("vegetables");
console.log(shoppingList);
shoppingList.splice(shoppingList.indexOf("bread"), 1);
console.log(shoppingList);


















  





  
 












