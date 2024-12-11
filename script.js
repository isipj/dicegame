setInterval(time, 1000);

function time() {
    var date = new Date()
    var hrs = date.getHours()
    if (hrs > 12) {
        hrs = hrs - 12
    }
    var mins = date.getMinutes()

    var day = date.getDate()
    var mo = date.getMonth()
    var year = date.getFullYear()

    var currentTime = hrs + ':' + mins
    var currentDate = day + '/' + mo + '/' + year

    document.getElementById('day').innerText = currentDate + ' at ' + currentTime
 }



function roll() {
    var firstdice = 1
    var seconddice = 1

    var startpath = 'dice-'
    var extension = '.svg'

    var firstdice = Math.floor(Math.random() * 6) + 1
    var seconddice = Math.floor(Math.random() * 6) + 1
    var total = firstdice + seconddice

    console.log(firstdice)
    console.log(seconddice)
    console.log(total)

    var firstDiceValue = String(firstdice)
    var secondDiceValue = String(seconddice)

    var firstDiceResult = startpath + firstDiceValue + extension
    var secondDiceResult = startpath + secondDiceValue + extension
    console.log(firstDiceResult)
    console.log(secondDiceResult)

    document.getElementById('dice1').src = firstDiceResult
    document.getElementById('dice2').src = secondDiceResult


    if (total >= 8) {
        document.getElementById('winner').innerText = 'You Win: Try Again!'
    }
    else {
        document.getElementById('winner').innerText = "You didn't win: Try Again!"
    }

}