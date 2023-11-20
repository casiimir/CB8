
// ?q=palermo&appid=4d8519012fe369221adeb96c3807fbc5

// ?q=palermo // query - cominciano sempre con un punto interrogativo

// &appid=4d8519012fe369221adeb96c3807fbc5 // parameter - si concatena con una e commerciale &

const weatherStatus = {
  Clouds: 'https://images.unsplash.com/photo-1601370552761-d129028bd833?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D',
  Clear: 'https://media.istockphoto.com/id/825778252/photo/blue-sky-and-white-clouds-background.jpg?s=612x612&w=0&k=20&c=u1jkNZutv8H344KPxrgtfIHOMuWdU4H8PQ7_rvSI-wI='
}

const heroGen = (images, status, temp) => {
  const wrapperEl = document.createElement('div')
  const imgEl = document.createElement('img')
  const temperatureEl = document.createElement('h1')

  if(status === 'Clouds') {
    imgEl.src = images['Clouds']
  } else {
    imgEl.src = images['Clear']
  }

  // (status === 'Clouds') ? imgEl.src = images['Clouds'] : imgEl.src = images['Clear']

  imgEl.alt = status
  temperatureEl.textContent = Math.floor(temp - 273.15) + '°'

  wrapperEl.append(imgEl, temperatureEl)

  return wrapperEl
}

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '4d8519012fe369221adeb96c3807fbc5'

const bodyEl = document.body
const inputEl = document.createElement('input')

inputEl.placeholder = 'Inserisci una città...'
bodyEl.append(inputEl)

inputEl.addEventListener('change', (e) => {
  fetch(`${BASE_URL}?q=${e.target.value}&appid=${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    const heroEl = heroGen(weatherStatus, data.weather[0].main, data.main.temp)
    
    bodyEl.textContent = ''
    bodyEl.append(inputEl)
    bodyEl.append(heroEl)
  })
})
