// * ===== Event (Событие) ===== * //

const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');

// console.log(inputEl.value);


// buttonEl.addEventListener('', (e) => {})

buttonEl.addEventListener('click', (event) => {
    // console.log(event.target); // event.target - тот на кого нажал
    // console.log(event.currentTarget);  //  event.currentTarget - тот на ком прослушка (=this)

    console.log(inputEl.value);

    event.preventDefault() // Отключить действие по умолчанию


})


document.addEventListener('keydown', (event) => {
    // console.log(event.key); // Здесь ищешь название клавиши
    if (event.key === 'Enter') {
        console.log('Enter');
    }
});







// Event:
// * 'click' ('mousedown' & 'mouseup')
// 'mousedown'
// 'mouseup'

// 'change'  - когда дописал в инпут (enter / потеря фокуса)
// 'input' - срабатывает на input при изменении любого символа (в реакт - это change)

// 'contextmenu' - ПКМ
// 'dbclick'  - двойной клик
// 'scroll' - прокручен колёсик мыши 

// 'mousemove' - движение мыши
// 'submit' - отправка формы

// * 'keydown' - кнопка зажата - используем его
// 'keyup' - кнопка отжата (на клавиатуре)
// ! 'keypress' - кнопка нажата (аналог клика) - не используем

// * blur - когда теряется фокус с элемента
// focus - когда элемент приобритает фокус

// beforeunload / unload - пользователь покидает страницу






