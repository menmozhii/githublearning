var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all" );
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    

    
        var result=JSON.parse(request.response);
        var res=result.filter((ele)=>ele.region=="Europe");
        console.log(res);
        
        var coun=result.filter((ele)=>ele.region=="Asia");
        console.log(coun);

        var country =coun.map((ele)=>ele.name);
        console.log(country);
        
        var pop1=result.filter((ele)=>ele.population<100000);
        
        console.log(pop1);
        var pop2=pop1.map((ele)=>ele.name);
        console.log(pop2);

        var arr=result.filter((ele)=>ele.region=="Europe");
        var arr1 =arr.map((ele)=>ele.population);
        var arr2=arr1.reduce((acc,cv)=>acc+cv,0);
        console.log(arr2);
    }