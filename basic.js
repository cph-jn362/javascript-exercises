let name = "John";
name = "Christian";

const pi = 3.14;

var pen = "red";
var pen = "blue";

console.log(pen); 

import { Cat, cat } from "./cat";

 function add(a,b){
    return a+b;
}

console.log(add(2+5));


 var firstName = "John";
var lastName = "Nielsen";

function name(a,b){
    console.log(a+b)
}

console.log(name('John', 'Nielsen'));

console.log(firstName + ' ' + lastName); 


 function area(a,b){
    return a*b;
}

console.log(area(10,4) + ' ' + 'cm2'); 


 function distance(speed, time){
    return speed*time;
}

console.log("Distance travelled " + distance(10,5)); 

let calculator = {
    name: 'John Geoffrey Nielsen!',
    time: 20,
    speed: 10,
    distance: function(){
        return this.speed*this.time;
    }
}


console.log(calculator.name + " has travelled " + calculator.distance() + " kilometers"); 

let cat2 = new Cat('charlies', 18, 'white');
console.log(cat2());

