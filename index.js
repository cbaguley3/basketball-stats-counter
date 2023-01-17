// document.getElementById("count").innerText = 5

let countEl1 = document.getElementById("count-el1")
let pointsScored = 0

function incrementP() {
    pointsScored += 1
    countEl1.textContent = pointsScored
}


let countEl2 = document.getElementById("count-el2")
let assistsMade = 0

function incrementA() {
    assistsMade = assistsMade + 1
    countEl2.textContent = assistsMade
}

let countEl3 = document.getElementById("count-el3")
let rebounds = 0

function incrementR() {
    rebounds = rebounds + 1
    countEl3.textContent = rebounds
}

let countEl4 = document.getElementById("count-el4")
let blocks = 0

function incrementB() {
    blocks = blocks + 1
    countEl4.textContent = blocks
}

let countEl5 = document.getElementById("count-el5")
let steals = 0

function incrementS() {
    steals = steals + 1
    countEl5.textContent = steals
}

let countEl6 = document.getElementById("count-el6")
let turnovers = 0

function incrementT() {
    turnovers = turnovers + 1
    countEl6.textContent = turnovers
}

function reset() {
    countEl1.textContent = 0
    pointsScored -= pointsScored
    countEl2.textContent = 0
    assistsMade -= assistsMade
    countEl3.textContent = 0
    rebounds -= rebounds
    countEl4.textContent = 0
    blocks -= blocks
    countEl5.textContent = 0
    steals -= steals
    countEl6.textContent = 0
    turnovers -= turnovers
}

reset()