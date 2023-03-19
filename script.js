//XML-HTTP request : they are used to interact with server via API
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all" );
request.send();
request.onload=function(){
    
        var result=JSON.parse(request.response);
        console.log(result);
        
    
           
}

  //  var request=new XMLHttpRequest();
    //request.open("GET", "https://restcountries.com/v2/all");
    //request.send();
    //request.onload=function(){
        
      //      var result=JSON.parse(request.response);
        //   for( var i =0 ;i<result.length;i++){
          //      console.log(result[i].flags)
           //}
           
                            
//}
      // var request = new XMLHttpRequest();
       //request.open("get","https://restcountries.com/v2/all");
       //request.send();
       //request.onload=function(){
        //var result=JSON.parse(request.response);
        //for(var i=0;i<result.length;i++){
          //      console.log(result[i].name,result[i].regions,result[i].subregions,result[i].population);
        //}
       //}
