/* ============================================
 ; Title: Class Refresher
; Author: Professor Krasso
; Date:   10 January 2021
; Modified By: Larry Ohaka
 ; Description: Define classes in JavaScript through functions and object literals
 ;===========================================
*/

//link to my header
const header = require('../Ohaka-header.js');
//header
console.log(header.display('Larry', 'Ohaka', 'Exercise 1.3') + '\n');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program
// Cellphone object with varied properties and methods
function cellPhone(Manufacturer, Model , Color, Price){
this.Manufacturer = Manufacturer;
this.Model = Model;
this.Color = Color;
this.Price = Price;

//Get price will return cellphone Price
this.getPrice = function(){
    return this.Price;
}
//Get Model will return cellphone Model
this.getModel = function()
{
    return this.Model;
}
//Get Details will return cellphone Details
this.getDetails = function(){
    
        return "Manufacturer: " + this.Manufacturer + "\nModel: " + this.getModel() + "\nColor: " + this.color + "\nPrice: " + this.getPrice();
    
}
}

var cellPhone = new cellPhone( "Samsung", "Galaxy S20", "White", "599.00");
console.log("-- DISPLAYING CELL PHONE DETAILS --");
console.log(cellPhone.getDetails());


// end program


