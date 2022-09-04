// * ==== Create Tags ==== * //
// * 1 способ
// responseSpanEl.outerHTML // Получить значение тега вместе с тегом (Учитывает внутренние теги)
// * responseSpanEl.innerHTML // получить значение элемента без тега (Учитывает внутренние теги)
// responseSpanEl.textContent // Получить текст


console.log(document.body.innerHTML);

document.body.innerHTML += '<h1 class=\'test\'>Heading</h1>'





// * 2 способ


const textEl = document.querySelector('#text-1');


textEl.insertAdjacentHTML(
    'beforeend',
    `
        <span class='test'>Text</span>
    `
)

// <!-- beforebegin -->
// <p class="start__text text" id="text-1">
//     <!-- afterbegin -->
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repellat
//     <!--  beforeend -->
// </p>
// <!-- affterend -->


// * 3 вариант (создаём DOM-объект)

const spanEl = document.createElement('span') // Создали DOM-element
console.dir(spanEl);

// spanEl.innerHTML
spanEl.innerText = 'spanchek'
spanEl.classList.add('test')

// DOM - элемент - объект (сслычный тип данных)

// Пермещение (вставка) созданного элемента
textEl.before(spanEl) // перед тегом p
textEl.after(spanEl) // после тега p
textEl.prepend(spanEl) // в начале тега p
textEl.append(spanEl) // в конце тега p




// * Сравнение React c JS native
// document.createElement('span')
// React.createElement('span') - js -> jsx -> <span></span>


// * Задача
// * Написать функцию, которая принимает параметры, необходимы для создания заданного тега, с заданным классом и заданным контектом
// Функция возвращает строку с тегом
// * Учесть случай, если не передали ни тег, ни класс (контент обяателен)

// ! Решить эту задачу, только функция возвращает DOM-elmenet

