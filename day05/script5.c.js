//anonymous function
let arr = function(a)
//arrow function
//let arr =(a)=>
{
var sum=a[0];
for(i=1;i<a.length;i++)
{
sum=a[i]+sum;
}
return sum;
}
console.log(arr([1,2,3,4]));