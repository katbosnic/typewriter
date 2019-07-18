

function playSound(e) {
    if (e.key === "/" || e.key === "'") {
        e.preventDefault()
    }
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const audio = document.querySelector(`audio`)
    audio.currentTime = 0;
    if (key) {
        audio.play();
    }
    key.classList.add('typing');
}

function resetButtons(e) {
    if (e.propertyName !== 'box-shadow') return;
    this.classList.remove('typing');
}

function typeLetters(e) {
    console.log(e)
}

const keyboard = document.querySelectorAll('.key')
keyboard.forEach(key => key.addEventListener('transitionend', resetButtons))
window.addEventListener('keydown', playSound);
window.addEventListener('keyup', typeLetters)
