let prevBtn = document.querySelector('.prev')
let nextBtn = document.querySelector('.next')
let sliderContainer = document.querySelector(".slider_container")
sliderContainer.style.width = sliderContainer.childElementCount * 100 + 'vw'

let a = 0

function clickBtnN() {
    if (a < (sliderContainer.childElementCount - 1)) {
        a += 1
        sliderContainer.style.transform = 'translate(-' + a * 100 + 'vw)'
    }
}

function clickBtnP() {
    if (a > 0) {
        a -= 1
        sliderContainer.style.transform = 'translate(-' + a * 100 + 'vw)'
    }
}

let touchstartX = 0
let touchendX = 0

function checkDirection() {
    if (touchendX < touchstartX) clickBtnN()
    if (touchendX > touchstartX) clickBtnP()
}

sliderContainer.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
})

sliderContainer.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    checkDirection()
})