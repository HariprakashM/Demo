let n=[];
//anonymous function
let paliandrome =function(a)
//arrow function
//let palindrome=(a)=>
{
for(i=0;i<a.length;i++)
{
let arr=[...a[i]];
let rev = arr.reverse().join("");
if(rev==a[i])
n.push(rev);
}
return n;
}

console.log(paliandrome(["5225","5655","1234","1661","3698","6565","4224"]));