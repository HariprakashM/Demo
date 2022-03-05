//first program
let aa = (f,s,t) => 
{
 if(f>s && f>t)
 {
 return f;
 }
 else if(s>f && s>t)
 {
 return s;
 }
 else
 {
 return t;
 }
}
console.log(aa(1,2,3));

//second program
function add(n)
{
let sum = 0;
for(var i=0;i<n.length;i++){
 sum+=n[i]
 }
 return sum;
}
console.log(add([1,2,3]));

//third program
(function(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++){
    sum += arr[i];
    }
    console.log(sum);
    
   })([9,8,5,6,4,3,2,1]);

//fourth program
const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<=num;i++){
 if(num%i!==0)
 {
 return true;
 }
 return num===2;
 }
});
console.log(myPrime);

//fifth program
const num = [10, 20, 30, 40,50,60,70,80,90,100];
const sum = num.reduce((a, b) =>a + b);
console.log(sum);

//sixth program
(function(arr) {
    for (var i = 0; i <= arr.length; i++) {
    console.log(arr[0][i].toUpperCase() + arr[i].substr(1));
    }
   })(["guvi", "geek", "zen", "fullstack"]);

//seventh program
   (function(arr) {
    for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
    console.log(arr[i]);
    }}
   })([1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4]);

//eighth program
(function(str){
    str1 = str.split("").reverse().join("");
    console.log(str1); 
   })("abcd");

//ninenth program
var res = function(arr){
    newArr = [];
    for(var i=0; i < arr.length; i++){
    if(newArr.indexOf(arr[i]) == -1) {
    newArr.push(arr[i]);
    } }
    return newArr;
   }
   console.log(res(["guvi","geek","guvi","duplicate","geeK"]));

//tenth program
var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce(function(a,c){
 if(c%2>0)
 {
 return a+c;
 }
 return a});
console.log(s);

//eleventh program
var aa = data=>{
    var a=data;
   for(i=0;i<a.length-1;i++){
    var l="";
    var s=a[i+1]
    var b=a[i]
    l+=s
    l+=b
    i=i+1
   }
   if((a.length%2)!=0){
    l+=a[a.length-1]
   }
   return l;
   }
   console.log(aa("1234"));

