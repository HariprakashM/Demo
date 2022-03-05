var temp =[];
//anonymous function
var r=function(a)
//arrow function
//var r = (a) =>
{
for( var i=0;i<a.length;i++)
{
if(a[i]%2===1)
{
temp.push(a[i]);
}
}
return temp;
}
console.log(r([1,2,3,4,5,6]));