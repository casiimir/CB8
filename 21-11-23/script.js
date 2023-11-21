const carouselElFn = () => {
  const wrapperEl = document.createElement('div');
  const btnLeft = document.createElement('button')
  const imgEl = document.createElement('img')
  const btnRight = document.createElement('button')

  wrapperEl.className = 'carousel';
  imgEl.className = 'carousel-image';
  imgEl.src = imageList[0];
  imgEl.alt = 'image'
  btnLeft.textContent = '<'
  btnLeft.className = 'carousel-btn-left'
  btnRight.textContent = '>'
  btnRight.className = 'carousel-btn-right'

  wrapperEl.append(btnLeft, imgEl, btnRight)
  return wrapperEl;
}

const onBtnLeft = () => {
  carouselImageEl.src = imageList[2]
}

const onBtnRight = () => {
  try {
    imageIndex++;
    if(imageIndex > imageList.length - 1) {
      throw new Error('Siamo fuori range')
    }
  } catch (error) {
    imageIndex = 0;
  } finally {
    carouselImageEl.src = imageList[imageIndex];
  }
}

const imageList = [
  'https://picsum.photos/500/300?1',
  'https://picsum.photos/500/300?2',
  'https://picsum.photos/500/300?3',
]

let imageIndex = 0
const bodyEl = document.body;
const carouselEl = carouselElFn(imageList[0]);

bodyEl.append(carouselEl);

const carouselBtnLeftEl = carouselEl.firstChild;
const carouselImageEl = carouselEl.children[1]
const carouselBtnRightEl = carouselEl.lastChild;

carouselBtnLeftEl.addEventListener('click', onBtnLeft);
carouselBtnRightEl.addEventListener('click', onBtnRight);

fetch('https://picsum.photos/v2/list')
.then(res => res.json())
.then(data => {
  console.log(data)
})



//// ---------------------------------------------------------------------------------------------------------
//// ASYNC / AWAIT 
//// ---------------------------------------------------------------------------------------------------------

// CODICE ASYNC dentro una funzione quindi dobbiamo mettere (per forza!) ASYNC / AWAIT
// let carouselImageEl;
// let imageList = [];

// const onHttpGET = async (BASE_URL) => {
//   const res = await fetch(BASE_URL);
//   const data = await res.json()

//   return data;
// }


// onHttpGET('https://picsum.photos/v2/list').then(imageList => {
//   const carouselEl = carouselElFn(imageList[1].download_url);

//   bodyEl.append(carouselEl);

//   const carouselBtnLeftEl = carouselEl.firstChild;
//   carouselImageEl = carouselEl.children[1]
//   const carouselBtnRightEl = carouselEl.lastChild;

//   carouselBtnLeftEl.addEventListener('click', onBtnLeft);
//   carouselBtnRightEl.addEventListener('click', onBtnRight);
// })

