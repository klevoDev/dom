// 1. Ищем input, куда будем вводить данные
// 2. Ищем кнопку, на которуб будем нажимать
// 3. Ищем инпут для вывода

// 4. Вешаем прослушку на кнопку по клику
// 4.1. Получить данные после нажатия на кнопку
// 4.2. Отобразить данные


function upperInputText() {
    const formEl = document.querySelector('.about__form');

    const queryInputEl = formEl.querySelector('input');

    // const responseInputEl = formEl.querySelector('[readonly]');
    const responseSpanEl = formEl.querySelector('.form__res');
    const buttonSubmit = formEl.querySelector('button')



    const innerCleanText = responseSpanEl.innerHTML



    buttonSubmit.addEventListener('click', (e) => {
        const data = queryInputEl.value.toUpperCase()
        queryInputEl.value = ''
        // responseInputEl.value = data

        responseSpanEl.innerHTML = innerCleanText
        responseSpanEl.innerHTML += data

        e.preventDefault()
    })
}

upperInputText()


// responseSpanEl.outerHTML // Получить значение тега вместе с тегом (Учитывает внутренние теги)
// * responseSpanEl.innerHTML // получить значение элемента без тега (Учитывает внутренние теги)
// responseSpanEl.textContent // Получить текст






