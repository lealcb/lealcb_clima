const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.clima-box');
const weatherDetails = document.querySelector('.detalhe-clima');
const weatherMinMax = document.querySelector('.detalhestemp');
const error404 = document.querySelector('.nao-encontrado');

function fetchWeatherData() {
        const city = document.querySelector('.search-box input').value;
        const APIKey = atob('ZjBhZjdjZmQ3MjA3MzdmNzczMDcwODM1OTdhNWM3YjQ=')
        if (city === '') {
            return;
        }


      
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
            .then(Response => Response.json())
            .then(json => {

                if (json.cod === '404') {
                    container.style.height = '400px';
                    weatherBox.style.display = 'none';
                    weatherDetails.style.display = 'none';
                    weatherMinMax.style.display = 'none'
                    error404.style.display = 'block';
                    error404.classList.add('fadeIn');
                    return;
                }

                error404.style.display = 'none';
                error404.classList.remove('fadeIn');

                const image = document.querySelector('.clima-box img');
                const temperature = document.querySelector('.clima-box .temperatura');
                const description = document.querySelector('.clima-box .descricao');
                const mintemp = document.querySelector('.detalhestemp .min span');
                const maxtemp = document.querySelector('.detalhestemp .max span');
                const humidity = document.querySelector('.detalhe-clima .humidade span');
                const wind = document.querySelector('.detalhe-clima .vento span');
                

                switch (json.weather[0].main) {
                    case 'Clear':
                        image.src = 'images/Limpo.png';
                        break;

                    case 'Rain':
                        image.src = 'images/Chuva.png';
                        break;

                    case 'Snow':
                        image.src = 'images/Neve.png';
                        break;

                    case 'Clouds':
                        image.src = 'images/Nublado.png';
                        break;

                    case 'Haze':
                        image.src = 'images/Neblina.png';
                        break;

                    case 'Thunderstorm':
                        image.src = 'images/chuva_raio.png';
                        break;

                    default:
                        image.src = '';
                }

                switch (json.weather[0].description) {
                    case 'scattered clouds':
                        var descricao = 'Nuvens Dispersas';
                        break;

                    case 'thunderstorm with light rain':
                        var descricao= 'Tempestade com Raios';
                        break;

                    case 'very heavy rain':
                        var descricao = 'Chuva pesada';
                        break;

                    case 'clear sky':
                        var descricao = 'Céu Limpo';
                        break;

                    case 'overcast clouds':
                        var descricao = 'Nublado';
                        break;

                    case 'few clouds':
                    var  descricao = 'Algumas Nuvens';
                        break;

                    default:
                        var descricao = `${json.weather[0].description}`;
                }

                mintemp.innerHTML = `${json.main.temp_min}°C`;
                maxtemp.innerHTML = `${json.main.temp_max}°C`;
                temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
                description.innerHTML = `${descricao}`;
                humidity.innerHTML = `${json.main.humidity}%`;
                wind.innerHTML = `${parseInt(json.wind.speed)} Km/h`;

                weatherBox.style.display = '';
                weatherMinMax.style.display = '';
                weatherDetails.style.display = '';
                weatherBox.classList.add('fadeIn');
                weatherMinMax.classList.add('fadeIn');
                weatherDetails.classList.add('fadeIn');
                container.style.height = '590px';


            });


       
    }



search.addEventListener('click', fetchWeatherData);

document.querySelector('.search-box input').addEventListener('keydown', function(e) {
    if (e.key == 'Enter' || e.keyCode == 13) {
        fetchWeatherData();
    }
});

