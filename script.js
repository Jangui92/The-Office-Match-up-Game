document.addEventListener('DOMContentLoaded', () => {
  const squareArray = [
    {
      square0: 'puppy',
      image: 'images/puppytongue.jpg'
    },
    { square1: 'puppy', image: 'images/puppytongue.jpg' }
  ]
  cardArray.sort(() => 0.5 - Math.random())

  const resultDisplay = document.querySelector('#results')
  let squareChosen = []
  let squareChosenId = []
  let squareWin = []

  const memoryBoard = document.querySelector('.memory-board')
  function squareBoard() {
    for (let i = 0; i < squareArray.length; i++) {
      let squares = document.createElement('img')
      squares.setAttribute('src', 'images/background.jpg')
      squares.setAttribute('data-id', i)
      squares.addEventListener('click', flipCard)
      memoryBoard.appendChild(squares)
    }
  }
  squareBoard()

  function squareMatch() {
    let squares = document.querySelectorAll('img')
    const flipOne = squareChosenId[0]
    const flipTwo = squareChosenId[1]
    if (squareChosen[0] === squareChosen[1]) {
      alert(`You found a match!`)
      squares[flipOne].setAttribute('src', 'images/white.png')
      squares[flipTwo].setAttribute('src', 'images/white.png')
      squareWin.push(squareChosen)
    } else {
    }
    squareChosen = []
    squareChosen = []
    resultDisplay.textContext = squareWin.length
    if (squareWin.length === squareArray.length / 2) {
      resultDisplay.textContent = `You didn't schrute this one!`
    }
  }
  squareMatch()

  // FLIP EVENT
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    squareChosen.push(squareArray[cardId].name)
    squareChosenId.push(cardId)
    this.setAttribute('src', squareArray[squareArrayId].img)
    if (cardsChosen.length === 2) {
      setTimeout(squareMatch, 500)
    }
  }
})
