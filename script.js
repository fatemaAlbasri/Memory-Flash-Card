console.log('Connected Successfully')

/* -------------------------- Global Variables ---------------------------*/
let start = false
const images = [
  'images/card1.png',
  'images/card2.png',
  'images/card3.png',
  'images/card4.png'
]
let assignedImages = []

// timer
let startTimer
let spendTime
let seconds = 0
let min = 0

/* --------------------- Cached elements references ---------------------*/
const startBtm = document.querySelector('.start')
const cards = document.querySelectorAll('.cardsBtn')
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
  spendTime = timer.innerHTML = `${min}:${seconds}`
  seconds++
}

// Start Game
const startGame = () => {
  start = true
  console.log('Game starting')

  const imagePairs = [...images, ...images]
  assignedImages = shuffleArray(imagePairs)

  cards.forEach((card, index) => {
    const img = document.createElement('img')
    img.setAttribute('src', assignedImages[index])
    img.style.width = '60px'
    img.style.height = '70px'
    card.appendChild(img)

    // adding the image data (attribute) in button to help when fliping cards
    card.setAttribute('data', assignedImages[index])
  })

  // Hide all cards after 5 seconds
  setTimeout(() => {
    cards.forEach((card) => {
      const img = card.querySelector('img')
      if (img) img.remove()
    })
    console.log('Cards flipped back.')

    startTimer = setInterval(myTimer, 1000)
  }, 5000)
}

let flippedCards = []

// Select Card
const selectCard = (event) => {
  const card = event.currentTarget

  if (flippedCards.includes(card) || flippedCards.length >= 2) return

  if (card.querySelector('img')) return

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

// checked matching cards
let isMatched = false
let matchedCards = []
let scoreCount = 0
const checkMatched = () => {
  console.log('in checked')
  isMatched = true
  const [firstCard, secondCard] = flippedCards

  if (firstCard.image === secondCard.image) {
    console.log('Matched cards')
    matchedCards.push(firstCard.card, secondCard.card)
    console.log(matchedCards)

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
  if (matchedCards.length === cards.length) endGame()
}
//hint button
const hint = () => {
  if (!start) return console.log('can not clicked hint button')

  cards.forEach((card) => {
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
    cards.forEach((card) => {
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
  window.location.href = 'levels.html'
}

const restart = () => {
  clearInterval(startTimer)
  div.remove()
  seconds = 0
  min = 0
  timer.innerHTML = '0:0'
  flippedCards = []
  start = false
  levelEnd.style.opacity = 1

  cards.forEach((card) => {
    const img = card.querySelector('img')
    if (img) img.remove()
  })

  console.log('Clicked restart button')
}
const div = document.createElement('div')

const endGame = () => {
  clearInterval(startTimer)

  levelEnd.style.opacity = 1
  const endText = document.createElement('h1')
  const endTimer = document.createElement('h2')
  const endScore = document.createElement('h2')
  const button = document.createElement('button')

  endText.innerHTML = 'Level Completed'
  endTimer.innerHTML = `Spend time: ${min}:${seconds}`
  endScore.innerHTML = `Score: 0`
  button.innerHTML = 'Next Level'

  div.appendChild(endText)
  div.appendChild(endTimer)
  div.appendChild(endScore)
  div.appendChild(button)

  levelEnd.appendChild(div)
}
// Event Listeners

cards.forEach((card) => {
  card.addEventListener('click', selectCard)
})
homeBtm.addEventListener('click', home)
startBtm.addEventListener('click', startGame)
restartBtm.addEventListener('click', restart)
hintBtm.addEventListener('click', hint)
