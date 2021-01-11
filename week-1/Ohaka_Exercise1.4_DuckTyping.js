/* ============================================
 ; Title: Duck Typing
; Author: Professor Krasso
; Date:   10 January 2021
; Modified By: Larry Ohaka
 ; Description: Define classes in JavaScript through functions and object literals
 ;===========================================
*/

//link to my header
const header = require('../Ohaka-header.js');
//header
console.log(header.display('Larry', 'Ohaka', 'Exercise 1.4') + '\n');


/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program

// Setting up constructor function for "Car"
function Car(model){
this.model = model;
}
// Creating a prototype "start" for "Car"
Car.prototype.start = function(){
    console.log("Car added to the racetrack!");
}

// Setting up constructor function for "Truck"
function Truck(model, year){
    this.model = model;
    this.year = year;
}
// Creating a prototype "start" for "Truck"
Truck.prototype.start = function(){
    console.log("Truck added to the racetrack!");
}

// Setting up constructor function for "Jeep"
function Jeep(model, year, color){
    this.model = model;
    this.year = year;
    this.color = color;
}
// Creating a prototype "start" for "Truck"
Jeep.prototype.start = function(){
    console.log("Jeep added to the racetrack!");
}
// Array for the racetrack
var racetrack = [];

function driveIt(vehicles){
    vehicles.start();
    racetrack.push(vehicles);
}
//Vehicle objects
var celica = new Car("Celica");
var fordF150 = new Truck ("F150", "2018");
var wrangler = new Jeep ("Wrangler", "2016", "White");
// Blank line
console.log("");
//Call the three vehicles
driveIt(celica);
driveIt(fordF150);
driveIt(wrangler);
// Printing content
console.log('\n-- The following Vehicles have been added to the Racetrack--');
for(var x = 0; x < racetrack.length; x++){
    console.log(racetrack[x].constructor.name + ":" + racetrack[x].model)
}
// end program