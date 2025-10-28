/*
let user = {
    name: "John",
    age: 30,
    greet: function() {
        return `Hello, my name is ${this.name}!`;
    }
};

let key = prompt("Hello, Good Sir!")
alert("You said " + key + " to " + user.name + ".");

let hello = user.greet();
alert(hello);
*/

/*
// Constructor Method

function user(name, age, sex) {

    this.name = name;
    this.age = age;
    this.sex = sex;

    this.define = function() {
        this.name = prompt("What is your name.");
        this.age = prompt("What is your age.");
        this.sex = prompt("What is your sex.");
    }

    this.greeting = function() {
        return `Hello my name is ${this.name} I am a ${this.age} year old ${this.sex}.`;
    }
    
}


let person1 = new user("blank", "blank", "blank");
person1.define();
let sentence = person1.greeting();
alert(sentence);
*/

// The Odin Project - Javascript.info Execises for Objects

/*
// Map to Names Problem
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

// Problem used to demonstrate map method of arrays
let names = users.map(user => user.name).join(", ");

alert( names ); // John, Pete, Mar
*/

/*
// Map to Objects

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({ 
    fullName: user.name + " " + user.surname,
    id: user.id
    })
)

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith
*/

/*
// Sort Users by age

function sortByAge(arr) {
    arr.sort((a, b)=>(a.age-b.age));
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete
*/

function getAverageAge(arr) {
    let ages = arr.map((x) => x.age); 
    let averageAge = 0;
    for(let i=0; i<ages.length; i++) {
        averageAge += ages[i];
    }
    return averageAge/ages.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28