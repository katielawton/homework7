// by zip code
// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
// by city
// api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}
// my api key is 54b2b0b515d01914aea74a40973c8304
function gettingJSON(){
    //Display the forecast
    // Your code here.

    let location;
    //Set default location if one isn't provided
    location = document.querySelector("input[id=location]").value
    if (location == "") {
        location = "Ann Arbor";
    }

    console.log("Location is : " + location);


    //set default temperature format if one isn't provided
    let format;
    let format_query
    // Your code here.
    format_query = document.querySelector("input[name=temp]:checked")
    if (format_query == null) {
        format = "Imperial";
    }
    else {
        format = format_query.value
    }
    console.log("Format is " + format);

    //set the query  
    let query;

    // Your code here. 
    if (/\d/.test(location)) {
        query = "https://api.openweathermap.org/data/2.5/weather?zip=" + location + "&units=" + format +"&appid=54b2b0b515d01914aea74a40973c8304"
    }
    else {
        query = "https://api.openweathermap.org/data/2.5/weather?q=" + location +"&units=" + format + "&appid=54b2b0b515d01914aea74a40973c8304"
    }
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.
    let iconcode
    let tempDescripton
    document.getElementById("forecast").style.display = "block"


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(json)
        loc = json["name"]
        document.getElementById("loc").innerHTML = loc

        temp = json["main"]["temp"] + " with " + json["weather"][0]["description"]
        document.getElementById("temp").innerHTML = temp

        iconcode = json.weather[0].icon
        tempImg = "http://openweathermap.org/img/w/" + iconcode + ".png"
        $("#tempImg").attr("src", tempImg);

        tempDescripton = json["weather"][0]["description"]
        console.log(tempDescripton)
        $("#tempImg").attr("alt", tempDescripton)

    });
    
    
}
