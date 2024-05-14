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

