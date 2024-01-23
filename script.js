let apiKey = "6834ceded75a62ece43d102e7e06a06f";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchBox = document.querySelector(".weatherinput input");
let searchBtn = document.querySelector(".weatherinput button");
let searchImg = document.querySelector(".image");
async function checkWeather(city){
    const response= await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status=="404"){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weatherdes").style.display="none";
    }
    else{let data= await response.json();
        console.log(data) ;
    
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";
        document.querySelector(".h").innerHTML= data.main.humidity +"%";
        document.querySelector(".w").innerHTML= data.wind.speed+ " km/hr";
        
        if(data.weather[0].main== "Clouds"){
            searchImg.src= "images/clouds.png";
        }
        else if(data.weather[0].main== "Drizzle"){
            searchImg.src= "images/drizzle.png";
        }
        else if(data.weather[0].main== "Clear"){
            searchImg.src= "images/clear.png";
        }
        else if(data.weather[0].main== "Rain"){
            searchImg.src= "images/rain.png";
        }
        else if(data.weather[0].main== "Mist"){
            searchImg.src= "images/mist.png";
        }
        document.querySelector(".weatherdes").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    
}
 searchBtn.addEventListener("click",() => {
    checkWeather(searchBox.value);
 });
