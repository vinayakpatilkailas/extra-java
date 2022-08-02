//Q1. what is Javascript?
// Ans:
// JavaScript is the Programming Language for the Web.JavaScript can update and change both HTML and CSS.JavaScript can calculate, manipulate and validate data. JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.</p><p>JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).

//Q2. what is the javascript run time environment?
// Ans:
// A runtime environment is where your program will be executed. JavaScript code may be executed in one of two runtime environments:
//  1.a browser’s runtime environment
//  2.the Node runtime environment
//  3.In each of these environments, different data values and functions are available, and these differences help distinguish front-end applications from back-end applications.
    
// Front-end JavaScript applications are executed in a browser’s runtime environment and have access to the window object.
// Back-end JavaScript applications are executed in the Node runtime environment and have access to the file system, databases, and networks attached to the server.

//Q3. what is execution context?
// Ans:
// There are two kinds of Execution Context in JavaScript:
// 1.Global Execution Context (GEC)
// 2.Function Execution Context (FEC)

// 1. Global Execution Context (GEC)
// Whenever the JavaScript engine receives a script file, it first creates a default Execution Context known as the Global Execution Context (GEC).The GEC is the base/default Execution Context where all JavaScript code that is not inside of a function gets executed.For every JavaScript file, there can only be one GEC.
// 2. Function Execution Context (FEC)
// Whenever a function is called, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the GEC to evaluate and execute the code within that function. 
// Since every function call gets its own FEC, there can be more than one FEC in the run-time of a script.

//Q4. what is javascript Engine?
// Ans:
// JavaScript is a multi-paradigm prototype-based language, which uses JavaScript Engine such as Chrome’s V8 engine Firefox SpiderMonkey engine and etc. They convert the high level code into machine-readable code which lets computer to perform some specific tasks. We will understand this using an image.

//Q5. flow of data in engine?
// Ans:
// EcmaScript specification tells how JavaScript should be implemented by the browser so that a JavaScript program runs exactly the same in all the browsers, but it does not tell how JavaScript should run inside these browsers. It is up to the browser vendor to decide.
// Every browser provides a JavaScript engine that runs the JavaScript code. The Netscape browser used the SpiderMonkey JavaScript engine. This engine was a rudimentary interpreter with no optimizations. Running the JavaScript code with this engine was slow but it worked.
Footer
