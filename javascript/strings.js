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


 let str1="Farooq";
 let str2="farooq";
 console.log(str1.toLowerCase());
 console.log(str2.toUpperCase());

 let str3="aMstrnhfdc";
 let s4=str3[0].toUpperCase();

 str3
'aMstrnhfdc'
charAt(0)

str3.charAt(0)
'a'
str3.charAt(1)
'M'
str3.charAt(2)
's'
str3.charAt(6)
'h'
str3.charAt(6)
'h'
str3.slice(1)
'Mstrnhfdc'
str3.slice(1,5)
'Mstr'
str3
'aMstrnhfdc'
str3.charAt(0).toUpperCase()
'A'
q=str3.charAt(0).toUpperCase()
'A'
p=str3.slice(1).toLowerCase()
'mstrnhfdc'
q+p
'Amstrnhfdc'

str1="Iam learning javascript"
'Iam learning javascript'
str1.slice(0,3)
'Iam'

str1.slice(4,3)
''

str1.slice(4,9)
'learn'

1="Iam learning javascript"
'Iam learning javascript'
str1.slice(0,3)
'Iam'
str1.slice(4,3)
''
str1.slice(4,9)
'learn'
str1.slice(0,4)
'Iam '
str1.slice(4,12)
'learning'

str3.slice(13,19)
''
str1.slice(13,19)
'javasc'
str1.slice(13,29)
'javascript'
str1
'Iam learning javascript'
str2
'farooq'
str1.slice(2,10)
'm learni'
str1.substr(2,10)//The substr() method is little different from slice(),substring() method
'm learning'
str1.substring(2,10)
'm learni'
str2.substring(0,1)
'f'
str2.substring(0,2)
'fa'
str2.substring(0,3)
'far'
str2.slicee(0,3)

str2.slice(0,3)
'far'
str2.slice(0,2)
'fa'
str2.slice(1,2)
'a'
str2.slice(2,4)
'ro'
str2.substring(2,4)
'ro'
str2.substr(2,4)
'rooq'
str2.substr(1,2)
'ar'
str2.substr(0,3)
'far'

str1.slice(0,4)
'Iam '

str1.slice(4,12)
'learning'

str3.slice(13,19)
''

str1.slice(13,19)
'javasc'

str1.slice(13,29)
'javascript'

NOTE:BOTH SLICE() AND SUBSTR() ARE SAME BUT THE SUBSTRING(position where we want to extract From,NUmber of elements we want to extract) IS DIFFERENT

tr1
'Iam learning javascript'
str2
'farooq'
str1.slice(2,10)
'm learni'
str1.substr(2,10)
'm learning'
str1.substring(2,10)
'm learni'
str2.substring(0,1)
'f'
str2.substring(0,2)
'fa'
str2.substring(0,3)
'far'
str2.slicee(0,3)

str2.slice(0,3)
'far'
str2.slice(0,2)
'fa'
str2.slice(1,2)
'a'
str2.slice(2,4)
'ro'
str2.substring(2,4)
'ro'
str2.substr(2,4)
'rooq'
str2.substr(1,2)
'ar'
str2.substr(0,3)
'far'
let new1="iam learning js and js and js"
undefined
new1.replace("js","javascript")
'iam learning javascript and js and js'

new1.replaceAll("js","javascript")
'iam learning javascript and javascript and javascript'
new1.split()
['iam learning js and js and js']
new1.split(" ")
(7) ['iam', 'learning', 'js', 'and', 'js', 'and', 'js']
new1.split(" ,")
['iam learning js and js and js']
new1.split("")
(29) ['i', 'a', 'm', ' ', 'l', 'e', 'a', 'r', 'n', 'i', 'n', 'g', ' ', 'j', 's', ' ', 'a', 'n', 'd', ' ', 'j', 's', ' ', 'a', 'n', 'd', ' ', 'j', 's']0: "i"1: "a"2: "m"3: " "4: "l"5: "e"6: "a"7: "r"8: "n"9: "i"10: "n"11: "g"12: " "13: "j"14: "s"15: " "16: "a"17: "n"18: "d"19: " "20: "j"21: "s"22: " "23: "a"24: "n"25: "d"26: " "27: "j"28: "s"length: 29[[Prototype]]: Array(0)
new1.[2]
new1
'iam learning js and js and js'
new1.join()

new1.indexOf("js")
13
new1.lastIndexOf("js")
27
new1.search("js")
13
new1.search(/js/)
13
let text="The rain in SPAIN stays mainly in the plain";

text.match("ain")

text.includes("The")
true
text.includes("Ther")
false
text.startsWith("The")
true
text.startsWith("That")
false
text.endsWith("plain")
true
text.endsWith("plains")
false
new1
'iam learning js and js and js'
new1.replace(/js/,"java")
'iam learning java and js and js'