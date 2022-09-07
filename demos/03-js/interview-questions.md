&copy; Prashanth Puranik, www.digdeeper.in

# Interview Questions (JavaScript)

## Data types, variables and scopes
- Explain the data types in JS.
    - __Primitive__ - number, boolean, string etc.
    - __Non-primitive__ - object, array, function
- How is ```let``` different from ```var```? Which should be used?
    - ```let``` variables have block-scope (when declared in a block), they cannot be redeclared, are not hoisted (have _temporal dead zone_)
    - Avoid using ```var``` as they do not support block-scope (variables in block become either global or function-scoped). Limiting scope is always better as it reduces chances of bugs due to accidental modification of variable values (thus making ```let``` and ```const``` better choices).
- How is ```let``` different from ```const```? How will you choose between the two?
    - The variables declared using either have similar scope. However ```const``` variables must be initialized, and CANNOT be reassigned
    - Firstly, prefer ```const``` when you do not plan to reassign the variable after the initial value is given. Use ```let``` otherwise.
- What are the features available in backtick quoted strings (__template strings__) that single/double quoted strings do not have?
    - Multi-line strings
    - String interpolation (${})
    - Tagged template literals (advanced concept and can be left out in an answer)
- Explain scope of variables in JS.
    - _global_ and _function-level_ scopes.
    - let and const variables also support _block_ scope
    - inner functions can use outer function variables
- Explain some places where we get ```undefined``` as a value in JS code.
    - Uninitialized variable
    - accessing a non-existent property of an object
    - accessing elements beyond an array's bounds
    - the valued returned by a function that does not return something explicitly
- What is meant when it is said that strings are immutable?
    - The value of a string cannot be changed
    - Strings methods may return a new string but will never change the string calling the method.

## Operators
- What are some operators used for querying the underlying data type?
    - ```typeof``` (for primitive type testing)
    - ```instanceof``` (for testing if a class lies in the inheritance hierarchy of an object)
- What is the difference between ```==``` and ```===```? Which one is preferred? Why?
    - ```==``` is not type-safe and ```===``` is type-safe (compares for equality of data type and not only the underlying value).
    - We must prefer using ```===``` to avoid unintended bugs.
    - One place where ```==```is helpful though is when we read a value from an input that holds a number value (it would be read as a string) and would like to check for equality against a number.
- What are the ```falsy``` and ```truthy``` values?
    - false, null, undefined, 0, "" (empty string) are the __falsy__ values. NaN may also be classified as falsy. They all are equivalent to false in a condition check (like if condition etc.). All other values are equivalent of true and hence considered __truthy__.

## Objects
- When is it necessary to quote the key in an object?
    - When the object's key has special characters not allowed in an identifier
- Can we add a property after an object is created? Can we add a method (is also a property)?
    - Yes. Yes.
- How can you create a _deep copy_ of an object?
    - We can use ```JSON.stringify()``` and ```JSON.parse()``` in conjunction. But this works only if the object has only the JSON format values (number, boolean, string, null, object, array) as values of the keys.
    - We can use spread operator repeatedly to simplify copying over key-value pairs. But this is impractical for deeply nested objects.
    - We need a recursive method in general

## Functions
- What are the various syntaxes for creating a function in JS? How are they different?
    - function declaration
    - function expression
    - arrow function  
    - There are some other ways as well
        - function declaration and function expression syntax differ in the way they are _hoisted_. There are differences in which they are assigned a name as well.
        - arrow functions were created to help carry over the function context ("this") of their lexical scope (the enclosing scope's "this"). They do not have a "this" of their own.
- How is an arrow function different from a function declared using function declaration/expression syntax? How will you choose the syntax to declare a function with?
    - an arrow function has no function context of its own ("this"). It is used when we declare an inner function and would like to use the "this" from the outer function/scope.
- What are the situations where an arrow function MUST NOT be used?
- What do you mean by __function are first-class citizens__?
- What is a __higher-order function__?
- What is function context (```this```)? What is it assigned when a function is called?
- How can we call a function with a desired context?
    - Using ```call()```, ```apply()```, or ```bind()```
- Explain ```call()``` and ```apply()```. What is the difference between the two?
- What is the difference between ```call()``` and ```bind()```?
- Explain __arguments__ object in a function. When can it be useful?
- Explain how arguments are assigned to functions for primitives and non-primitives (pass by value, and pass by reference).
- What is a __closure__? What is __lexical scoping__? Explain any application of closures.
    - Every function creates a new set of variables that are in its scopre. This is the closure created by the function. The set of variables depends on the place the function is defined (and not where it is used). As a result the function can use variables in its closure, which is the set of variables available in its scope when it was created (its own variables, the variables in its enclosing scope which may be another function, etc.)
    - Application - __data hiding (the module pattern)__, associating a "__memory__" to a function - i.e. a set of variables in its enclosing function scope etc. (this is similar to static variables available across function calls in certain labguages like C)
- Give any application of passing a function to another function as an argument?
    - It is used to pass __helper functions__ (eg. the built in array iterator methods accept an iterator function, array sort accepts a helper function that helps decide the sort order of a pair of items in the array etc.)
    - It is used to pass __callback functions__ that will be passed the result of a asynchronous operation (eg. event handlers are passed as callbacks to DOM node's addEventListener method, and are called when an event occurs, and passed the event object as an argument)
- Name some of the __array iterator methods__. When will you use which one? Give some typical examples.
- What is an __asynchronous function__? Give some examples. How do we get the reult of an operation carried out in an asynchronous function?
    - Function that completes its operation at an point in future (which cannot be predicted exactly). The either acept callbacks and call them to pass the result, or return a promise which resolves/rejects later.
- Explain callback hell with an example.
- What is/are the disadvantage(s) of the __callback pattern__? Explain the __promise pattern__ and how it is better than the callback pattern.
- What are its various states of a promise object?
- Explain how to use the __async__..__await__ construct. How is it better than using then() and catch() of promise objects?

## Miscellaneous
- What is __hoisting__? How does variable hoisting work? How dows function hoisting work?
- Explain what the JSON object methods ```parse()``` and ```stringify()``` do.
- What do you understand by the __single-threaded nature__ of JS?
- Explain how the __event queue__ and __event loop__ works.
- Explain __array__ and __object destructuring__
- What is the difference between __rest__ and __spread__ operators? What are the uses of each one?
- How do you declare a class and use it in ES2015?
- What is a __default export__?

## Browser and DOM
- Explain the difference storage mechanisms in the browser. Which one will you use and when?
    - Cookies
    - Local storage, session storage
    - IndexedDB
- What is the difference between __local storage__ and __session storage__? How will you choose between the two?
- Where can you store sensitive information like an access token? Which is more secure and why?
    - Cookies are safer than local and  session storage. This is because they can be prevented from access using JS, and only set by the server using a ```Set-Cookie``` HTTP header in the server's HTTP response. This prevents __XSS attacks__ (cross-site scripting) whereby hackers inject JS logic into a web page with the hope to gain access to sensitive information.
- How will you store objects as values in local or session storage?
    - Use JSON.stringify() to convert object / array to string, then store it. When reading, read the string, and convert back to object / array.
- Explain how cookies work.
    - Server sets cookies using ```Set-Cookie``` HTTP header sent in response. They may also be set using JS in the frontend. Cookies stored by a website are passed to server in every HTTP request to the server. This way the server receives back cookies and is able to identify the user, or other useful information to customize the response.
- What is the __DOM__?
- Explain some of the methods used to query the DOM.
- Explain the event object in event handlers. What does ```event.preventDefault()``` do?
- Name some of the important events in the browser.
- What is event propagation? What are the __capture__ and __bubble__ phases of event flow? What does ```event.stopPropagation()``` do?
- Explain the difference between window object's ```load``` event and document object's ```DOMContentLoaded``` event. Which would you prefer handling when you want to do something right after the DOM has been created? Why?
- What is __AJAX__? What are the various ways of making AJAX requests? Explain how to use the ```fetch()``` API.
- Explain the __CORS__ policy.

## References
- [The Modern javaScript Tutorial](https://javascript.info/)
- [Mozilla Developer Network](https://developer.mozilla.org/en-US/)

&copy; Prashanth Puranik, www.digdeeper.in