/* older JS */
//var name = 'julian';
//console.log(name);
//name = 'ping';
//console.log(name);

function myName(name) {
    console.log("Old JS -> this is my name: ", name);
}
myName('Julian');




/* ES6 */
// let & const
let name = 'julian';
console.log(name);
name = 'ping';
console.log(name);

const MAX = 100;
//MAX = 40;   //error
console.log("constant value", MAX)

// arrow function
const myNameArrowFunc = (name) => {
    console.log("arr func -> this is my name: ", name);
}
myNameArrowFunc("haha");

// classes
// parent
class Human {
    constructor() {
        this.gender = 'male';
    }
    printGender() {
        console.log("this one is: ", this.gender);
    }
}
// child
class Person extends Human {
    constructor() {
        super(); // inheritant from parent
        this.name = "Julian";
    }

    printName() {
        console.log("name from class Person: ", this.name)
    }

}

const person = new Person();
person.printName();
person.printGender();



/* ES7 */
class Job {
    location = "Canada";
    printLocation = () => {
        console.log("this job is in: ", this.location);
    }
}
// child
class Programmer extends Job {
    level = "Junior"
    printLevel = () => {
        console.log("the level of this job: ", this.level)
    }
}
const guy = new Programmer()
guy.printLocation();
guy.printLevel();


// destructuring // not supported
//{name} = {name:"Julian", age: 30}
//console.log(name)

// array function frag: normal JS, not es6 or 7
const numbers = [1,2,3];
const doubleArray = numbers.map((num) => {
    return num * 2;
});
console.log(numbers);
console.log(doubleArray);