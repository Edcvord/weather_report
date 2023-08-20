let loc = 'Moscow';

getWeatherData();

document.getElementById('button').addEventListener('click', () => {
  loc = document.querySelector('.input').value;
  getWeatherData()
})

function getWeatherData() {
  loader.style.display = 'block'

  fetch(`http://api.weatherapi.com/v1/forecast.json?key=62cb304421ff4c07954121946221607&q=${loc}&days=7&lang=ru`)
    .then(response => response.json())
    .then((d) => {
      console.log('d: ', d);

      if (d.error) {
        document.getElementById('city').innerHTML = "Такого города нет";
      } else {
        document.querySelector('#city').innerHTML = d.location.name + ',' + ' ' + d.location.country;

        document.querySelector('#temp0').innerHTML = d.current.temp_c + '°';
        document.querySelector('#icon0').src = 'https:' + d.current.condition.icon;
        document.querySelector('#text0').innerHTML = d.current.condition.text;
        document.querySelector('#date0').innerHTML = d.forecast.forecastday[0].date;

        document.querySelector('#temp1').innerHTML = d.forecast.forecastday[1].day.avgtemp_c + '°';
        document.querySelector('#icon1').src = 'https:' + d.forecast.forecastday[1].day.condition.icon;
        document.querySelector('#text1').innerHTML = d.forecast.forecastday[1].day.condition.text;
        document.querySelector('#date1').innerHTML = d.forecast.forecastday[1].date;

        document.querySelector('#temp2').innerHTML = d.forecast.forecastday[2].day.avgtemp_c + '°';
        document.querySelector('#icon2').src = 'https:' + d.forecast.forecastday[2].day.condition.icon;
        document.querySelector('#text2').innerHTML = d.forecast.forecastday[2].day.condition.text;
        document.querySelector('#date2').innerHTML = d.forecast.forecastday[2].date;
      }

      loader.style.display = 'none'
    })
    .catch((e) => {
      console.log(e)
    })
}

/*
 let loc = 'Moscow';

(function() {
    document.querySelector('input').addEventListener('keydown', function(e) {
      if (e.KeyCode === 13) {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=62cb304421ff4c07954121946221607&q=${loc}&days=7&lang=ru`)
  .then(response => response.json())
  .then((d) => {
      console.log('d: ', d);
      document.getElementById('temp').innerHTML = d.current.temp_c + '°';
      document.getElementById('city').innerHTML = d.location.name + ',' + ' ' + d.location.country;
      document.getElementById('icon').src = d.current.condition.icon;
      document.getElementById('text').innerHTML = d.current.condition.text;

  })}})})
*/