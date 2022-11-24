const input = document.querySelector('input[type="text"]')
const place_name = document.querySelector('.place-name')
const place_time = document.querySelector('.place-time')
const temperature_value = document.querySelector('.temperature-value')
const main_weather = document.querySelector('.main-weather')
const visibility = document.querySelector('.visibility').querySelector('span')
const wind = document.querySelector('.wind').querySelector('span')
const clouds = document.querySelector('.clouds').querySelector('span')
const body = document.querySelector('body')


async function getWeather(input) {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=26e8576bfe92de8c0c5016b5f5e04a17`
    console.log(apiURL);
    const data = await fetch(apiURL).then(res => res.json())
    console.log(data.name);
    handleChangeWeather(data)
}

function handleChangeWeather(weather) {
    if(weather.cod !== '404') {
        console.log(123);
        console.log(weather);
        place_name.innerText = `${weather.name} , ${weather.sys.country}`
        temperature_value.innerText = `${Math.round(weather.main.temp - 273.15) }`
        main_weather.innerText = `${weather.weather[0].main}`
        visibility.innerText = `${weather.visibility} m`
        wind.innerText = `${weather.wind.speed} m/s`
        clouds.innerText = `${weather.clouds.all} %`
        if(Math.round(weather.main.temp - 273.15) > 20) {
            body.className = 'hot'
        }else {
            body.className = 'cold'

        }
    }
}

// getWeather()



input.onkeyup = (key) => {
    
    if(key.keyCode === 13) {
        getWeather(input.value.trim())
        
    }
}