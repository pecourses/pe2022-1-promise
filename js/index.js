'use strict';

// fetch(
//   'https://api.open-meteo.com/v1/forecast?latitude=47.84&longitude=35.23&daily=temperature_2m_max,temperature_2m_min,rain_sum&timezone=Europe%2FBerlin&start_date=2022-12-15&end_date=2022-12-15'
// )
//   .then(response => response.json())
//   .then(data => renderWeather(data))
//   .catch(err => console.log(err));

// // підвантажити дані на сьогодні і вивести їх на сторінку
// // пыдсвічувати температуру чинім, якщо мороз, зеленим, якщо >0

// function renderWeather(weather) {
//   const rootDiv = document.getElementById('root');

//   const maxTempEl = document.createElement('div');
//   const minTempEl = document.createElement('div');

//   rootDiv.append(minTempEl, maxTempEl);

//   minTempEl.textContent = weather.daily.temperature_2m_min;
//   minTempEl.style.color = temperatureColor(weather.daily.temperature_2m_min);

//   maxTempEl.textContent = weather.daily.temperature_2m_max;
//   maxTempEl.style.color = temperatureColor(weather.daily.temperature_2m_max);
// }

// function temperatureColor(t) {
//   return t < 0 ? 'blue' : t > 0 ? 'green' : 'black';
// }

// promise state:
// 1 pending
// 2.1 fullfilled - result - then(result=>{})
// 2.2 rejected   - error  - catch(error=>{}
//                           finally(()=>{})

const promise = new Promise((resolve, reject) => {
  resolve(5); // переводе проміс в fullfilled
  // або
  // reject(new Error('error!!!')); // переводе проміс в rejected
});

promise
  .then(data => console.log('data :>> ', data))
  .catch(e => console.log('e :>> ', e));

promise.then(
  data => console.log('data :>> ', data),
  e => console.log('e :>> ', e)
);

const sredCat = new Promise((res, rej) => {
  if (Math.random() > 0.5) {
    res('Your cat is alive)');
  } else {
    rej(new Error('You cat is unlucky('));
  }
});

sredCat
  .then(data => console.log('data :>> ', data))
  .catch(e => console.log('e :>> ', e));

// промісифікувати setTimeout
// setTimeout(cb,1000)
// delay(1000).then(cb)

function delay(ms) {
  return new Promise((res, rej) => {
    if (ms < 0) {
      rej(new RangeError('dalay must be positive number'));
    }
    setTimeout(res, ms);
  });
}

setTimeout(() => console.log('1s was passed from timeout'), 1000);
delay(-1000)
  .then(() => console.log('1s was passed'))
  .catch(e => console.log('e :>> ', e));

// загрузка изображения

const src = '1https://klike.net/uploads/posts/2019-01/1547365376_1.jpg';

// loadImage(src);

// function loadImage(src) {
//   const img = document.createElement('img');
//   img.src = src;
//   img.onload = function (e) {
//     document.body.append(img);
//   };
//   img.onerror = function () {
//     img.src =
//       'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXp7vG6vsG3u77s8fTCxsnn7O/f5OfFyczP09bM0dO8wMPk6ezY3eDd4uXR1tnJzdBvAX/cAAACVElEQVR4nO3b23KDIBRA0ShGU0n0//+2KmO94gWZ8Zxmr7fmwWEHJsJUHw8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwO1MHHdn+L3rIoK6eshsNJ8kTaJI07fERPOO1Nc1vgQm2oiBTWJ+d8+CqV1heplLzMRNonED+4mg7L6p591FC+133/xCRNCtd3nL9BlxWP++MOaXFdEXFjZ7r8D9l45C8y6aG0cWtP/SUGhs2d8dA/ZfGgrzYX+TVqcTNRRO9l+fS5eSYzQs85psUcuzk6igcLoHPz2J8gvzWaH/JLS+95RfOD8o1p5CU5R7l5LkfKEp0mQ1UX7hsVXqDpRrifILD/3S9CfmlUQFhQfuFu0STTyJ8gsP3PH7GVxN1FC4t2sbBy4TNRTu7LyHJbqaqKFw+/Q0ncFloo7CjRPwMnCWqKXQZ75El4nKC9dmcJaou9AXOE5UXbi+RGeJygrz8Uf+GewSn9uXuplnWDZJ7d8f24F/s6iq0LYf9olbS3Q8i5oKrRu4S9ybwaQ/aCkqtP3I28QDgeoK7TBya/aXqL5COx67PTCD2grtdOwH+pQV2r0a7YVBgZoKwwIVFQYG6ikMDVRTGByopjD8ATcKb0UhhRTe77sKs2DV7FKSjId18TUEBYVyLhUThWfILHTDqmI85/2RWWjcE/bhP6OD7maT3h20MHsA47JC3PsW0wcwLhv9t0OOPOIkCn21y2bXXwlyylxiYMPk1SuCSmpfK8bNQvIrpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwNX4BCbAju9/X67UAAAAASUVORK5CYII=';
//   };
// }

loadImage(src)
  .then(img => {
    document.body.append(img);
  })
  .catch(e => console.log('e :>> ', e));

function loadImage(src) {
  return new Promise((res, rej) => {
    const img = document.createElement('img');
    img.src = src;
    img.onload = () => {
      res(img);
    };
    img.onerror = () => {
      // img.src =
      //   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXp7vG6vsG3u77s8fTCxsnn7O/f5OfFyczP09bM0dO8wMPk6ezY3eDd4uXR1tnJzdBvAX/cAAACVElEQVR4nO3b23KDIBRA0ShGU0n0//+2KmO94gWZ8Zxmr7fmwWEHJsJUHw8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwO1MHHdn+L3rIoK6eshsNJ8kTaJI07fERPOO1Nc1vgQm2oiBTWJ+d8+CqV1heplLzMRNonED+4mg7L6p591FC+133/xCRNCtd3nL9BlxWP++MOaXFdEXFjZ7r8D9l45C8y6aG0cWtP/SUGhs2d8dA/ZfGgrzYX+TVqcTNRRO9l+fS5eSYzQs85psUcuzk6igcLoHPz2J8gvzWaH/JLS+95RfOD8o1p5CU5R7l5LkfKEp0mQ1UX7hsVXqDpRrifILD/3S9CfmlUQFhQfuFu0STTyJ8gsP3PH7GVxN1FC4t2sbBy4TNRTu7LyHJbqaqKFw+/Q0ncFloo7CjRPwMnCWqKXQZ75El4nKC9dmcJaou9AXOE5UXbi+RGeJygrz8Uf+GewSn9uXuplnWDZJ7d8f24F/s6iq0LYf9olbS3Q8i5oKrRu4S9ybwaQ/aCkqtP3I28QDgeoK7TBya/aXqL5COx67PTCD2grtdOwH+pQV2r0a7YVBgZoKwwIVFQYG6ikMDVRTGByopjD8ATcKb0UhhRTe77sKs2DV7FKSjId18TUEBYVyLhUThWfILHTDqmI85/2RWWjcE/bhP6OD7maT3h20MHsA47JC3PsW0wcwLhv9t0OOPOIkCn21y2bXXwlyylxiYMPk1SuCSmpfK8bNQvIrpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwNX4BCbAju9/X67UAAAAASUVORK5CYII=';
      rej(new Error('image was not loaded'));
    };
  });
}
