
const formEl = document.querySelector('form');


formEl.addEventListener('input', (e) => {

    // console.log(e.currentTarget); // Тот на ком прослушка
    // console.log(e.target.type);
    if (e.target.type === 'email') {
        console.log(111);
        console.log(e.target.value);
    }

    e.preventDefault()
})

const arr = [65, 654, 6, 54, 756, 75, 6]


// TODO:
// removeEventListener



