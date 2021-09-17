const modalBtn = document.querySelector('.modal-btn')
const modal = document.querySelector('.modal-overlay')
const clsBtn = document.querySelector('.close-btn')

modalBtn.addEventListener('click', () => {
    modal.classList.add('open-modal')
})

clsBtn.addEventListener('click', () => {
    modal.classList.remove('open-modal')
})