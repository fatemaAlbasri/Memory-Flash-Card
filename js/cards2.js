console.log('Connected Successfully')

/* -------------------------- Global Variables ---------------------------*/
let start = false
const images = [
  '../images/card1.png',
  '../images/card2.png',
  '../images/card3.png',
  '../images/card4.png',
  '../images/card5.png'
]
let assignedImages = []
let flippedCards = []

// timer
let startTimer
let seconds = 0
let min = 0
let setTime

// checked matching cards and score
let isMatched = false
let matchedCards = []
let scoreCount = 0

/* --------------------- Cached elements references ---------------------*/
const startBtm = document.querySelector('.start')
const cardsBtn = document.querySelectorAll('.cardsBtn')
const homeBtm = document.querySelector('.home')
const hintBtm = document.querySelector('.hint')
const restartBtm = document.querySelector('.restartBtn')

const levelEnd = document.querySelector('.levelEnd')

const timer = document.querySelector('.timer')
const score = document.querySelector('.score')

/* ------------------------------ Functions ------------------------------*/

// Shuffling array of images https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5)
}

// Timer count
const myTimer = () => {
  if (seconds >= 60) {
    min++
    seconds = 0
  }
  timer.innerHTML = `${min}:${seconds}`
  seconds++
}

// Start Game
const startGame = () => {
  start = true
  console.log('Game starting')

  const imagePairs = [...images, ...images]
  assignedImages = shuffleArray(imagePairs)

  //adding images on buttons
  cardsBtn.forEach((card, index) => {
    const img = document.createElement('img')
    img.setAttribute('src', assignedImages[index])
    img.style.width = '60px'
    img.style.height = '70px'
    card.appendChild(img)

    // adding the data (attribute) on button to help when fliping cards
    card.setAttribute('data', assignedImages[index])
    console.log(card)
  })

  // Hide all images after 5 seconds
  setTimeout(() => {
    cardsBtn.forEach((card) => {
      const img = card.querySelector('img')
      if (img) img.remove()
    })
    console.log('Cards flipped back.')
    startTimer = setInterval(myTimer, 1000)
  }, 5000)
}

// Select Card
const selectCard = (event) => {
  const card = event.currentTarget

  if (
    flippedCards.includes(card) ||
    flippedCards.length >= 2 ||
    card.querySelector('img')
  )
    return

  const assignedImage = card.getAttribute('data')
  if (!assignedImage) return

  const img = document.createElement('img')
  img.setAttribute('src', assignedImage)
  img.style.width = '60px'
  img.style.height = '70px'

  card.appendChild(img)

  flippedCards.push({ card, image: assignedImage })

  console.log('Clicked card, image:', assignedImage)

  if (flippedCards.length === 2) {
    console.log('go to checked function')
    checkMatched()
  }
}

// checking matched cards
const checkMatched = () => {
  console.log('in checked')
  isMatched = true
  const [firstCard, secondCard] = flippedCards

  //checkd if cards that clicked are equal or not
  if (firstCard.image === secondCard.image) {
    console.log('Matched cards')
    matchedCards.push(firstCard.card, secondCard.card)
    console.log(matchedCards)
    scoreCount += 2
    score.innerHTML = `${scoreCount}`
    flippedCards = []
    isMatched = false
  } else {
    setTimeout(() => {
      flippedCards.forEach(({ card }) => {
        if (!matchedCards.includes(card)) {
          const img = card.querySelector('img')
          console.log(img)
          if (img) {
            img.remove()
          }
        }
      })
      console.log('Not matched cards')
      console.log('matched cards' + matchedCards.length)

      flippedCards = []
      isMatched = false
    }, 1000)
  }
  if (matchedCards.length === cardsBtn.length) endGame()
}
//hint button
const hint = () => {
  if (!start) return console.log('can not clicked hint button')

  cardsBtn.forEach((card) => {
    if (!card.querySelector('img') && !matchedCards.includes(card)) {
      const image = card.getAttribute('data')
      if (image) {
        const img = document.createElement('img')
        img.setAttribute('src', image)
        img.style.width = '60px'
        img.style.height = '70px'
        card.appendChild(img)
      }
    }
  })

  console.log('Clicked hint button')

  setTimeout(() => {
    cardsBtn.forEach((card) => {
      if (!matchedCards.includes(card)) {
        const img = card.querySelector('img')
        console.log(img)
        if (img) {
          img.remove()
        }
      }
    })
  }, 2000)
}

const home = () => {
  console.log('Clicked home button')
  window.location.href = '../html/levels.html'
}

const restart = () => {
  console.log('Clicked restart button')

  clearInterval(startTimer)

  start = false
  flippedCards = []
  matchedCards = []
  assignedImages = []
  scoreCount = 0
  seconds = 0
  min = 0
  timer.innerHTML = '0:0'
  score.innerHTML = '0'

  cardsBtn.forEach((card) => {
    const img = card.querySelector('img')
    if (img) img.remove()

    card.removeAttribute('data')
  })

  levelEnd.style.opacity = 0
  div.innerHTML = ''
}

// div to contains end game info
const div = document.createElement('div')

const endGame = () => {
  clearInterval(startTimer)

  levelEnd.style.opacity = 1
  const endText = document.createElement('h1')
  const endTimer = document.createElement('h2')
  const endScore = document.createElement('h2')
  const button = document.createElement('button')

  setTime = seconds + min * 60
  if (setTime <= 10) scoreCount += 20
  else if (setTime > 10 && setTime <= 20) scoreCount += 10
  else scoreCount += 5

  endText.innerHTML = 'Level Completed'
  endTimer.innerHTML = `Spend time: ${min}:${seconds}`
  endScore.innerHTML = `Score: ${scoreCount}`
  button.innerHTML = 'Next Level'

  div.appendChild(endText)
  div.appendChild(endTimer)
  div.appendChild(endScore)
  div.appendChild(button)

  levelEnd.appendChild(div)

  button.addEventListener('click', () => {
    window.location.href = '../html/cards3.html'
  })
}

// Event Listeners

cardsBtn.forEach((card) => {
  card.addEventListener('click', selectCard)
})

homeBtm.addEventListener('click', home)
startBtm.addEventListener('click', startGame)
restartBtm.addEventListener('click', restart)
hintBtm.addEventListener('click', hint)
