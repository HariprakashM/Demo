var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload = function()
{
    var data = JSON.parse(request.response);
    console.log(data);
    for(var i in data)
    {
    console.log(`name : ${data[i].name} lat : ${data[i].latlng[0]} long : ${data[i].latlng[1]}`);
    }
}
