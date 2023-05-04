
Splice:It adds or removes elements in an Array

city2=["srvl","ndl","knl","hyd","delhi"]
(5) ['srvl', 'ndl', 'knl', 'hyd', 'delhi']

city2
(5) ['srvl', 'ndl', 'knl', 'hyd', 'delhi']


city2.splice(0,2)
(2) ['srvl', 'ndl']

city2
(3) ['knl', 'hyd', 'delhi']

city2.splice(0,0,"srvl","ndl")
[]
city2
(5) ['srvl', 'ndl', 'knl', 'hyd', 'delhi']
city2.splice(0,2)
(2) ['srvl', 'ndl']
city2
(3) ['knl', 'hyd', 'delhi']

city2.splice(0,0,"srvl","ndl")
[]
city2
(5) ['srvl', 'ndl', 'knl', 'hyd', 'delhi']
let a=[1,3,2,4,5];
let b=[true,false,true]
let c=["G","DS","fed"]
console.log(a.concat(b,c));

[1, 3, 2, 4, 5, true, false, true, 'G', 'DS', 'fed']
console.log(a.toString);


city2.splice(2,0,"klta","fzbd")
[]
city2
(7) ['srvl', 'ndl', 'klta', 'fzbd', 'knl', 'hyd', 'delhi']

city2.splice(5,1)
['hyd']
city2
(6) ['srvl', 'ndl', 'klta', 'fzbd', 'knl', 'delhi']

city2.indexOf("delhi")
5
city2.indexOf("ndl")
1
city2.splice(0,0,"gdl","svl")
[]
city2
(8) ['gdl', 'svl', 'srvl', 'ndl', 'klta', 'fzbd', 'knl', 'delhi']

city2
(8)['gdl', 'svl', 'srvl', 'ndl', 'klta', 'fzbd', 'knl', 'delhi']

city2.splice(2,1)
['srvl']

city2
(7) ['gdl', 'svl', 'ndl', 'klta', 'fzbd', 'knl', 'delhi']

city2.indexOf("efsu")
-1
city2.indexOf("knl")
5
for(city of city2)
    {
        console.log(city)
    }
    
 gdl
 svl
 ndl
 klta
 fzbd
 knl
 delhi
 let num1=[1,2,3,4,4,55,6,7,7,8,532,5,6,35,745,47,8,67,67,6]
 for(num of num1){
    console.log(num)
 }
 let num1=[1,2,3,4,4,55,6,7,7,8,532,5,6,35,745,47,8,67,67,6]
 for(num of num1){
    console.log(num)
 }
 1
 4
 55
 6
 7
 8
 532
 5
 35
 745
 47
 8
 67
 6
 let chr=[1,"DD",true,false,22]
 for (ch of chr){
    console.log(ch);
 }
 1
 DD
 true
 false
 22

 let d=a.toString();

 console.log(d)
 1 1,3,2,4,5

 console.log(a.toString());
 1 1,3,2,4,5

 let book=["mat","ghee","Ds","grs"];
 let s=book.join('');
 console.log(s);

 matgheeDsgrs

 let text="this is my proggram";
 let text2=text.split('');
 console.log(text2);
 
 ['t', 'h', 'i', 's', ' ', 'i', 's', ' ', 'm', 'y', ' ', 'p', 'r', 'o', 'g', 'g', 'r', 'a', 'm']
