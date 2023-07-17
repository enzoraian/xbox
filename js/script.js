// ACCORDION SECTION QUESTIONS

const accordion = document.querySelectorAll('.js-accordion')

accordion.forEach(acc =>{
    acc.addEventListener('click', () =>{
        acc.parentElement.parentElement.classList.toggle('active')
    })
})