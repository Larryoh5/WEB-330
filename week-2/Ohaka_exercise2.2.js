/* ============================================
 ; Title: Prototypes
; Author: Professor Krasso
; Date:   17 January 2021
; Modified By: Larry Ohaka
 ; Description: Advantages of Prototypes in code
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

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program
//Establish the person variable and assign it to the getAge function
var person = {
    getAge: function(){
        return this.getAge;
    } 
};
//Object literal for  Mike with getAge() function
var mike = Object.create(person, {
    "age":
    {
        "value": "25"
    },
    "fullname":{
        "value": "Mike Brown"
    }
});
//Pass the getAge function
mike.getAge();
//Calls person's fullname
console.log("This person's full name is:'%s'", mike.fullname);
//Calls person's Age
console.log("The person's age is '%s'", mike.age);



// end program
