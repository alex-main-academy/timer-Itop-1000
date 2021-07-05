const body = document.querySelector('body')
body.style.cssText = `
    background-color: black;
`

const container = document.querySelector('.container')
container.style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 100px;
`

const text = document.querySelector('.text__class')
text.style.cssText = `
    display: flex;
    justify-content: center;
    color: white;
    font-size: 50px

`

const buttons = document.querySelector('.button__class')
buttons.style.cssText = `
    display: flex;
    padding-left: 30%;
    padding-right: 30%;
    justify-content: space-around;

`

const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const seconds1 = document.querySelector('.seconds1')
const hours1 = document.querySelector('.hours1')
const minutes1 = document.querySelector('.minutes1')

const buttonStart = document.querySelector('.start')
buttonStart.style.cssText = `
    color: white;
    text-transform: uppercase;
    font-size: 20px;
    width: 100px;
    height: 50px;
    border: 1px solid white;
    border-radius: 5px;
    background-color: rgb(32, 178, 170);
    cursor: pointer;
`

const buttonStop = document.querySelector('.stop')
buttonStop.style.cssText = `
    color: white;
    text-transform: uppercase;
    font-size: 20px;
    width: 100px;
    height: 50px;
    border: 1px solid white;
    border-radius: 5px;
    background-color: rgb(32, 178, 170);
    cursor: pointer;
`

const buttonReset = document.querySelector('.reset')
buttonReset.style.cssText = `
    color: white;
    text-transform: uppercase;
    font-size: 20px;
    width: 100px;
    height: 50px;
    border: 1px solid white;
    border-radius: 5px;
    background-color: rgb(32, 178, 170);
    cursor: pointer;
`

const buttonClear = document.querySelector('.clear')
buttonClear.style.cssText = `
    color: white;
    text-transform: uppercase;
    font-size: 20px;
    width: 100px;
    height: 50px;
    border: 1px solid white;
    border-radius: 5px;
    background-color: rgb(32, 178, 170);
    cursor: pointer;
`


function timer () {
    seconds.innerHTML++
        if (seconds.innerHTML == 10) {
            seconds1.style.display = 'none'
        }
        if (seconds.innerHTML == 60) {
            minutes.innerHTML ++
            seconds.innerHTML = 0
            seconds1.style.display = 'flex'
    
            if (minutes.innerHTML == 10) {
                minutes1.style.display = 'none'
            }
        }
        if (minutes.innerHTML == 60) {
            hours.innerHTML ++
            minutes.innerHTML = 0
            minutes1.style.display = 'flex'
    
            if (hours.innerHTML == 10) {
                hours1.style.display = 'none'
            }
        }
}



buttonStart.addEventListener('click', () => {
    let time = setInterval(timer, 1000)

    buttonStop.addEventListener('click', () => {
        clearInterval(time)
    })

    buttonReset.addEventListener('click', () => {
        clearInterval(time)

        seconds.innerHTML = '0'
        seconds1.style.display = 'flex'

        let resetTime = setInterval(timer, 1000)

        buttonClear.addEventListener('click', () => {
            clearInterval(time)
            clearInterval(resetTime)
            seconds.innerHTML = '0'
            seconds1.style.display = 'flex'
            minutes.innerHTML = '0'
            minutes1.style.display = 'flex'
            hours.innerHTML = '0'
            hours1.style.display = 'flex'
        })
        buttonStop.addEventListener('click', () => {
            clearInterval(resetTime)
        })
    })
})





