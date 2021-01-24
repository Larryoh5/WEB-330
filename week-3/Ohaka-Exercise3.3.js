/* ============================================
 ; Title: The Singleton Pattern
; Author: Professor Krasso
; Date:   23 January 2021
; Modified By: Larry Ohaka
 ; Description: A way of creating a singlized instance of an object and they are responsible of managing the state/visability of that object
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

 Same database instance? true

*/

// start program

var DatabaseSingleton = (function() {
    var instance;
    //checks if instance is active and if not it returns the instance below 
    function createInstance() {
     var postgresDatabase = new Object("Database instance initialized!");
      return postgresDatabase;
    }
      return {
         getInstance: function() {
            if (!instance) {
               instance = createInstance();
            }
            return instance;
        }
    }
   })();
   
function databaseSingletonTest(){
    // Calls class & method
    var oracle = DatabaseSingleton.getInstance();
    // Calls class & method
    var postgres = DatabaseSingleton.getInstance();
//Prints comparison  of the two objects and see if they actually are the same object or if they're different objects
    console.log("Same database instance? %s", oracle === postgres);
}
 // Call the test function
databaseSingletonTest();

// end program