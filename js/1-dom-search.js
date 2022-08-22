// * ===== DOM ===== * //

// * ===== 1 Поиск
// * ===== 2 Работа с классами (CRUD + check)
// * ===== 3 Работа с атрибутами / data-атрибуты (CRUD + check)
// * ===== 4 Работа со стилями
// * ===== 5 Обработка событий


// * ===== 1 Поиск
// console.log(document.head);
// console.log(document.body); // Получить тег body


const inputElement = document.querySelector('input') // Поиск по тегу (tag)
// Ищет первый встречный элемент
// На вход подаётся селектор - строка, как в css
// возвращает объект - DOM-элемент / null - если ничего не нашёл
console.log(inputElement);

const buttonSubmitElement = document.querySelector('.form__button') // Поиск по классу (class)
console.log(buttonSubmitElement);

const formElement = document.querySelector('#form-123e257') // Поиск по id (id)
console.log(formElement);

const inputAttrElement = document.querySelector('[type="text"]') // Поиск по атрибуту / дата-атрибуту (attribute / data)
console.log(inputAttrElement);


// * Сложный поиск
// 1 вариант
const inputAttrElement2 = document.querySelector('.form .form__mail') // Поиск сложный (hard)
console.log(inputAttrElement2);

// **** 2 вариант
const formEl = document.querySelector('.start__form')
const inputEL = formEl.querySelector('input[type="email"]')
console.log(inputEL);

// Поиск среди предков (поиск включая самого себя)
const wrapperEl = inputEL.closest('.wrapper') // Поиск среди родительских элементов
console.log(wrapperEl);


// * Поиск более одного элемента
const inputList = document.querySelectorAll('input')
// Поиск элементов по css-селектору
// Возвращает массив (NodeList), если ничего не нашёл []
console.log(inputList);


// NodeList - объект(массиво-подобный) - не работают hof-функции, кроме forEach
// HTMLCollection - объект(массиво-подобный) не работает даже с forEach
// Привести к массиву можно с помощью Array.from(inputList)

console.log(Array.from(inputList));



// * Передвижение по DOM
const buttonEl = document.querySelector('.footer__wrap-submit button')

console.log(buttonEl.parentElement); // * Получить родительский элемент
console.log(buttonEl.parentElement.previousElementSibling); // * Получить предыдущий элемент
// * <element>.nextElementSibling - получить следующий элемент
console.log(buttonEl.parentElement.previousElementSibling.childNodes);  // * Получить массив тегов, которые внутри

// HTMLCollection не работает с forEach
// NodeList





// * Дополнительно
// * Другие методы поиска
// document.getElementById('') // Поиск по id (тут решётка не нужна)
// document.getElementsByTagName('') // Поиск по тегу
// document.getElementsByClassName('') // Поиск по классу (тут точка не нужна)
