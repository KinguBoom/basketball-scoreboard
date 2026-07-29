let scoreHome = document.getElementById("scoreHome")
let scoreGuest = document.getElementById("scoreGuest")

let scoresHome = 0
let scoresGuest = 0

function plusOneHome() {
    scoresHome += 1
    scoreHome.innerText = scoresHome
}

function plusTwoHome() {
    scoresHome += 2
    scoreHome.innerText = scoresHome
}

function plusThreeHome() {
    scoresHome += 3
    scoreHome.innerText = scoresHome
}

function plusOneGuest() {
    scoresGuest += 1
    scoreGuest.innerText = scoresGuest
}

function plusTwoGuest() {
    scoresGuest += 2
    scoreGuest.innerText = scoresGuest
}

function plusThreeGuest() {
    scoresGuest += 3
    scoreGuest.innerText = scoresGuest
}

