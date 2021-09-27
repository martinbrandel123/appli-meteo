const APIKEY = '9d14fab5293af26cf8dc10b7ff26e891';

var apicall = function (city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`

    fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        document.getElementById('city').innerHTML = data.main.temp + ' °'
        document.getElementById('temp').innerHTML = city
        document.getElementById('humidity').innerHTML = data.main.humidity + ' %'
        document.getElementById('wind').innerHTML = data.wind.speed + ' km/h'
    }).catch(function (err) {
        console.log('BUG')
    })
}


document.getElementById('main-form')
.addEventListener('submit',function(e) {
    e.preventDefault()
    let ville = document.getElementById('city-input').value
    apicall(ville)
})







/*var input = document.querySelector('input')
input.addEventListener('change', function(e) {
    let ville = e.target.value
    apicall(ville)
})*/
apicall('boston')

