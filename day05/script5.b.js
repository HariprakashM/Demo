let cap=0;
let arr1=[];
//anonymous function
let word = function(a) 
//arrow function
//let word = (a) =>
{
let arr=a.split(" ");
for(i=0;i<arr.length;i++)
{

cap=arr[i][0].toUpperCase()+arr[i].slice(1).toLowerCase();
arr1.push(cap);
}
return arr1.join(" ");
}
console.log(word("my nAme iS harI prAkash"));