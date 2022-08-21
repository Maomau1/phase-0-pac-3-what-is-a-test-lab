const name = "Susan";
const height = 34;
const message = `${name} is ${height} inches tall`;

module.exports = {name, height, message};

function doNothing() {}

function sayHello() {
    console.log("Hello!");
  }
/*
  sayHello();

  function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe");
  }
  sayHelloToGuadalupe();

  function sayHelloTo(firstname) {
    console.log(`Hello, ${firstname}!`);
  }
 
  sayHelloTo("Sam");
  sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1); // "Hello, 1!"

  sayHelloTo(["Sam","Penelope","Sam"]);

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }

  say("hi", "buddy");
*/
  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
    
  }
  console.log(say("Howdy", "partner"));