// Code goes here

//JSON parsing convert string to javascript object

var str='{"name":"Chandni","dob":"07/05/1993","age":"24","state":"Texas","city":"plano" }';
var obj=JSON.parse(str);
console.dir(obj);

//add name value pair and use stringify method to convert Json object to string

obj.Zipcode="75024";
obj.something=undefined; //stringify is smart enough to ignore this undefined value and function.
obj.function=function (){
}
console.log(JSON.stringify(obj));


//Javascript Functions

function func1(){
    return 100;
}
console.log(func1());

//Below both function return undefined
function func2(){

}
function func3(){
    return;
}

console.log(func2(),func3());

//Function inside object

var obj={
    name:'javascript',
    display:function(){
        console.log('Hello World');
    }
}
obj.display();

//Check if property is a function or not

if(typeof(obj.display)=="function")
{
    console.log(obj.display());
}

//Function declaration --> we can call it before we create it

function1();  //you can call it here. there is no error.

function function1()
{
    console.log("This is a function1");
}

//Function Expression --> we can assign a function to  variables.

var function2=function(){
    console.log("This is Function2");
}

function2();  //you can not write this before creating this function.


//Function with parameters

function funpara(a,b,c,d){
    console.log(a,b,c,d);
}

funpara(100,200,300,400);
funpara(); //if we don't pass any parameter it will return undefined
funpara("hi","Hello"); // if parameters missing, undefined returns inplace of parameter
funpara("hi","hello","world","good","morning"); //if more parameteres passed extra parameters will be ignored.

function function3(a,b,c,d){

    console.dir(arguments); //this will return all arguments even if we didn't define it in function parameter.
}
function3(10,20,30,40,50,60);


/**
 * Created by CHANDOOO!!!! on 5/27/2017.
 */
