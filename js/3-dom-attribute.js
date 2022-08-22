// * ===== Attribute ===== * //

const inputlEl = document.querySelector('input');
const buttonEl = document.querySelector('button');


// * 1. Проверка на существование атрибута
// inputlEl.hasAttribute('href')
// inputlEl.value === 'tester'

// * 2. Получить значение атрибута (READ)
// Текущее значение
console.log(inputlEl.value); // ''

// Знаечние в момент отрисовки (самое первое значение)
console.log(inputlEl.getAttribute('value')); // null

// * 3. Удаление (Delete)
inputlEl.removeAttribute('class') // Удалить атрибут
// inputEL.className = ''
inputlEl.value = ''

// * 4. Изменить значение (UPDATE)
inputlEl.setAttribute('value', '100') // Изменить первоначальное состояние
inputlEl.value = 'New value'

// * 5. (Create)
// ! Все атрибуты у тегов уже созданы изначально, их можно только менять

// * Дополнительно:
// * data-attribute - порльзовательские атрибуты data-anyName
console.log(inputlEl.getAttribute('data-yohlmn'));

console.log(inputlEl.dataset.yohlmn); //











buttonEl.addEventListener('click', function (e) {
    e.preventDefault()
    console.log(inputlEl.value); // Текст
    console.log(inputlEl.getAttribute('value')) // null
    inputlEl.value = ''
});