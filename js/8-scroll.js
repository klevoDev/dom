// * ===== Geometry / scroll ====== * //

// https://learn.javascript.ru/onscroll
// https://learn.javascript.ru/size-and-scroll-window
// https://learn.javascript.ru/size-and-scroll
// https://learn.javascript.ru/coordinates

// ! <!DOCTYPE HTML> обязательно должен быть

const headingElement = document.querySelector('h1')
const subheadingElement = document.querySelector('h2')
const testDiv = document.querySelector('#testDiv')
const body = document.body


// * Ширина и высота окна браузера
// Показывает всю ширину (+ скролл на windows в теге body)
console.log(window.innerWidth);
console.log(window.innerHeight);


// * Ширина и высота DOM-элементов
// C учётом padding, border и scroll-bar* на элементах
// * ИСКЛ: не учитыввает ширину scroll-bar в теге body
console.log(body.offsetWidth);

// С учётом padding (без border & без scroll-bar)
console.log(body.clientWidth);

// С учётом padding (без border & без scroll-bar)
// Но учитывает то, что находится за прокруткой
console.log(body.scrollWidth);

// Example: (box-sizing: content-box)
console.log(testDiv.offsetHeight); // 52
console.log(testDiv.clientHeight); // 50 
console.log(testDiv.scrollHeight); // 683


// * scroll на windows 
// ! (Скролл имеет разную ширину на разных разрешениях)
// Чтобы посчитать ширину скролла:

console.log(window.innerWidth - document.body.offsetWidth);


// * Геометрические параметры элементов * //

const geomHeadingEl = subheadingElement.getBoundingClientRect();

console.log(geomHeadingEl.top); // Растояние о текущей прокрутки до заголвка сверху
console.log(geomHeadingEl.left);

// * Прокрутка / scrool * //

