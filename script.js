const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.clima-box');
const weatherDetails = document.querySelector('.detalhe-clima');
const weatherMinMax = document.querySelector('.detalhestemp');
const error404 = document.querySelector('.nao-encontrado');

search.addEventListener('click', () => {

    const APIKey = atob('ZjBhZjdjZmQ3MjA3MzdmNzczMDcwODM1OTdhNWM3YjQ=');
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

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

                case 'rain':
                     var descricao = '';
                    break;

                case 'Haze':
                    var descricao = '';
                    break;

                case 'Thunderstorm':
                   var  descricao = '';
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


});





























// const container = document.querySelector('.container');
// const busca = document.querySelector('.search-box button');
// const climaBox = document.querySelector('.clima-box');
// const climaDetalhe = document.querySelector('.detalhe-clima');
// const naoEncontrado = document.querySelector('.nao-encontrado');

// search.addEventListener('click', () =>{

//     const APIkey = 'f0af7cfd720737f77307083597a5c7b4';
//     const cidade = document.querySelector('.serch-box input').value;

//     if (cidade === '')
//         return;

//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${APIkey}`)
//     .then(response => response.json())
//     .then(json => {

//         if(json.cod ==='404'){
//             container.style.height = '400px';
//             climaBox.style.display = 'none';
//             climaDetalhe.style.display='none';
//             naoEncontrado.style.display = 'block';
//             naoEncontrado.classList.add('fadeIn');
//             return;
//         }
        
//         naoEncontrado.style.display = 'none';
//         naoEncontrado.classList.remove('fadeIn');

//         const image = document.querySelector('.clima-box img');
//         const temperatura = document.querySelector('.clima-box .temperatura');
//         const descricao = document.querySelecto('.clima-box .descricao');
//         const humidade = document.querySelector('.detalhe-clima .humidade span');
//         const vento = document.querySelector('.detalhe-clima .vento span');

//         switch(json.weather[0].main){
//             case 'Clear':
//                 image.src = 'images/Limpo.png';
//                 break;

//             case 'Rain':
//                 image.src = 'images/Chuva.png';
//                 break;

//             case 'Snow':
//                 image.src = 'images/Neve.png';
//                 break;

//             case 'Clouds':
//                 image.src = 'images/Nublado.png';
//                 break;            
    
//             case 'Haze':
//                 image.src = 'images/Neblina.png';
//                 break;


//             default:
//                 image.src = '';
        
//         }


//         temperatura.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
//         descricao.innerHTML =   `${json.weather[0].description}`;
//         humidade.innerHTML =   `${json.main.humidity}%`;
//         vento.innerHTML =  `${parseInt(json.wind.speed)}Km/h`;


//         climaBox.style.display = '';
//         climaDetalhe.style.display = '';
//         climaBox.classList.add('fadeIn');
//         climaDetalhe.classList.add('fadeIn');
//         container.style.height = '590px';
    
//     });


// });