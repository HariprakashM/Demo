//anonymous function
let arr=function(b,a)
//arrow function
//let arr=(b,a)=>
{
let arr1=[];
let temp=[];
for(i=0;i<a;i++)
{
temp.push(b[i]);
}
arr1=b.slice(a);
let rotated_array=arr1.concat(temp);
return rotated_array;
}
console.log(arr([1,2,3,4,5,6],4));
