document.addEventListener('DOMContentLoaded', () => {
  const squareArray = [
    {
      name: 'dwightdummy',
      image: 'images/dwightdummymask.png'
    },
    { name: 'dwightdummy', image: 'images/dwightdummymask.png' },
    { name: 'prisionmike', image: 'images/prisonmike.jpeg' },
    { name: 'prisionmike', image: 'images/prisonmike.jpeg' }
    // {name:,image:}, {name:,image:},
    // {name:,image:},{name:,image:},
    // {name:,image:},{name:,image:},
    // {name:,image:},{name:,image:},
    // {name:,image:},{name:,image:},
    // {name:,image:},{name:,image:},
    // {name:,image:},{name:,image:},
    // {name:,image:},{name:,image:},
    // {name:,image:},{name:,image:},
    // {name:,image:},{name:,image:},
    // {name:,image:},{name:,image:},
    // {name:,image:},{name:,image:},
    // {name:,image:},{name:,image:},
    // {name:,image:},{name:,image:},
    // {name:,image:},{name:,image:},
    // {name:,image:},{name:,image:},
    // {name:,image:},{name:,image:},
    // {name:,image:},{name:,image:}
  ]
  squareArray.sort(() => 0.5 - Math.random())

  const resultDisplay = document.querySelector('#results')
  let squareChosen = []
  let squareChosenId = []
  let squareWin = []

  // Board function with images set
  const memoryBoard = document.querySelector('.memory-board')
  function squareBoard() {
    for (let i = 0; i < squareArray.length; i++) {
      let squares = document.createElement('img')
      squares.setAttribute('src', 'images/dundermifflin.jpeg')
      squares.setAttribute('data-id', i)
      squares.addEventListener('click', flipCard)
      memoryBoard.appendChild(squares)
    }
  }
  squareBoard()

  // Square matches
  function squareMatch() {
    let squares = document.querySelectorAll('img')

    const flipOne = squareChosenId[0]
    const flipTwo = squareChosenId[1]
    if (squareChosen[0] === squareChosen[1]) {
      alert(`You found a match!`)
      squares[flipOne].setAttribute('src', 'iimages/blackback.jpeg')
      squares[flipTwo].setAttribute('src', 'images/blackback.jpeg')
      squareWin.push(squareChosen)
    } else {
      squares[flipOne].setAttribute('src', 'images/dundermifflin.jpeg')
      squares[flipTwo].setAttribute('src', 'images/dundermifflin.jpeg')
      alert(`You're such a Toby. Try again`)
    }
    squareChosen = []
    squareChosenId = []
    resultDisplay.textContext = squareWin.length
    if (squareWin.length === squareArray.length / 2) {
      resultDisplay.textContent = `You didn't schrute this one!`
    }
  }
  // squareMatch()

  // FLIP EVENT
  function flipCard() {
    let squareId = this.getAttribute('data-id')
    console.log(squareArray[squareId].name)

    squareChosen.push(squareArray[squareId].name)
    squareChosenId.push(squareId)

    this.setAttribute('src', squareArray[squareId].image)
    if (squareChosen.length === 2) {
      setTimeout(squareMatch, 500)
    }
  }
})
