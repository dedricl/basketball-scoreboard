let homePoints = 0
let guestPoints = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

// function incrementHomeScore(numPoints) {
//     homePoints += numPoints;
//     homeScore.textContent = homePoints;
// }

function addOneToHome(){
    homePoints += 1
    homeScore.textContent = homePoints
}

function addTwoToHome(){
    homePoints += 2
    homeScore.textContent = homePoints
}

function addThreeToHome(){
    homePoints += 3
    homeScore.textContent = homePoints
}

function addOneToGuest(){
    guestPoints += 1
    guestScore.textContent = guestPoints
}

function addTwoToGuest(){
    guestPoints += 2
    guestScore.textContent = guestPoints
}

function addThreeToGuest(){
    guestPoints += 3
    guestScore.textContent = guestPoints
}

function newGame() {
    homePoints = 0
    guestPoints = 0
    homeScore.textContent = homePoints
    guestScore.textContent = guestPoints
}