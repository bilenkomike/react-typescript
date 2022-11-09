// primitives
// complexobjects
// functions



// Primitives
let age:number = 12;

let userName: string = 'Max';

let isInstructor:boolean = true;


// complex objects

let hobbies:string[];
hobbies = ['Hokey',];

let person: {
    name: string, 
    age: number
};

person = {
    name: 'Max',
    age: 32,
};

// person = {
//     isEmployee: true
// }

let people: {
    name: string, 
    age: number
}[];




// Type interface

let course:string | number = 'React - complete guide';


// union types = "type | type"
// let course:string | number = 'React - complete guide';



// type alias
type Person = {
    name: string, 
    age: number
};

// person = {
//     name: 'Max',
//     age: 32,
// };
let person1: Person[];

// person = {
//     isEmployee: true
// }

let people1: Person[];


// functions & Types

// function add(a:number,b:number) {
//     return a + b;
// }


function printout(value:any) {
    console.log(value);
}

// Generics


function insertAtBeginnig<T>(array: T[], value:T) {
    const newArray = [value,...array];
    return newArray;
}

const demoArray = [1,2,3];
const updatedArray = insertAtBeginnig(demoArray, -1);
