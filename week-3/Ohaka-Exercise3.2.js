/* ============================================
 ; Title: The Factory Pattern
; Author: Professor Krasso
; Date:   23 January 2021
; Modified By: Larry Ohaka
 ; Description: The Factory Pattern
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

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}
//Function class for Oracle
function Oracle (properties){
    this.username = properties.username || 'admin';
    this.password = properties.password || '0-s3cret';
    this.server = properties.server || 'localhost:5454';
    this.version = properties.version || '10g' 
}
//Function class for Informix
function Informix (properties) {
    this.username = properties.username || 'admin';
    this.password = properties.password || 'in-s3cret';
    this.server = properties.server || 'localhost:3030';
}
function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;

DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } 
    if(properties.databaseType === 'MySql'){
        this.databaseClass = MySql;
    }

    if(properties.databaseType === 'Oracle'){
        this.databaseClass = Oracle;
    }


    if(properties.databaseType === 'Informix'){
        this.databaseClass = Informix;
    }

    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

//New oracleFactory with default values
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: 'Oracle',
    username:"lohaka",
    password: "Awshg103"
});
//New oracleFactory with default values
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "lohaka5",
    password: "Qwerty44"
});
//Print Oracle and Informix
console.log(oracle);
console.log(informix);

// end program
