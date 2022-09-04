// * ===== Styles ===== * //
// ! Чаще всего лучше добавлять и убирать класс с уже готовыми стилями, а не использовать эти методы :)

// * Create / Update / Delete style
// 1 способ 
const inputEl = document.querySelector('input');

inputEl.style.borderRadius = '10px'
inputEl.style.border = '1px solid #000'

inputEl.style.border = 'none' // ! Delete

// 2 способ - (перезатирает)

inputEl.style.cssText = `
    background-color: tomato;
    color: red;
`;

// ---- 3 редкий способ (перезатирает, не использовать)
inputEl.setAttribute('style', 'color: blue')


// * Read
const styleElement = getComputedStyle(inputEl)
// console.log(styleElement); // Объект стилей
console.log(styleElement.border); // Стиль border

// ! Не работает иниверсальное margin/paddin, использовать нужную сторону
// ! Не работает с псевдоклассом :visited (У ссылок)
// !!!! Не использоваться для чтения ширины и высоты (Из-за box-sizing: border-box/content-box/padding-box)





