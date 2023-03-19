//write JSON format for ,for in //
var carname=[
    	  {"name":"tata","model":"tiago","year":"2014",
    	  "fuel":"petrol","weight":"900"},

    	  {"name":"ford","model":"fiesta","year":"2015",
    	  "fuel":"disel","weight":"1000"},

    	  {"name":"honda","model":"amaze","year":"2018",
    	  "fuel":"petrol","weight":"1100"}]
    	  for(var i=0;i<carname.length;i++)
    	  {
    	    console.log(carname[i].name,carname[i].year);
    	    }	    
            //for in //
            for( var i in carname)
            {
                console.log(i,carname[i]);
            }

  //create your own resume in JSON format//
  var resume =[
    {
        "name":"Tom",
        "email":"tom123@gamil.com",
        "degree":"M.sc",
        "skillset":"Js",
        "country":"india",
        "phoneno":"9982446600"
        
    }
  ]     
  console.log(resume);   