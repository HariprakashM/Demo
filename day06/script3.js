//first program
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);

//second program
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++) {
    if(i<=9)
 new_string += numsArr[i] +",";
 if(i>9)
 new_string+=numsArr[i];
}
console.log(new_string);

//third program
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 11; i > 0; i-- ) {
 new_string += numsArr[i] +" "; 
}
console.log(new_string);

//fourth program
 var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
   numsArr[i]="even";
 }
 
}
console.log(numsArr);

//fifth program
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i-1] = "even";
 }
}
console.log(numsArr);

//sixth program
 var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <=10; i++) {
 
 sum += numsArr[i];
}
console.log(sum);


//seventh program
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <10; i++) {
 if(numsArr[i]%2==0);
 sum += numsArr[i]
}
console.log(sum);

//eight program
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2==0)
 {
 sum += numsArr[i];
 }
 else
 {
 sum -= numsArr[i];
 }
}
console.log(sum);

//ninenth program
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++)
{
 console.log(`Array (${(numsArr[i].length)})  [${numsArr[i]}]`);
}

//tenth program
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
var inner_array=[];
for (var i = 0; i < numsArr.length; i++) {
  inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ )
     str_all +=inner_array[j];
}
console.log(str_all);

//eleventh program
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var inner_array=[];
for (var i = 0; i < numsArr.length; i++) {
  inner_array = numsArr[i];
 
 for(var j = 0 ; j < inner_array.length;j++ )
 {
      if(inner_array[j] %2 !== 0 )
      {
         inner_array[j] = "even";
       }
}
}
console.log(numsArr);

//tweleth program
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
var inner_array=[];
for (var i =  numsArr.length-1;i>=0; i--) {
  inner_array = numsArr[i];
 
 for(var j = inner_array.length-1 ; j >=0 ;j-- )

     str_all +=inner_array[j]+" ";
}
console.log(str_all);

//thirteenth program
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
 var inner_array=[];
for (var i = 0; i < numsArr.length; i++) {
 inner_array= numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(inner_array[j]%2!=0)
 {
 sum_odd += inner_array[j];
 }
 else
 {
 sum_even += inner_array[j];
 }
}
}
console.log(sum_odd);
console.log(sum_even);