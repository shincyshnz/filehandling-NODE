# NodeJs

Node is an environment where you can run your javascript outside the browser. Nodejs is used for server side programming. Since Node runs JavaScript code outside the web browser, this means that it doesn't have access to certain features that are only available in the browser, like the DOM or the window object or even the localStorage.

## Alt-Modules

Nodejs is a javascript runtime environment. Nodejs modules are javascript files that are imported into your Nodejs code.
Nodejs modules are imported using the import statement.

## Node Package Manager

Node package manager is a tool that allows you to install Node modules.

npm is a package manager for Node.js.

## Single export

```
// hello.js
function sayHello(name){
    console.log(`Hello ${name}`);
}

module.exports = sayHello

```

```
// app.js
const sayHello = require('./hello.js');

sayHello('John');
sayHello('Peter');
sayHello('Rohit');

```

## Multiple export

```
// myModule.js

function myFunction1() {
  console.log('Hello from myFunction1!');
}

function myFunction2() {
  console.log('Hello from myFunction2!');
}

module.exports = {
  foo: 'bar',
  myFunction1: myFunction1,
  myFunction2: myFunction2
};

```
