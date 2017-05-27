// Code goes here

//Local function-level variables

function function1(){
    var myname='Chandni';
    console.log(myname);
}

function1();
// cosole.log(myname); this will give an error because myname is limited to function level scope

//Global variables. window is a global object.

var myglob='javascript';
console.log(window.myglob);
console.log("myglob" in window);

myglob2='scripting language'; //it is created without var keyword so it is considered as a global variable by default


//local and global variable preferences when variable is declared with same name.

var myvar='Hello World';

function func(){
    var myvar='Good morning';
    console.log(myvar); //This will return Good morning
    console.log(window.myvar) //if you want to access global variable here
}

func();
console.log(myvar); //this will return Hello World/**
