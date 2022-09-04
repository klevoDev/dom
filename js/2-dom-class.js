// * ===== Class (.classList)===== * //

// Начальные условия //
const textEl = document.querySelector('.start__text');


// * 1. Проверка на наличие класса
if (textEl.classList.contains('text')) {
    console.log(true);
}

// * 2. Получить массив классов / класс (READ)
console.log(textEl.classList); // Массив с классами
console.log(textEl.classList[0]); // Первый класс из массива
console.log(textEl.classList.value); // Строка всего класса

console.log(textEl.className); // Обращение к атрибуту - Строка всего класса

// * 3. Добавить класс (CREATE)
// ! Класс должен быть заранее прописан в css ._active

textEl.classList.add('_active') // Добавляет класс

textEl.classList.toggle('_active') // ? Добавляет класс если его нет и убирает класс, если он есть

// * 4. Удалить класс (DELETE)
// textEl.classList.remove('text') // * Удаление

// textEl.removeAttribute('class') // Удаление всех классов сразу


// * 5. Заменить класс (UPDATE)

textEl.classList.replace('text', '_text-replaced')











