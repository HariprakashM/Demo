var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload = function()
{
    var data = JSON.parse(request.response);
    console.log(data);
    let i=data;
    var res=i.filter((ele)=>ele.region=="Asia");
    console.log(res);
    var totalpopulation=0;
    var pop=res.map((ele)=>{
     
          totalpopulation=ele.population+totalpopulation;
        return totalpopulation;
    });
    console.log(totalpopulation);
    for(var w in res)
    {
        console.log(`totalpopulation = ${res[w].population}`);
    }

} 