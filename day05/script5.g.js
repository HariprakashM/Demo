//anonymous function
let arr=function(a)
//arrow function
//let arr=(a)=>
{
let unique=[];
for(let i of a)
{
if(unique.indexOf(i)===-1)
{
unique.push(i);
}
}
return unique;
}
console.log(arr([1,2,3,4,5,6,7,8,9,4,5,6,3,2,1,4]));
