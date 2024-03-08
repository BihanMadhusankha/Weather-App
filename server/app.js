
document.getElementById("searchTxt").addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {

        try {
            const searchVal = document.getElementById("searchTxt").value;
    
            let reop = {
                method: 'POST'
            };
            fetch(`https://api.weatherapi.com/v1/forecast.json?key=f1850d9ec02649c4b0a84749240403&q=${searchVal}`, reop)
                .then(response => response.json())
                .then(data => {
                    
                    //location start
                    document.getElementById("temp").innerHTML = data["current"]["temp_c"] + " °C";
                    document.getElementById("location").innerHTML = data["location"]["name"];
                    document.getElementById("feelslike").innerHTML = `Feels like ${data.current.feelslike_c} °C`;
                    document.getElementById("wetherimg").src = data["current"]["condition"]["icon"];
                    //location end
        
        
                    //Today'highlight start
                    document.getElementById("uv").innerHTML = data["current"]["uv"];
                    document.getElementById("chanceofrain").innerHTML = data["current"]["condition"]["text"];
                    document.getElementById("humidity").innerHTML = data["current"]["humidity"] + "%";
                    document.getElementById("wind").innerHTML = `Wind: ${data["current"]["wind_kph"]} km/h`;
                    //Today'highlight end
        
                    //Today sunset start
                    document.getElementById("tConditionText").innerHTML = `${data.forecast.forecastday[0].day.condition.text}`
                    document.getElementById("wetherTypeImg").src = `${data.forecast.forecastday[0].day.condition.icon}`
                    document.getElementById("wetherTypeTemp").innerHTML = `${data.forecast.forecastday[0].day.avgtemp_c}`
        
                    document.getElementById("wetherImgOne").src = `${data.forecast.forecastday[0].hour[7].condition.icon}`
                    document.getElementById("tempTOne").innerHTML = `${data.forecast.forecastday[0].hour[7].temp_c}`
        
                    document.getElementById("wetherImgTwo").src = `${data.forecast.forecastday[0].hour[14].condition.icon}`
                    document.getElementById("tempTTwo").innerHTML = `${data.forecast.forecastday[0].hour[14].temp_c}`
        
                    document.getElementById("wetherImgThree").src = `${data.forecast.forecastday[0].hour[19].condition.icon}`
                    document.getElementById("tempThree").innerHTML = `${data.forecast.forecastday[0].hour[19].temp_c}`
        
                    document.getElementById("sunrise").innerHTML = `${data.forecast.forecastday[0].astro.sunrise}`
                    document.getElementById("sunset").innerHTML = `${data.forecast.forecastday[0].astro.sunset}`
                })
        } catch (error) {
            console.error('Error during fetch:', error);
        }
    }
});


document.getElementById("searchBtn").addEventListener("click", async () => {
    try {
        const searchVal = document.getElementById("searchTxt").value;

        let reop = {
            method: 'POST'
        };
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=f1850d9ec02649c4b0a84749240403&q=${searchVal}`, reop)
            .then(response => response.json())
            .then(data => {
                
                //location start
                document.getElementById("temp").innerHTML = data["current"]["temp_c"] + " °C";
                document.getElementById("location").innerHTML = data["location"]["name"];
                document.getElementById("feelslike").innerHTML = `Feels like ${data.current.feelslike_c} °C`;
                document.getElementById("wetherimg").src = data["current"]["condition"]["icon"];
                //location end
    
    
                //Today'highlight start
                document.getElementById("uv").innerHTML = data["current"]["uv"];
                document.getElementById("chanceofrain").innerHTML = data["current"]["condition"]["text"];
                document.getElementById("humidity").innerHTML = data["current"]["humidity"] + "%";
                document.getElementById("wind").innerHTML = `Wind: ${data["current"]["wind_kph"]} km/h`;
                //Today'highlight end
    
                //Today sunset start
                document.getElementById("tConditionText").innerHTML = `${data.forecast.forecastday[0].day.condition.text}`
                document.getElementById("wetherTypeImg").src = `${data.forecast.forecastday[0].day.condition.icon}`
                document.getElementById("wetherTypeTemp").innerHTML = `${data.forecast.forecastday[0].day.avgtemp_c}`
    
                document.getElementById("wetherImgOne").src = `${data.forecast.forecastday[0].hour[7].condition.icon}`
                document.getElementById("tempTOne").innerHTML = `${data.forecast.forecastday[0].hour[7].temp_c}`
    
                document.getElementById("wetherImgTwo").src = `${data.forecast.forecastday[0].hour[14].condition.icon}`
                document.getElementById("tempTTwo").innerHTML = `${data.forecast.forecastday[0].hour[14].temp_c}`
    
                document.getElementById("wetherImgThree").src = `${data.forecast.forecastday[0].hour[19].condition.icon}`
                document.getElementById("tempThree").innerHTML = `${data.forecast.forecastday[0].hour[19].temp_c}`
    
                document.getElementById("sunrise").innerHTML = `${data.forecast.forecastday[0].astro.sunrise}`
                document.getElementById("sunset").innerHTML = `${data.forecast.forecastday[0].astro.sunset}`
            })
    } catch (error) {
        console.error('Error during fetch:', error);
    }
});



function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}


//digital clock start 
const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if (h > 12) {
        h = h - 12
        ampm = "PM"
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerHTML = h;
    minutesEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(() => {
        updateClock()
    }, 1000)
}

updateClock();
//digital clock end

//Current Location start



function currentLocation() {
    const city = "Homagama";
    let reop = {
        method: 'POST'
    };
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=f1850d9ec02649c4b0a84749240403&q=${city}`, reop)
        .then(response => response.json())
        .then(data => {
            
            //location start
            document.getElementById("temp").innerHTML = data["current"]["temp_c"] + " °C";
            document.getElementById("location").innerHTML = data["location"]["name"];
            document.getElementById("feelslike").innerHTML = `Feels like ${data.current.feelslike_c} °C`;
            document.getElementById("wetherimg").src = data["current"]["condition"]["icon"];
            //location end


            //Today'highlight start
            document.getElementById("uv").innerHTML = data["current"]["uv"];
            document.getElementById("chanceofrain").innerHTML = data["current"]["condition"]["text"];
            document.getElementById("humidity").innerHTML = data["current"]["humidity"] + "%";
            document.getElementById("wind").innerHTML = `Wind: ${data["current"]["wind_kph"]} km/h`;
            //Today'highlight end

            //Today sunset start
            document.getElementById("tConditionText").innerHTML = `${data.forecast.forecastday[0].day.condition.text}`
            document.getElementById("wetherTypeImg").src = `${data.forecast.forecastday[0].day.condition.icon}`
            document.getElementById("wetherTypeTemp").innerHTML = `${data.forecast.forecastday[0].day.avgtemp_c}`

            document.getElementById("wetherImgOne").src = `${data.forecast.forecastday[0].hour[7].condition.icon}`
            document.getElementById("tempTOne").innerHTML = `${data.forecast.forecastday[0].hour[7].temp_c}`

            document.getElementById("wetherImgTwo").src = `${data.forecast.forecastday[0].hour[14].condition.icon}`
            document.getElementById("tempTTwo").innerHTML = `${data.forecast.forecastday[0].hour[14].temp_c}`

            document.getElementById("wetherImgThree").src = `${data.forecast.forecastday[0].hour[19].condition.icon}`
            document.getElementById("tempThree").innerHTML = `${data.forecast.forecastday[0].hour[19].temp_c}`

            document.getElementById("sunrise").innerHTML = `${data.forecast.forecastday[0].astro.sunrise}`
            document.getElementById("sunset").innerHTML = `${data.forecast.forecastday[0].astro.sunset}`
        })
        .catch(error => {
            console.error("Error:", error);
            
        });
}

currentLocation();

//Current Location end


//Up coming city start

function upComingColombo() {
    const city2 = "Galle"
    let reop = {
        method: 'POST'
    };
    fetch(`http://api.weatherapi.com/v1/current.json?key=f1850d9ec02649c4b0a84749240403&q=${city2}`, reop)
        .then(response => response.json())
        .then(data => {

            console.log(data);
            document.getElementById("upTempOne").innerHTML = data["current"]["temp_c"] + "C";
            document.getElementById("upForcastOne").innerHTML = data["current"]["condition"]["text"];
            document.getElementById("upCityOne").innerHTML = data["location"]["name"];
            document.getElementById("upImgOne").src = data["current"]["condition"]["icon"];
        })
        .catch(error => {
            console.error("Error:", error);
            // Handle the error here if needed
        });
}

function upComingKandy() {
    const Kandy = "kandy"
    let reop = {
        method: 'POST'
    };
    fetch(`http://api.weatherapi.com/v1/current.json?key=f1850d9ec02649c4b0a84749240403&q=${Kandy}`, reop)
        .then(response => response.json())
        .then(data => {

            console.log(data);
            document.getElementById("upTempTwo").innerHTML = data["current"]["temp_c"] + "C";
            document.getElementById("upForcastTwo").innerHTML = data["current"]["condition"]["text"];
            document.getElementById("upCityTwo").innerHTML = data["location"]["name"];
            document.getElementById("upImgTwo").src = data["current"]["condition"]["icon"];
        })
        .catch(error => {
            console.error("Error:", error);
            // Handle the error here if needed
        });
}

upComingKandy();
upComingColombo();

//up coming city end