String is a collection of characters
Operations :
1)Template literal/String literal

let s1="farooq";
let s2="B.C.A";
let s3="National Degree College";
let s4=`Hi this is ${s1} studying ${s2} at ${s3}`;

console.log(s4);
Hi this is farooq studying B.C.A at National Degree College

let s4="implementing back slash "\" fwbjlf";
console.log(s4);

Js is case sensitive

let s1="farooq";
let s2="Farooq";
let s3="farooq";
if(s1==s2){
    console.log(`Equal`)
}
else if(s1==s3){
    console.log(`s1 and s3 are equal`);
}
else{
    console.log(`Not equal`);
}
let s1="farooq";
let s2="Farooq";
let s3="farooq";
if(s1==s2){
    console.log(`Equal`)
}
else if(s1==s3){
    console.log(`s1 and s3 are equal`);
}
else{
    console.log(`Not equal`);
}

 s1 and s3 are equal

let s1="farooq";
let s2="Farooq";
let s3="farooq";
if(s1===s2){
    console.log(`Equal`)
}
else if(s1===s3){
    console.log(`s1 and s3 are equal`);
}
else{
    console.log(`Not equal`);
}

 s1 and s3 are equal

 let str1="   this is to inform   ";
 let str2=str1.trim();
 console.log(str2);
