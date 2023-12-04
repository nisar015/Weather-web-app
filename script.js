
        const apiKey = "608ba674b05d0bb2e9a7031f5bd62e75";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");

        async function checkWeather(city) {
            try {
                const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
                const data = await response.json();
                console.log(data);

                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = `${data.main.temp}°C`;
                document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
                document.querySelector(".wind").innerHTML = `${data.wind.speed} km/hr`;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);
        });
