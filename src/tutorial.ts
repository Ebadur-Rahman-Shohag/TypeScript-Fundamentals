//TODO:*****************Type Annotations********************

/*
TypeScript Type Annotations allow developers to specify the types of variables, function parameters, return types, and object properties.
*/

//string
let awesomeName: string = "ShakeAndBake";
awesomeName = "somethingElse";
awesomeName = awesomeName.toUpperCase();
/*
awesomeName = 20; 
This is not valid, because the type of this variable is string. So, we can not assign a number in this variable.
*/
console.log(awesomeName); //Output: SOMETHINGELSE

//number
let amount: number = 20;
amount = 25;
/*
amount = "shohag";
This is not valid, because the type of this variable is number. So, we can not assign a string in this variable.
*/
console.log(amount); //Output: 25

//boolean
let isOpen: boolean = true;
isOpen = false;
/*
isOpen = 20;
This is not valid, because the type of this variable is boolen. So, we can not assign a number in this variable.
*/
console.log(isOpen); //Output: false

//TODO:*****************Type Inference*******************

/*
The typescript compiler can infer the type of the variable based on the literal value that is assigned when it is defined. Just make sure you are working in the typescript file 😄
*/

let myName = "Ebadur Rahman";
myName = "Shohag";
myName = myName.toLowerCase();
//myName = 20; //This is not valid
console.log(myName); //Output: shohag

let score = 50;
score = 30;
//score = "shohag" //This is not valid
console.log(score); //Output: 30

let isClosed = true;
isClosed = false;
//isClosed = 20 //This is not valid
console.log(isClosed); //Output: false

//TODO:*************Challenge****************
/*
- Create a variable of type string and try to invoke a string method on it.
- Create a variable of type number and try to perform a mathematical operation on it.
- Create a variable of type boolean and try to perform a logical operation on it.
- Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
- You can use type annotation or inference
*/

//1. String Type
let fullName: string = "Ebadur Rahman Shohag";
fullName = fullName.replace("Shohag", "Babu");
// fullName = 50; //This is not valid
console.log(fullName); //Output: Ebadur Rahman Babu

//2. Number Type
let a: number = 20;
let b: number = 30;
let result: number = a + b;
// result = "shohag"; //This is not valid
console.log(result); //Output: 50

//3. Boolean Type
let isBig: boolean = true;
// isBig = 20; //This is not valid
if (isBig) {
  console.log("This is BIG!");
} else {
  console.log("This is SMALLL!");
}

//TODO:*********setup info***********
/*
- even with error you can run the project but you won't be able to build it "npm run build"
*/

//TODO:**************Union Type*******************
/*
In TypeScript, a Union Type allows a variable to hold a value of multiple, distinct types, specified using the | operator. It can also be used to specify that a variable can hold one of several specific values. More examples are coming up.
*/

let money: number | string | boolean = 1000;
money = 100;
money = true;
money = "Fifty Taka";
console.log(money); //Output: Fifty Taka

// fancy name - literal value type
let status: "pending" | "success" | "error" = "pending";
status = "success";
/*
status = "random";
This is not valid. Because we set the literal value type. So can not write anything else except these types.
*/
console.log(status); //Output: success

//TODO:********************Type - any******************
let notSure: any = 4;
notSure = true; //This is a boolean type
notSure = "This is a String type";

console.log(notSure); //Output: This is a string type

//TODO:*****************Practical Application of Type Annotation*****************

const books = ["1984", "Brave New World", "Fahrenheit 451"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "1984") {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

console.log(foundBook); //Output: 1984
/*
The reason to explicitly type foundBook as string | undefined is to make it clear to anyone reading the code (including your future self) that foundBook might be undefined at runtime. This is a good practice in TypeScript because it helps prevent bugs related to undefined values.
*/

//TODO:***************Challenge - Union Type*******************
/*
 Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.
- Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'.
*/

//1. Order Status
let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = "shipped";
orderStatus = "delivered";
// orderStatus = 'cancelled'; // This will result in a TypeScript error
console.log(orderStatus);

//2. Discount
let discount: number | string = 20;
discount = "20%";
// discount = true; // This will result in a TypeScript error
console.log(discount);

//TODO:********************Array******************
/*
In TypeScript, arrays are used to store multiple values in a single variable. You can define the type of elements that an array can hold using type annotations.
*/

//Number Type
let marks = [80, 50, 60, 45, 65];
marks.push(90);
// marks.push("A+") //We can not push any string value in this array. Because the type of this array is number.
console.log(marks);

// String Type
let people: string[] = ["shohag", "dipta", "indra", "joydip"];
people.push("romu");
//people.push(50) //We can not push any number value in this array. Because the type of this array is string.
console.log(people);

//Boolean Type
let boolStore = [true, false, false, true];
boolStore.push(true);
// boolStore.push("shohag"); //We can not push any string value in this array. Because the type of this array is boolen.
console.log(boolStore);

//Union Type Array
let array: (string | number | boolean)[] = ["apple", "orange", 50, true];
console.log(array);

//Empty Array
let randomValues: [] = [];
// let randomValues:[] = [15,65] //This is not valid. Because the type of the array is empty type. So, we can not push any value in this array. If we try TypeScript will give us an error.
console.log(randomValues);

// Inferred Array Type
let names = ["peter", "susan"];
console.log(names);
let newNumber = [10, 15, 25];
console.log(newNumber);

//TODO:***************Challenge-Arrays****************
/*
- Create an array temperatures of type number[] and assign it some values. Then, try to add a string value to it.
- Create an array colors of type string[] and assign it some values. Then, try to add a boolean value to it.
- Create an array mixedArray of type (number | string)[] and assign it some values. Then, try to add a boolean value to it.
*/

// 1. Temperatures
let temperatures: number[] = [20, 25, 30];
// temperatures.push('hot'); // This will result in a TypeScript error
console.log(temperatures);

// 2. Colors
let colors: string[] = ["red", "green", "blue"];
// colors.push(true); // This will result in a TypeScript error
console.log(colors);

// 3. Mixed Array
let mixedArray: (number | string)[] = [1, "two", 3];
// mixedArray.push(true); // This will result in a TypeScript error
console.log(mixedArray);

//TODO:****************Object Fundamentals********************
/*
In TypeScript, an object is a collection of key-value pairs with specified types for each key, providing static type checking for properties.
*/
let car: { brand: string; year: number } = { brand: "toyota", year: 2020 };

car.brand = "ford";
//car.brand = 50 //This is not valid. Because the key brand is string type. So we can not assign a number value in this key.
console.log(car);

// let car1:{brand:string,year:number}= {brand:"audi"} //This is not valid

//Array of objects
let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 10 };
let noteBook = {
  title: "notebook",
};

let items: { readonly title: string; cost?: number }[] = [book, pen, noteBook];
// items[0].title = "new book" //This is not valid. We can not assin any value to the title key. Because title key is a read-only property. So, we can only read the value.
console.log(items[0].title);
console.log(items[1].cost);

//TODO:***************Challenge - Object*********************
/*
- Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.
- Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.
- Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it.
*/

//1. Bike
let bike: { brand: string; year: number } = {
  brand: "suzuki",
  year: 2020,
};

// bike.year = "hero honda" //This is not valid.This will result in a TypeScript error
console.log(bike.brand, bike.year);

//2. Laptop
/*
let laptop:{brand:string,year:2010} = {
  brand:"asus" //This is not valid.This will result in a TypeScript error
}
*/

// 3. products
let product1 = { title: "product 1", price: 50 };
let product2 = { title: "product 2" };
let products: { title: string; price?: number }[] = [product1, product2];

// products.push({title:"product 3", price:"ten"}) //This is not valid. This will result in a TypeScript error.
console.log(products[0].title);

//TODO:**************Functions - Fundamentals**************
/*
In TypeScript, functions can have typed parameters and return values, which provides static type checking and autocompletion support.
*/
function sayHi(name: string) {
  console.log(
    `He is my best friend and his name is ${name.toLocaleUpperCase()}`
  );
}
sayHi("dipta");
// sayHi(300) //This is not valid. Beacause in this function type of the parameter is string. So, we can not assign a number argument.

//TODO:*****************Function Return Type************
function calculationDiscount(price: number): number {
  // return "There is a small discount" //This is not valid. Because the type of return is set to number. So, we can not return a string statement.
  return price * 0.5;
}
console.log(calculationDiscount(200));

//TODO:*******************Type any Example****************
function addThree(number: any) {
  let anotherNumber: number = 3;
  return number + anotherNumber;
}

const finalValue = addThree(3);
let someValue = finalValue;

// run time error
// someValue.myMethod();
console.log(someValue);

//TODO:******************Function - Challenge 1**********************
/*
- Create a new array of names.
- Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
- Use this function to check if various names are in your array and log the results.
*/

//1. array
let nameArray: string[] = ["shohag", "dipta", "indra"];

//2. function
function checkName(name: string): boolean {
  if (nameArray.includes(name)) {
    return true;
  } else {
    return false;
  }
}
let nameToCheck: string = "romu";
if (checkName(nameToCheck)) {
  console.log(`${nameToCheck} is in the list`);
} else {
  console.log(`${nameToCheck} is not in the list`);
}

//TODO:******************Function - Optional Parameter and Default Parameter***************
/*
In TypeScript, a default parameter value is an alternative to an optional parameter. When you provide a default value for a parameter, you're essentially making it optional because you're specifying a value that the function will use if no argument is provided for that parameter.

However, there's a key difference between a parameter with a default value and an optional parameter. If a parameter has a default value, and you call the function without providing an argument for that parameter, the function will use the default value. But if a parameter is optional (indicated with a ?), and you call the function without providing an argument for that parameter, the value of the parameter inside the function will be undefined.

- a function with optional parameters must work when they are not supplied
*/
//Optional Parameter
function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}
// const priceAfterDiscount = calculatePrice(200, 100);
const priceAfterDiscount = calculatePrice(200);
console.log(priceAfterDiscount);

//Default Parameter
function calculateScore(
  initialScore: number,
  penaltyPoints: number = 50
): number {
  return initialScore - penaltyPoints;
}
// const scoreAfterPenaltyPoints = calculateScore(200, 100);
const scoreAfterPenaltyPoints = calculateScore(200);

console.log(scoreAfterPenaltyPoints);

//TODO:**************Function - Rest Parameter***********
/*
In JavaScript, a rest parameter is denoted by three dots (...) before the parameter's name and allows a function to accept any number of arguments. These arguments are collected into an array, which can be accessed within the function.
*/
function sum(message: string, ...numbers: number[]): string {
  let total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);
  return `${message}${total}`;
}
let sumResult = sum("The total is: ", 1, 2, 3, 4, 5);
console.log(sumResult);

//TODO:******************Function - void Type******************
/*
It's important to note that in TypeScript, a function that is declared with a void return type can still return a value, but the value will be ignored.For example, the following code is valid TypeScript:
*/
function logMessage(message: string): void {
  console.log(message);
  //return "This is a return" //This is not valid. Because the return type is void. That means we can not return anyting from this function.
}
logMessage("Hello, TypeScript");

//TODO:**************Function - Type Guards*********************
function processInput(input: string | number) {
  if (typeof input === "number") {
    console.log(input * 2);
  } else {
    console.log(input.toLocaleUpperCase());
  }
}
processInput(20); //Output: 40
processInput("Shohag"); //Output: SHOHAG

/*
In this example, the processInput function takes a parameter input that can be either a string or a number. Inside the function, we use a type guard (typeof input === 'number') to check the type of input at runtime. If input is a number, we double it. If input is a string, we convert it to uppercase.
*/

//TODO:******************Objects as Parameter*************
function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}
console.log(createEmployee({ id: 1 }));
console.log(createEmployee({ id: 2 }));

// alternative and best practice
function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to the course ${student.name.toLocaleUpperCase()}`);
}
const newStudent = {
  id: 1,
  name: "Ebadur Shohag",
};

createStudent(newStudent);

//TODO:************Excess Property Checks**************
/*
TypeScript only performs excess property checks on object literals where they're used, not on references to them.

In TypeScript, when you pass an object literal (like { id: 1, name: 'bob', email: 'bob@gmail.com' }) directly to a function or assign it to a variable with a specified type, TypeScript checks that the object only contains known properties. This is done to catch common errors.

However, when you pass newStudent to createStudent, TypeScript doesn't complain about the email property. This is because newStudent is not an object literal at the point where it's passed to createStudent.
*/

function createTeacher(teacher: { id: number; name: string }): string {
  return `Welcome to the class ${teacher.name.toLocaleUpperCase()} sir`;
}
const newTeacher = {
  id: 5,
  name: "Shamsur Rahman",
  email: "shamsur@gmail.com",
};
const firstTeacher = createTeacher(newTeacher);
console.log(firstTeacher);
// const secondTeacher = createTeacher({id:10,name:"Romana Laskar", email:"romana@gmail.com"}) //This is not valid because of email property.

//TODO:**********************Function Challenge - 2**************************
/*
Your task is to create a function named processData that accepts two parameters:

- The first parameter, input, should be a union type that can be either a string or a number.
- The second parameter, config, should be an object with a reverse property of type boolean, by default it "reverse" should be false

The function should behave as follows:

- If input is of type number, the function should return the square of the number.
- If input is of type string, the function should return the string in uppercase.
- If the reverse property on the config object is true, and input is a string, the function should return the reversed string in uppercase.
*/

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === "number") {
    return input * input;
  } else {
    return typeof input === "string" && config.reverse === true
      ? input.split("").reverse().join("").toUpperCase()
      : `${input.toUpperCase()}`;
  }
}
console.log(processData("Romana", { reverse: true }));

//TODO:****************Type Alias******************

/*
A type alias in TypeScript is a new name or shorthand for an existing type, making it easier to reuse complex types. However, it's important to note that it doesn't create a new unique type - it's just an alias.All the same rules apply to the aliased type, including the ability to mark properties as optional or readonly.
*/

//Code Without Type Alias
/*
const john: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: "John",
  isActive: true,
};

console.log(john);

const susan: { id: number; name: string; isActive: boolean } = {
  id: 5,
  name: "susan",
  isActive: false,
};

console.log(susan);

function createUser(user: { id: number; name: string; isActive: boolean }): { id: number; name: string; isActive: boolean } {
  console.log(`Hello there ${user.name.toUpperCase()}`);
  return user;
}
console.log(createUser({ id: 10, name: "shohag", isActive: true }));
*/

//Code With Type Alias
type User = { id: number; name: string; isActive: boolean };

const john: User = {
  id: 1,
  name: "John",
  isActive: true,
};

console.log(john);

const susan: User = {
  id: 5,
  name: "susan",
  isActive: false,
};

console.log(susan);

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()}`);
  return user;
}
console.log(createUser({ id: 10, name: "shohag", isActive: true }));

//Type alias is not just for object. We can also use type alias with variables and functions.
type StringOrNumber = string | number;

let value: StringOrNumber = "Hello";
value = 50;
// value = true //This is not valid.
console.log(value); //Output: 50

//Type alias for theme
type Theme = "dark" | "light";

let theme: Theme;
theme = "dark"; //This is valid
theme = "light"; //This is also valid
console.log(theme);

// Function that accepts the Theme type alias
function setTheme(t: Theme) {
  theme = t;
}
setTheme("light"); // This will set the theme to 'light'

//TODO:************************Challenge******************************
/*
- Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).

- Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).

- Create a Union Type: Define a type Staff that is a union of Employee and Manager.

- Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, use a type guard to check if the 'employees' property exists in the passed object. If it does, print a message indicating that the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that the person is an employee and the department they belong to.

- Create Employee and Manager objects: Create two Employee objects. One named alice and second named steve. Also create a Manager object named bob who manages alice and steve.

- Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output.
*/

//Employee Type
type Employee = { id: number; name: string; department: string };
//Manager type
type Manager = { id: number; name: string; employees: Employee[] };
// Union Type
type Staff = Employee | Manager;

//printStaffDetails function
function printStaffDetails(staff: Staff) {
  if ("employees" in staff) {
    console.log(
      `${staff.name} is a manager of ${staff.employees.length} employees.`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department.`
    );
  }
}

const alice: Employee = { id: 5, name: "alice", department: "Sales" };
const steve: Employee = { id: 10, name: "alice", department: "IT" };
const bob: Manager = { id: 1, name: "bob", employees: [alice, steve] };

printStaffDetails(alice);
printStaffDetails(bob);

//TODO:**********************Intersection Types****************************
/*
In TypeScript, an intersection type (TypeA & TypeB) is a way of combining multiple types into one. This means that an object of an intersection type will have all the properties of TypeA and all the properties of TypeB. It's a way of creating a new type that merges the properties of existing types.
*/

type Book = {
  id: number;
  name: string;
  price: number;
  // printName(price: number): string;
};
type DiscountedBook = Book & { discount: number }; //Intersection Type

const book1: Book = {
  id: 5,
  name: "How to cook a dragon",
  price: 15,
  // method
  /*
  printName(price) {
    return `The name of this book is ${this.name} and the price of this book is ${price} taka`;
  },
  */
};
const book2: Book = {
  id: 5,
  name: "The secret life of unicorns",
  price: 30,
};
const discountedBook: DiscountedBook = {
  id: 5,
  name: "Gnomes vs Goblin: The ultimate guide",
  price: 50,
  discount: 15,
};

console.log(book1);
console.log(book2);
console.log(discountedBook);
// console.log(book1.printName(150));

//TODO:*************************Type Alias - Computed Properties**********************

/*
Computed properties in JavaScript are a feature that allows you to dynamically create property keys on objects. This is done by wrapping an expression in square brackets [] that computes the property name when creating an object.
*/

const propName = "age";

//type alias
type Animal = { [propName]: number };

const tiger: Animal = {
  [propName]: 5,
};

console.log(tiger);

//TODO:**********************Interface - Fundamentals**************************

//- allow to setup shape for objects (only objects)
interface DeepWork {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
}

const deepWork: DeepWork = {
  isbn: 9781455586691,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "self-help",
};

//deepWork.isbn = 125; //This is not valid. Because this is a read-only property.
console.log(deepWork.title); //Output: Deep Work

//TODO:****************Interface - Methods***********************

interface DeepWorkTwo {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  //method
  printAuthor(): void;
  printTitle(message: string): string;
}

const deepWorkTwo: DeepWorkTwo = {
  isbn: 9781455586691,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "self-help",
  printAuthor() {
    console.log(`${this.author}`);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
};

deepWorkTwo.printAuthor(); //Output: Cal Newport
console.log(deepWorkTwo.printTitle("is an awesome book")); //Output: Deep Work is an awesome book

//TODO:******************Interface - Methods (more options)***************************
/*
It's generally a good practice to match the structure of the interface and the implementing object or class as closely as possible. This makes the code easier to understand and maintain. So, if printAuthor is defined as a method in the Book interface, it would be more consistent to implement it as a method in the deepWork object. This approach is optional though.
*/
interface DeepWorkThree {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  //method
  printGenre: (price: number) => string;
}

const deepWorkThree: DeepWorkThree = {
  isbn: 9781455586691,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "self-help",

  //There are three options to set a method in this way. We can choose any of them as we like.
  //first option
  /*
  printGenre: function (price) {
    return `This is a ${this.genre} book and the price of this book is ${price} taka`;
  },
  */

  // second option
  /*
  printGenre: (price) => {
    return `This is a ${deepWorkThree.genre} book and the price of this book is ${price} taka`;
  },
  */

  //third option
  printGenre(price) {
    return `This is a ${deepWorkThree.genre} book and the price of this book is ${price} taka`;
  },
};
console.log(deepWorkThree.printGenre(150)); //Output: This is a self-help book and the price of this book is 150 taka

//TODO:****************************Challenge*************************************
/*
- Start by defining an interface Computer using the interface keyword. This will serve as a blueprint for objects that will be of this type.
- Inside the interface, define the properties that the object should have. In this case, we have id, brand, ram, and storage.
- Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.
- Use the ? after the storage property to indicate that this property is optional and may not exist on all objects of this type.
- Also inside the interface, define any methods that the object should have. In this case, we have upgradeRam, which is a function that takes a number and returns a number.
- Now that we have our interface, we can create an object that adheres to this interface. This object should have all the properties defined in the interface (except for optional ones, which are... optional), and the methods should be implemented.
- Finally, we can use our object. We can call its upgradeRam method to increase its RAM.
*/

interface Computer {
  readonly id: number; // cannot be changed once initialized
  brand: string;
  ram: number;
  storage?: string; // optional property
  //method
  upgradeRam(input: number): number;
}

const laptop: Computer = {
  id: 25,
  brand: "asus",
  ram: 8, //in GB
  upgradeRam(input) {
    return input;
  },
};

laptop.storage = `The storage of this laptop is 1 TB`; // assigning value to optional property

console.log(laptop.upgradeRam(4)); // upgrades RAM by 4GB
console.log(laptop.storage);

//TODO:*******************Interface - Merging, Extend*************************

interface Person {
  name: string;
  getDetails(): void;
}

interface dogOwner {
  dogName: string;
  getDogDetails(): string;
}

//// Merging (reopening) an interface in TypeScript is a process where you declare an interface with the same name more than once, and TypeScript will merge their members.

// Merging the interface
interface Person {
  age: number;
}

// Usage
const person: Person = {
  name: "Shohag",
  age: 26,
  getDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  },
};

person.getDetails(); //Output: Name: Shohag, Age: 26

// Extending an interface in TypeScript is a way to create a new interface that inherits the properties and methods of an existing interface. You use the extends keyword to do this. When you extend an interface, the new interface will have all the members of the base interface, plus any new members that you add.

// Extending the interface
interface Employeee extends Person {
  employeeID: number;
}

const employee: Employeee = {
  employeeID: 5,
  name: "Romu",
  age: 21,
  getDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  },
};
employee.getDetails(); //Output: Name: Romu, Age: 21

// Interface multiple inheritance
interface Managerr extends Person, dogOwner {
  managePeople(): string;
}

const manager: Managerr = {
  name: "Romana Laskar",
  age: 53,
  getDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  },
  dogName: "bobo",
  getDogDetails() {
    return `Dog Name: ${this.dogName}`;
  },
  managePeople() {
    return "Managing People.....";
  },
};

manager.getDetails(); //Output: Name: Romana Laskar, Age: 53
console.log(manager.getDogDetails()); //Output: Dog Name: bobo
console.log(manager.managePeople()); //Output: Managing People.....

//TODO:*********************Challenge Part - 1****************************
/*
- Define the Person interface Start by defining a Person interface with a name property of type string.
- Define the DogOwner interface Next, define a DogOwner interface that extends Person and adds a dogName property of type string.
- Define the Manager interface Then, define a Manager interface that extends Person and adds two methods: managePeople and delegateTasks. Both methods should have a return type of void.
- Define the getEmployee function Now, define a function called getEmployee that returns a Person, DogOwner, or Manager. Inside this function, generate a random number and use it to decide which type of object to return. If the number is less than 0.33, return a Person. If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.
- Finally, create a variable called employee that can be a Person, DogOwner, or Manager, and assign it the return value of getEmployee. Then, log employee to the console.
*/

//Person Interface
interface PersonNoTwo {
  name: string;
}

//DogOwner Interface
interface DogOwnerNoTwo extends PersonNoTwo {
  dogName: string;
}

//Manager Interface
interface ManagerNoTwo extends PersonNoTwo {
  managePeople(): void;
  delegateTasks(): void;
}

//getEmployee function
function getEmployee(): PersonNoTwo | DogOwnerNoTwo | ManagerNoTwo {
  const random = Math.random();

  if (random < 0.33) {
    return {
      name: "john",
    };
  } else if (random < 0.66) {
    return {
      name: "sarah",
      dogName: "Rex",
    };
  } else {
    return {
      name: "bob",
      managePeople() {
        console.log("Managing People......");
      },
      delegateTasks() {
        console.log("Delegating Tasks......");
      },
    };
  }
}

//Variable
let employeeNoTwo: PersonNoTwo | DogOwnerNoTwo | ManagerNoTwo = getEmployee();
console.log(employeeNoTwo);

//TODO:****************Challenge Part - 2 - Interface - Type Predicate************************
/*
A type predicate in TypeScript is a special kind of return type for a function that not only returns a boolean, but also asserts that the argument is of a specific type if the function returns true. It's typically used in user-defined type guard functions to narrow down the type of a variable within a certain scope. The syntax is arg is Type, where arg is the function argument and Type is the type you're checking for.

- Define the isManager function Define a function called isManager that takes an object of type Person | DogOwner | Manager and returns a boolean. This function should check if the managePeople method exists on the object, and return true if it does and false if it doesn't. The return type of this function should be a type predicate: obj is Manager.
- Run your code to see if it works as expected. If employee is a Manager, you should see the output of the delegateTasks method in the console. If employee is a Person or DogOwner, there should be no output.
*/

//TODO:*********************Interface vs Type Alias*****************************
/*
A type alias is a way to give a name to a type. It can represent primitive types, union types, intersection types, tuples, and any other types. Once defined, the alias can be used anywhere in place of the actual type.
*/

type Person3 = {
  name: string;
  age: number;
};

let shohag: Person3 = { name: "Shohag", age: 26 };
console.log(shohag);

//Interface

//An interface is a way to define a contract for a certain structure of an object.

interface Person4 {
  name: string;
  age: number;
}

let romu: Person4 = { name: "Romu", age: 20 };
console.log(romu);

//Key Differences

//- Type aliases can represent primitive types, union types, intersection types, tuples, etc., while interfaces are primarily used to represent the shape of an object.

// Type alias for a primitive type
type Score = number;
type NumberOrString = number | string;
// Type alias for literal types
type Direction = "up" | "down" | "left" | "right";

// Using the type aliases
let gameScore: Score = 100;
let move: Direction = "up";

/*
- Interfaces can be merged using declaration merging. If you define an interface with the same name more than once, TypeScript will merge their definitions. Type aliases can't be merged in this way.

- Interfaces can be implemented by classes, while type aliases cannot.
- Type aliases can use computed properties, while interfaces cannot.
*/

//TODO:******************Tuples***********************
/*
In TypeScript, a Tuple is a special type that allows you to create an array where the type of a fixed number of elements is known, but need not be the same - in other words it's an array with fixed length and ordered with fixed types. This is useful when you want to group different types of values together.

Tuples are useful when you want to return multiple values from a function.

By default, tuples in TypeScript are not read-only. This means you can modify the values of the elements in the tuple.However, TypeScript does provide a way to make tuples read-only using the readonly keyword.
*/

let personBio: [string, number] = ["Shohag", 26];
// let personBio: [string, number] = ["Shohag", 26, "Romu"]; // This is not valid. Because the length and the type of the array are fixed.
console.log(personBio[0]);
console.log(personBio[1]);

//Optional Type
let dipta: [string, number?] = ["Dipta", 27]; //Note: This is valid
console.log(dipta); //Output: ['Dipta', 27]
let indra: [string, number?] = ["Indra"]; // Note:This is also valid. Beacause second Item of the array is set to optional.
console.log(indra); //Output: ['Indra']

//Tuples with function
function getPerson(): [string, number] {
  return ["Romana", 54];
}
console.log(getPerson()); //Output: ['Romana', 54]

let april: [string, number] = ["April", 26]; //Though the type and length is fixed in this array, we can modify it. TypeScript is not going to show any error. However we can use read-only property to prevent it.
april.push(50);
console.log(april);

let ebadur: readonly [string, number] = ["Ebadur", 26];
// ebadur.push(50); //This is not valid
console.log(ebadur);

//TODO:*************************Enums***************************

/*
Enums in TypeScript allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.
*/

enum ServerResponseStatus {
  Success = 200,
  Error = 404,
}

interface ServerResponse {
  result: ServerResponseStatus; //We can set enum as a type. In this case "result" property can only hold values that are members of that enum.
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success, //This is valid.
    // result: "successful" //This is not valid. Beacause "result" property can only hold values that are members of that enum.
    data: ["first item", "second item"],
  };
}

const response: ServerResponse = getServerResponse();
console.log(response);

//TODO:******************Enums - Gotcha : Reverse Mapping****************************
