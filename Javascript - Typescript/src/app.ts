let id: number = 5; // :type -> type of a variable
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "Hello"; // can store anything

let ids: number[] = [1, 2, 3, 4, 5]; // stores only numbers
let arr: any[] = [1, true, "Hello"]; // stores all

// Tuple
// value in same order as defined
let person: [number, string, boolean] = [1, "Brad", true];
// Tuple Array
let employee: [number, string][]; // array of defined types

// filled as per defined above
employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
];

// Union
let pid: string | number; // can either be string or number
pid = "22"
pid = 22

// Enum
enum Direction1 {
  Up = 1,
  Down,   // 2
  Left,   // 3
  Right,  // 4
}

// can also store strings
enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// Objects

// custom defined types for a object
type User = {
  id: number;
  name: string;
};

const user: User = { // User denotes the types defined
  id: 1,
  name: "John",
};

// Type Assertion
let cid: any = 1

// two ways to assert a type
let customerId = <number> cid
let customerId2 = cid as number

// Functions
function addNum(x: number, y: number): number { // : type represent return-type of function
  return x + y;
}

// Void
function log(message: string | number): void {
  console.log(message);
}

// type keyword
type point = number | string
const p: point = 2

// interface point = number | string // throws error
// const p: point = 2

// Interfaces
interface UserInterface { // works same as type but does not work with primitive datatypes
  readonly id: number; // read only property
  name: string;
  age?: number; // optional property 
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

// Interfaces with functions

// interfaces are like a blueprint for a function
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;



// interface for class
interface PersonInterface {
  id: number;
  name: string;
  register(): string; // method returntype 
}

// Classes
class Person implements PersonInterface { // implementing a interface
  id: number;
  name: string;

  constructor(id: number, name: string) { // constructor
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const brad = new Person(1, "Brad Traversy");
const mike = new Person(2, "Mike Jordan");



// Subclasses
class Employee extends Person { // inherits the properties and methods of super class
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);  // from the super class 
    this.position = position;
  }
}

const emp = new Employee(3, "Shawn", "Developer");



// Generics
function getArray<T>(items: T[]): T[] { // generic type
  return new Array().concat(items); 
}

let numArray = getArray<number>([1, 2, 3, 4]); // stores only numbers
let strArray = getArray<string>(["brad", "John", "Jill"]); // stores only strings

// strArray.push(1) // Throws error
// strArray.push("Hey")  // now it doesn't
