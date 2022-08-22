const wrapEmailEl = document.querySelector('.footer__wrap-email')

const emailInputEl = wrapEmailEl.querySelector('input')
console.log(emailInputEl);


const buttonEl = document.querySelector('.footer__wrap-submit button')
console.log(buttonEl);

console.log(buttonEl.type);

// Найти все кнопки submit на сайте

const allButtonSubmitList = document.querySelectorAll('[type="submit"]')
console.log(allButtonSubmitList); // NodeList



// Каскадность (приоритет селекторов)
// tag      - 1
// .class   - 10
// #id      - 100
// style=""     - 1000 // Инлайновый стиль
// !important - задаётся в css перед ;
// [attribute="value"] - 10


// #test-1.text p {
// }
// p span a span .triangle{
// }

