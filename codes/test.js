//original documentation-https://ecma-international.org/publications-and-standards/standards/ecma-262/

console.log("Anusha")
//alert(3+3)- happens in browser, not nodejs


const accountid = 1
let accountemail = "abcd"
accountemail = " xy"

var accountpassword = "12"
accountpassword = "54"

let anusha;

accountcity = "delhi"

console.log(accountid)

console.table([accountemail,accountid,accountpassword,anusha]);

//number-2 to power 53


//----------------------------------------------------------------------------------------------------------------

let name ="anusha";
let age= 19;
let abc = true;

// number 2^53
// bigint for big numbers
// string ""
// boolean 
// null - stand alone value
// undefined - value defined nhi kari 
// symbol - unique


//  object 

console.log(typeof age)
//type of undefined=undefined
//type of null=object


//----------------------------------------------------------------------------------------------------------------

let score="33";
console.log(typeof score);

let valueinNumber=Number(score);
console.log(typeof valueinNumber);

//"33acb"->NaN(not a number)
//true->1, false->0

let islogged="";
let bolleanislogged=Boolean(islogged);
console.log(bolleanislogged);

//----------------------------------------------------------------------------------------------------------------
//OPERATIONS

let value=3;
let negvalue=-value;
console.log(negvalue);

let str1="anusha"
let str2="divyansh"

let str3=str1 + str2;
console.log(str3);

// console.log("1" + 2);
// console.log(1+"2");
// console.log("1"+2+2);//122
// console.log(1+2+"2");//32
// console.log((3+4)*5%3);

console.log(+true)//1
console.log(+"")//0

let gameCounter=100;
gameCounter++;
console.log(gameCounter);


//----------------------------------------------------------------------------------------------------------------

console.log("2">1);//true
console.log(null>0);//false
console.log(null=0);//false
console.log(null>=0);//true

console.log("2"==1);//true
console.log("2"===1);//false-strict 

//----------------------------------------------------------------------------------------------------------------
//DATA TYPES

//primitive-7- string,number,boolean,null,undefined,symbol,BigInt

const scores=100;
const temp=null;
let userEmail;//undefined

const id=Symbol('123');
const anotherId=Symbol('123');
//both will be dif

const bignumber=52959597831099357907013n;

//reference-NON Primitive
//array,objects,functions

const heroes=["shaktiman","naagraj","doga"];

let myObj={
    name:"Anusha",
    age:19,
}

const myFunc=function(){
    console.log("Hello World");
}

console.log(typeof myFunc); //object function

//STACK MEMORY-primitive type
//HEAP MEMORY-non primitive type

//------------------------------

let myName="Anu";
let anotherName=myName;
anotherName="Divu";

console.log(anotherName);

//------------STRING------------------

const name1="Anusha";
const age1=19;

console.log(name1+age1+"Value");
console.log(`Hello my name is ${name1} and my age is ${age1}`);//string

const gameName=new String('anusha-jain');// object 0:"a", 1:"n" etc

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString=gameName.substring(0,4);//anus

const anotherString=gameName.slice(-8,4);// can take negative in slice also
const newString1="      anusha       "
console.log(newString1.trim());// anusha with no spaces
// MDN mein aur methods hai for strings

//-------------NUMBERS-----------------
const score1=400
const balance=new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));//precision value.. 100.00

const anotherNumber=23.89566
console.log(anotherNumber.toPrecision(4));

const hundreds=100000;
console.log(hundreds.toLocaleString('en-IN'));

//-------------MATHS----------------

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2));//5
// console.log(Math.floor(4.9));//4

console.log(Math.random());// bw 0 and 1
console.log(math.floor(Math.random()*10) +1);// bw 0 and 10

const min=10;
const max=20;

// formula for generating random no. in range 
console.log(Math.floor(Math.random()*(max-min+1)) +min);


//-------------DATES----------------

let myDate=new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);// date is object


let myCreatedDate=new Date(2023,0,23);//month start from 0
console.log(myCreatedDate.toLocaleString());

let myCreatedDate1=new Date("2023-01-14");// here start from 1
let myCreatedDate2=new Date("01-14-2023");//mm-dd-yy

let myTimeStamp=Date.now();

console.log(Math.floor(Date.now()/1000));// in seconds

let newDate=new Date();
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{

    weekday:"long",

})


//-----------------------------------------------------------------------------------------
//-------------ARRAYS----------------

const myArr=[0,1,2,3,4];
//resizable + mix of datatypes+ 0 indexed
console.log(myArr[2]);

myArr.push(5);
console.log(myArr);

myArr.pop();//removes last value of array

myArr.unshift(9);// adds 9 at start of myArr
myArr.shift();// removes 1st element of array

console.log(myArr.includes(0))// true/false
console.log(myArr.indexOf(0));

const newArr=myArr.join();// becomes string

//slice,splice

console.log("A",myArr);
const myn1=myArr.slice(1,3)// 1to 2.. does not remove
console.log(myn1);

const myn2=myArr.splice(1,3);//1 to 3.. removed from original array

const marvelHeroes=["thor","ironman"];
const dc=["superman","flash"];

marvelHeroes.push(dc);// dc as elemement jayga marvelHeroes mein,, dikkat

marvelHeroes.concat(dc);//same..dikkat

const allHeros=marvelHeroes.concat(dc);
console.log(allHeros);

const all_new_heroes=[...marvelHeroes,...dc];

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_arr=another_arr.flat(Infinity);


console.log(Array.isArray("Anusha"));

let a=100;
let b=200;
let c=300;

console.log(Array.of(a,b,c));

//-------------OBJECTS----------------

//singleton from constructor


//object literals
const mySym=Symbol("key1");

const JsUser={
    name:"Anusha",
    age:19,
    [mySym]:"mykey1",//symbol in square bracket
    location:"Delhi",
    email:"anushajain1606@gmail.com",
    isLoggedIn:false
};

console.log(JsUser.email);
console.log(JsUser["email"]);

JsUser.email="divu@gmail.com";
// Object.freeze(JsUser);


JsUser.greeting=function(){
    console.log("Hello Anusha");
}

console.log(JsUser.greeting());

JsUser.greeting2=function(){
    console.log(`Hello ${this.name}`);
}

console.log(JsUser.greeting2());

//-------------OBJECTS--2----------------

const tinderUser=new Object();//singleton
// const tinderUser1={};//non singleton

tinderUser.id="123"
tinderUser.name="anusha"
tinderUser.isloggedin=false;

const regularUser={
    email:"anu@gmail.com",
    fullname:{
        userfullname:{
            firstname:"anusha",
            lastname:"jain"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3=Object.assign({},obj1,obj2)// merges two

const obj4={...obj1,...obj2}// spread, easy for merging

const users={
    id:1,
    email:"a@gmai.com"
}

users[1].email;

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


//-------------OBJECTS--3----------------

const course={
    coursename:"anusha",
    price:"999",
    instructuor:"divu"
}

const{coursename}=course
console.log(coursename);


const navbar=({company})=>{

}

navbar(company="anusha")

//-------------API's----------------

// {
//     name:"anusha",
//     "coursename":"js",

// }// in JSON keys and values both are in strings

[
    {},
    {}
]

//randomuserme api