const mario = document.getElementById("mario")
const pipe = document.getElementById("pipe")

function fazerMarioPular() {
    mario.classList.add("jump")

    setTimeout(() => {
        mario.classList.remove("jump")
    },500)
}

document.addEventListener("keydown", fazerMarioPular)

setInterval(() => {
    const pipePosition = pipe.offsetLeft
}, 40);