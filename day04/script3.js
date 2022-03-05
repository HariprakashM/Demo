var request = new XMLHttpRequest();
request.open("GET","https://www.anapioficeandfire.com/api/books/1");
request.send();
request.onload = function()
{
    var data = JSON.parse(request.response);
    console.log(data);
   
    
    console.log(`author name:${data.authors} ,isbn : ${data.isbn} , numberofpages : ${data.numberOfPages} , publisher : ${data.publisher} `);

}
