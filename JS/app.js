let myDom = document;

const myDog = {
    "name": "firulais",
    "age": 5,
    "legs": 4
};

const myCat = {
    name: "Milo",
    age: 6,
    legs: 4
} ;

console.log(myCat.name);

console.log(myDog.age);

myCat.tail =1;

console.log(myCat.tail);

/*class Mouse {
    constructor (name) {
        this.name = name ;
    }
}*/

function Mouse () {
    this.age = 4;
    this.name ="perez";
}

const myMouse = new Mouse("Jacinto");

console.log(myMouse);

/*this.document;


*/