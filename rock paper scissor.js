//rock paper scissor
const box = document.querySelectorAll('.box');
// scores
const cScore = document.getElementById('computer score')
const yScore = document.getElementById('your score')
const draw = document.getElementById('draw')
// reset
const reset = document.getElementById('reset')
// result
const result = document.getElementById('result')
//sounds
const ppr = document.getElementById('ppr')
const rck = document.getElementById('rck')
const scis = document.getElementById('scis')
const ret = document.getElementById('ret')
const win = document.getElementById('win')


// scores initializer
const rps = { rock: 1, paper: 2, scissor: 3 }
let cpt = 0;
let usr = 0;
let dr = 0;

// main logic
const main = (user) => {
    let compt = Math.ceil(Math.random() * 3);

    // computer part
    if (compt == 1 && user == 3) {
        score("c");
        result.innerText = '🤖computer won by rock🪨';
    }
    else if (compt == 2 && user == 1) {
        score("c");
        result.innerText = '🤖computer won by paper🧻';
    }
    else if (compt == 3 && user == 2) {
        score("c");
        result.innerText = '🤖computer won by scissors✂️';
    }
    // draw part
    else if (compt == user) {
        score("d")
        result.innerText = '⚔️Draw⚔️';
    }
    // user part
    else {
        score("u")
        result.innerText = '🌟You Won🌟'
        win.play()
    }
}
// scores management
const score = (player) => {
    if (player == 'c') {
        cpt += 1;
        cScore.innerText = `Computer Score: ${cpt}`
    }
    else if (player == 'u') {
        usr += 1;
        yScore.innerText = `Your Score: ${usr}`
    }
    if (player == 'd') {
        dr += 1;
        draw.innerText = `Draw: ${dr}`
    }
}

// reset
const re = reset.onclick = () => {
    ret.play()
    cpt = 0;
    cScore.innerText = `Computer Score: ${cpt}`
    usr = 0;
    yScore.innerText = `Your Score: ${usr}`
    dr = 0;
    draw.innerText = `Draw: ${dr}`
    result.innerText = ' '
}
// rock paper scissor target
box.forEach(n => {
    re()
    result.style.display = 'block'
    n.onclick = () => {
        main(rps[n.id])
        if (n.id == 'rock') rck.play()
        else if (n.id == 'scissor') scis.play()
        else if (n.id == 'paper') ppr.play()
    }
})

// event listener
document.addEventListener('keydown', (key) => {
    if (key.key == 'ArrowDown') { main('2'); ppr.play() }
    else if (key.key == 'ArrowLeft') { main('1'); rck.play() }
    else if (key.key == 'ArrowRight') { main('3'); scis.play() }
    else if (key.key == ' ') { re(); ret.play() }
})
