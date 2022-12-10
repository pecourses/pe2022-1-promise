'use strict';

fetch(
  'https://api.open-meteo.com/v1/forecast?latitude=47.84&longitude=35.23&daily=temperature_2m_max,temperature_2m_min,rain_sum&timezone=Europe%2FBerlin&start_date=2022-12-10&end_date=2022-12-10'
)
  .then(response => response.json())
  .then(data => renderWeather(data))
  .catch(err => console.log(err));

// підвантажити дані на сьогодні і вивести їх на сторінку
// пыдсвічувати температуру чинім, якщо мороз, зеленим, якщо >0

function renderWeather(weather) {
  console.log(
    'weather.daily.temperature_2m_max :>> ',
    weather.daily.temperature_2m_max
  );
  const rootDiv = document.getElementById('root');

  const maxTempEl = document.createElement('div');
  const minTempEl = document.createElement('div');

  rootDiv.append(minTempEl, maxTempEl);

  minTempEl.textContent = weather.daily.temperature_2m_min;
  minTempEl.style.color = temperatureColor(weather.daily.temperature_2m_min);

  maxTempEl.textContent = weather.daily.temperature_2m_max;
  maxTempEl.style.color = temperatureColor(weather.daily.temperature_2m_max);
}

function temperatureColor(t) {
  return t < 0 ? 'blue' : t > 0 ? 'green' : 'black';
}
