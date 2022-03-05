//anonymous function
let median=function(a,b)
//arrow function
//let median=(a,b)=>
{
let c=[...a,...b];
c.sort(function(a,b){return a-b});
console.log(c);
if(c.length%2==1)
{
let d=(c.length/2)+0.5;
return c[d-1];
}
if(c.length%2===0)
{
let e=(c.length/2);
let f=(c.length/2)+1;
let g=c[e-1]+c[f-1];
let h=g/2;
return h;
}
}
console.log(median([1, 12, 15, 26, 38],[2, 13, 17, 30, 45]));