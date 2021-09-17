const btn = document.querySelector('.switch-btn')
const videoContainer = document.querySelector('.video-container')
const preloader = document.querySelector('.preloader')

btn.addEventListener('click', () => {
    if (!btn.classList.contains('slide')) {
        btn.classList.add('slide')
        videoContainer.pause()
    }
    else{
        btn.classList.remove('slide')
        videoContainer.play()
    }
})

window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader')
})