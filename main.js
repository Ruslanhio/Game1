const MAX_VALUE = 100
const MIN_VALUE = 0
const ATTEMTS_NUMBER = 10

function getPlayerName() {
    while (true) {
    const playerName = prompt('Привет, друг! Как тебя зовут?', '')
    if (playerName.trim() && (typeof(Number(playerName)) !== 'number')) {
    return playerName
} else {
    alert('Не пиши фигню!!')

}
    }
}
const playerName = getPlayerName()

const getRandomNumber = (maxValue) => {
    const randomNumber = Math.round(Math.random() * maxValue) // 0 - 100
    return randomNumber
}

const randomNumber = getRandomNumber(MAX_VALUE)

const game = (minValue, maxValue, attNumber, playerName, randomNumber) => {
    alert(`Привет, ${playerName}!
    Я загадал число в интервале от ${minValue} до ${maxValue}
    У тебя есть ${attNumber} попыток отгадать его.`)


    for (let i = 1; i <= attNumber; i++) {
        const playerAnswer = prompt('Какое число я загадал?', '')
        if (playerAnswer > randomNumber) {
            alert(`Моё число меньше.
        Попоробуй ещё, но помни, что у тебя осталось ${attNumber - i} попыток`)
        } else if (playerAnswer < randomNumber) {
            alert(`Моё число больше.
        Попоробуй ещё, но помни, что у тебя осталось ${attNumber - i} попыток`)
        } else {
            alert(`Это победа!! Ты - молодец!
        Угадал моё число с ${i} попыток`)
            return
        }
    }
    alert(`Ты не молодец, не справился за ${attNumber} попыток.
    Тебе надо поработать над собой`)
}
game(MIN_VALUE, MAX_VALUE, ATTEMTS_NUMBER, playerName, randomNumber)


