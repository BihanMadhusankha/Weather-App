
document.getElementById("searchTxt").addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {

        try {
            const searchVal = document.getElementById("searchTxt").value;

            let reop = {
                method: 'POST'
            };
            fetch(`https://api.weatherapi.com/v1/forecast.json?key=f1850d9ec02649c4b0a84749240403&q=${searchVal}&days=7`, reop)
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
                    document.getElementById("chanceofrain").innerHTML = `${data.forecast.forecastday[0].day.daily_chance_of_rain} %`;
                    document.getElementById("humidity").innerHTML = data["current"]["humidity"] + "%";
                    document.getElementById("wind").innerHTML = `Wind: ${data["current"]["wind_kph"]} km/h`;
                    //Today'highlight end

                    //Today sunset start
                    
                    for (var i = 7; i < 22; i += 7) {
                        document.getElementById(`wetherImg${i}`).innerHTML = `${data.forecast.forecastday[0].hour[i].condition.icon}`
                        document.getElementById(`tempT${i}`).innerHTML = `${data.forecast.forecastday[0].hour[i].temp_c} °C`;

                    }

                    document.getElementById("sunrise").innerHTML = `${data.forecast.forecastday[0].astro.sunrise}`
                    document.getElementById("sunset").innerHTML = `${data.forecast.forecastday[0].astro.sunset}`
                    document.getElementById("dayLength").innerHTML = `${data.location.localtime}`
                    //Today sunset end

                    //future days start
                    const startDate = new Date(`${data.forecast.forecastday[0].date}`);
                    let currentDay = new Date(startDate);

                    for (let i = 0; i < 7; i++) {
                        //hethuw blann toISOString, split
                        const formattedDate = currentDay.toISOString().split('T')[0];

                        fetch(`https://api.weatherapi.com/v1/forecast.json?key=f1850d9ec02649c4b0a84749240403&q=${searchVal}&days=7&dt=${formattedDate}&aqi=homagama&alerts=yes`)
                            .then(response => response.json())
                            .then(data => {
                                document.getElementById(`day${i + 1}`).innerHTML = `${data.forecast.forecastday[0].date}`
                                document.getElementById(`day${i + 1}Temp`).innerHTML = `${data.forecast.forecastday[0].day.avgtemp_c} °C`;
                                document.getElementById(`day${i + 1}Img`).src = `${data.forecast.forecastday[0].day.condition.icon}`;
                            })
                            .catch(error => {
                                console.error("Error:", error);
                            });

                        currentDay.setDate(currentDay.getDate() + 1);
                    }
                    //End feuture days

                    //Start past days
                    const startDay = new Date(`${data.forecast.forecastday[0].date}`);
                    let currentDays = new Date(startDay);

                    for (let i = 3; i > 0; i--) {

                        const formattedDate = currentDays.toISOString().split('T')[0];

                        fetch(`http://api.weatherapi.com/v1/history.json?key=f1850d9ec02649c4b0a84749240403&q=${searchVal}&dt=${formattedDate}&aqi=homagama&alerts=yes`)
                            .then(response => response.json())
                            .then(data => {
                                document.getElementById(`Day${i}`).innerHTML = `${data.forecast.forecastday[0].date}`;
                                document.getElementById(`Day${i}Temp`).innerHTML = `${data.forecast.forecastday[0].day.avgtemp_c} °C`;
                                document.getElementById(`day${i}AImg`).src = `${data.forecast.forecastday[0].day.condition.icon}`;
                            })
                            .catch(error => {
                                console.error("Error:", error);
                            });

                        currentDays.setDate(currentDays.getDate() - 1);
                    }

                    //End past days
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
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=f1850d9ec02649c4b0a84749240403&q=${searchVal}&days=7`, reop)
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
                document.getElementById("chanceofrain").innerHTML = `${data.forecast.forecastday[0].day.daily_chance_of_rain} %`;
                document.getElementById("humidity").innerHTML = data["current"]["humidity"] + "%";
                document.getElementById("wind").innerHTML = `Wind: ${data["current"]["wind_kph"]} km/h`;
                //Today'highlight end

                //Today sunset start
                for (var i = 7; i < 22; i += 7) {
                    document.getElementById(`wetherImg${i}`).src = `${data.forecast.forecastday[0].hour[i].condition.icon}`
                    document.getElementById(`tempT${i}`).innerHTML = `${data.forecast.forecastday[0].hour[i].temp_c} °C`;
    
                }
    
                document.getElementById("sunrise").innerHTML = `${data.forecast.forecastday[0].astro.sunrise}`
                document.getElementById("sunset").innerHTML = `${data.forecast.forecastday[0].astro.sunset}`
                document.getElementById("dayLength").innerHTML = `${data.location.localtime}`
                //Today sunset end


                const startDate = new Date(`${data.forecast.forecastday[0].date}`);
                let currentDay = new Date(startDate);

                for (let i = 0; i < 7; i++) {
                    //hethuw blann toISOString, split
                    const formattedDate = currentDay.toISOString().split('T')[0];

                    fetch(`https://api.weatherapi.com/v1/forecast.json?key=f1850d9ec02649c4b0a84749240403&q=${searchVal}&days=7&dt=${formattedDate}&aqi=homagama&alerts=yes`)
                        .then(response => response.json())
                        .then(data => {
                            document.getElementById(`day${i + 1}`).innerHTML = `${data.forecast.forecastday[0].date}`
                            document.getElementById(`day${i + 1}Temp`).innerHTML = `${data.forecast.forecastday[0].day.avgtemp_c} °C`;
                            document.getElementById(`day${i + 1}Img`).src = `${data.forecast.forecastday[0].day.condition.icon}`;
                        })
                        .catch(error => {
                            console.error("Error:", error);
                        });

                    currentDay.setDate(currentDay.getDate() + 1);
                }


                const startDay = new Date(`${data.forecast.forecastday[0].date}`);
                let currentDays = new Date(startDay);

                for (let i = 3; i > 0; i--) {

                    const formattedDate = currentDays.toISOString().split('T')[0];

                    fetch(`http://api.weatherapi.com/v1/history.json?key=f1850d9ec02649c4b0a84749240403&q=${searchVal}&dt=${formattedDate}&aqi=homagama&alerts=yes`)
                        .then(response => response.json())
                        .then(data => {
                            document.getElementById(`Day${i}`).innerHTML = `${data.forecast.forecastday[0].date}`;
                            document.getElementById(`Day${i}Temp`).innerHTML = `${data.forecast.forecastday[0].day.avgtemp_c} °C`;
                            document.getElementById(`day${i}AImg`).src = `${data.forecast.forecastday[0].day.condition.icon}`;
                        })
                        .catch(error => {
                            console.error("Error:", error);
                        });

                    currentDays.setDate(currentDays.getDate() - 1);
                }

            })
    } catch (error) {
        console.error('Error during fetch:', error);
    }
});

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
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=f1850d9ec02649c4b0a84749240403&q=${city}&days=7&aqi=yes&alerts=yes`, reop)
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
            document.getElementById("chanceofrain").innerHTML = `${data.forecast.forecastday[0].day.daily_chance_of_rain} %`;
            document.getElementById("humidity").innerHTML = data["current"]["humidity"] + "%";
            document.getElementById("wind").innerHTML = `Wind: ${data["current"]["wind_kph"]} km/h`;
            //Today'highlight end

            //Today sunset start
           
            for (var i = 7; i < 22; i += 7) {
                document.getElementById(`wetherImg${i}`).src = `${data.forecast.forecastday[0].hour[i].condition.icon}`
                document.getElementById(`tempT${i}`).innerHTML = `${data.forecast.forecastday[0].hour[i].temp_c} °C`;

            }

            document.getElementById("sunrise").innerHTML = `${data.forecast.forecastday[0].astro.sunrise}`
            document.getElementById("sunset").innerHTML = `${data.forecast.forecastday[0].astro.sunset}`
            document.getElementById("dayLength").innerHTML = `${data.location.localtime}`

            //Today sunset end

            const startDate = new Date(`${data.forecast.forecastday[0].date}`);
            let currentDay = new Date(startDate);

            for (let i = 0; i < 7; i++) {
                //hethuw blann toISOString, split
                const formattedDate = currentDay.toISOString().split('T')[0];

                fetch(`https://api.weatherapi.com/v1/forecast.json?key=f1850d9ec02649c4b0a84749240403&q=${city}&days=7&dt=${formattedDate}&aqi=homagama&alerts=yes`)
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById(`day${i + 1}`).innerHTML = `${data.forecast.forecastday[0].date}`
                        document.getElementById(`day${i + 1}Temp`).innerHTML = `${data.forecast.forecastday[0].day.avgtemp_c} °C`;
                        document.getElementById(`day${i + 1}Img`).src = `${data.forecast.forecastday[0].day.condition.icon}`;
                    })
                    .catch(error => {
                        console.error("Error:", error);
                    });

                currentDay.setDate(currentDay.getDate() + 1);
            }


            const startDay = new Date(`${data.forecast.forecastday[0].date}`);
            let currentDays = new Date(startDay);

            for (let i = 3; i > 0; i--) {

                const formattedDate = currentDays.toISOString().split('T')[0];

                fetch(`http://api.weatherapi.com/v1/history.json?key=f1850d9ec02649c4b0a84749240403&q=${city}&dt=${formattedDate}&aqi=homagama&alerts=yes`)
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById(`Day${i}`).innerHTML = `${data.forecast.forecastday[0].date}`;
                        document.getElementById(`Day${i}Temp`).innerHTML = `${data.forecast.forecastday[0].day.avgtemp_c} °C`;
                        document.getElementById(`day${i}AImg`).src = `${data.forecast.forecastday[0].day.condition.icon}`;
                    })
                    .catch(error => {
                        console.error("Error:", error);
                    });

                currentDays.setDate(currentDays.getDate() - 1);
            }

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
    fetch(`http://api.weatherapi.com/v1/current.json?key=f1850d9ec02649c4b0a84749240403&q=${city2}&days=7`, reop)
        .then(response => response.json())
        .then(data => {

            console.log(data);
            document.getElementById("upTempOne").innerHTML = data["current"]["temp_c"] + "°C";
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
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=f1850d9ec02649c4b0a84749240403&q=${Kandy}&days=7`, reop)
        .then(response => response.json())
        .then(data => {

            console.log(data);
            document.getElementById("upTempTwo").innerHTML = data["current"]["temp_c"] + "°C";
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

const iconMoon = document.getElementById('iconMoon');
const body = document.body;

iconMoon.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Change icon based on dark mode state
    if (body.classList.contains('dark-mode')) {
        iconMoon.src = './images/icons8-light-off-48.png'; // Change to moon icon in dark mode
    } else {
        iconMoon.src = './images/icons8-light-on-48.png'; // Change to sun icon in light mode
    }});