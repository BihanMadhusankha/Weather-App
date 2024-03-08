
document.getElementById("searchTxt").addEventListener("keypress", async (event) => {
    if (event.key === "Enter" ) {
       
        event.preventDefault();

        try {
            const searchVal = document.getElementById("searchTxt").value;

            const requestOptions = {
                method: 'GET',
            };

            const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f1850d9ec02649c4b0a84749240403&q=${searchVal}`, requestOptions);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            console.log(data);

            // Update the HTML elements with the fetched data
            document.getElementById("temp").innerHTML = `${data.current.temp_c}°C`;
            document.getElementById("location").innerHTML = data.location.country;
            document.getElementById("wetherImg").src = data.current.condition.icon;
            document.getElementById("feelslike").innerHTML = `Feels like ${data.current.feelslike_c}°C`;
            document.getElementById("humidity").innerHTML = data.current.humidity + "%";
            document.getElementById("wind").innerHTML = `Wind: ${data.current.wind_kph} km/h`;
            document.getElementById("sunrise").innerHTML = `${data.forecast.forecastday[0].astro.sunrise}`;
            document.getElementById("sunset").innerHTML = `${data.forecast.forecastday[0].astro.sunset}`;
            document.getElementById("daylength").innerHTML = `${data.location.localtime}`;

            const uvElement = document.getElementById("uv");

            if (uvElement) {
                uvElement.innerHTML = `UV Index: ${data.current.uv}`;
            } else {
                console.error("Element with id 'uv' not found.");
            }
        } catch (error) {
            console.error('Error during fetch:', error);
        }
    }
});

// Also, keep the existing click event listener for the "Search" button as it is
document.getElementById("searchBtn").addEventListener("click", async () => {
    try {
        const searchVal = document.getElementById("searchTxt").value;

        const requestOptions = {
            method: 'GET',
        };

        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f1850d9ec02649c4b0a84749240403&q=${searchVal}`, requestOptions);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);

        // Update the HTML elements with the fetched data
        document.getElementById("temp").innerHTML = `${data.current.temp_c}°C`;
        document.getElementById("location").innerHTML = data.location.country;
        document.getElementById("wetherImg").src = data.current.condition.icon;
        document.getElementById("feelslike").innerHTML = `Feels like ${data.current.feelslike_c}°C`;
        document.getElementById("humidity").innerHTML = data.current.humidity + "%";
        document.getElementById("wind").innerHTML = `Wind: ${data.current.wind_kph} km/h`;
        document.getElementById("sunrise").innerHTML = `${data.forecast.forecastday[0].astro.sunrise}`;
        document.getElementById("sunset").innerHTML = `${data.forecast.forecastday[0].astro.sunset}`;
        document.getElementById("daylength").innerHTML = `${data.location.localtime}`;

        const uvElement = document.getElementById("uv");

        if (uvElement) {
            uvElement.innerHTML = `UV Index: ${data.current.uv}`;
        } else {
            console.error("Element with id 'uv' not found.");
        }
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

// Function to handle successful location retrieval
function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    console.log("Latitude: " + latitude);
    console.log("Longitude: " + longitude);

    reverseGeocode(latitude, longitude);

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    console.log("Current Time: " + hours + ":" + minutes + ":" + seconds);
    document.getElementById("daylength").innerHTML = `${hours}:${minutes}:${seconds}`;

}

// Function to handle location retrieval errors
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}


function reverseGeocode(latitude, longitude) {
    var apiKey = 'cf1a76b073cb456498c2a2964e8dfd0f'; // Replace with your OpenCage API key
    var apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                var locationData = data.results[0].components;

                // Extract the desired component (e.g., city)
                var locationName = locationData.city || locationData.town || locationData.village || locationData.county;

                console.log("Location Name: " + locationName);
                        document.getElementById("location").innerHTML = locationName;

            } else {
                console.error("No results found for reverse geocoding.");
            }
        })
        .catch(error => console.error("Error fetching location name:", error));
}

// Call the getLocation function to start the process
getLocation();

const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h>12){
        h=h -12
        ampm = "PM"
    }
    h=h <10 ? "0" +h:h;
    m=m <10 ? "0" +m:m;
    s=s <10 ? "0" +s:s;

    hourEl.innerHTML = h;
    minutesEl.innerText=m;
    secondEl.innerText=s;
    ampmEl.innerText=ampm;
    setTimeout(()=>{
        updateClock() },1000)
}

updateClock();