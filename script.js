document.addEventListener('DOMContentLoaded', () => {
  const squareArray = [
    {
      name: 'assistant',
      image: 'images/assistanttothe.jpeg'
    },
    { name: 'assistant', image: 'images/assistanttothe.jpeg' },
    { name: 'bearsbeets', image: 'images/bearsbeets.png' },
    { name: 'bearsbeets', image: 'images/bearsbeets.png' },
    { name: 'boom', image: 'images/boomroasted.jpeg' },
    { name: 'boom', image: 'images/boomroasted.jpeg' },
    { name: 'stutter', image: 'images/didistutter.jpeg' },
    { name: 'stutter', image: 'images/didistutter.jpeg' },
    { name: 'dinkin', image: 'images/dinkinflicka.png' },
    { name: 'dinkin', image: 'images/dinkinflicka.png' },
    { name: 'dasjim', image: 'images/dwightasjim.png' },
    { name: 'dasjim', image: 'images/dwightasjim.png' },
    { name: 'dummy', image: 'images/dwightdummymask.png' },
    { name: 'dummy', image: 'images/dwightdummymask.png' },
    { name: 'false', image: 'images/dwightfalse.jpeg' },
    { name: 'false', image: 'images/dwightfalse.jpeg' },
    { name: 'ignorant', image: 'images/dwightyouignorant.png' },
    { name: 'ignorant', image: 'images/dwightyouignorant.png' },
    { name: 'electric', image: 'images/electriccity.jpeg' },
    { name: 'electric', image: 'images/electriccity.jpeg' },
    { name: 'beyonce', image: 'images/iambeyonce.jpeg' },
    { name: 'beyonce', image: 'images/iambeyonce.jpeg' },
    { name: 'jimasd', image: 'images/jimasdwight.png' },
    { name: 'jimasd', image: 'images/jimasdwight.png' },
    { name: 'illkillyou', image: 'images/micaelillkillyou.png' },
    { name: 'illkillyou', image: 'images/micaelillkillyou.png' },
    { name: 'no', image: 'images/michael nogodno.jpeg' },
    { name: 'no', image: 'images/michael nogodno.jpeg' },
    { name: 'prisionmike', image: 'images/prisonmike.jpeg' },
    { name: 'prisionmike', image: 'images/prisonmike.jpeg' },
    { name: 'fire', image: 'images/ryanstarted.jpeg' },
    { name: 'fire', image: 'images/ryanstarted.jpeg' },
    { name: 'shesaid', image: 'images/shesaid.jpeg' },
    { name: 'shesaid', image: 'images/shesaid.jpeg' },
    { name: 'threatlevel', image: 'images/threatlevel.jpeg' },
    { name: 'threatlevel', image: 'images/threatlevel.jpeg' },
    { name: 'whyareyou', image: 'images/whyareyou.png' },
    { name: 'whyareyou', image: 'images/whyareyou.png' },
    { name: 'attention', image: 'images/youcouldnt.jpeg' },
    { name: 'attention', image: 'images/youcouldnt.jpeg' },
    { name: 'idiot', image: 'images/youreanidiot.jpeg' },
    { name: 'idiot', image: 'images/youreanidiot.jpeg' }
  ]
  // Randomize Function
  squareArray.sort(() => 0.5 - Math.random())

  let resultDisplay = document.querySelector('#results')
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
      alert(`You found a match!PERFECTENSCHLAG!`)
      squares[flipOne].setAttribute('src', 'images/blackback.jpeg')
      squares[flipTwo].setAttribute('src', 'images/blackback.jpeg')
      squareWin.push(squareChosen)
    } else {
      squares[flipOne].setAttribute('src', 'images/dundermifflin.jpeg')
      squares[flipTwo].setAttribute('src', 'images/dundermifflin.jpeg')
      alert(`EUGH You're WORSE than TOBY. Try again.`)
    }
    squareChosen = []
    squareChosenId = []
    resultDisplay.innerText = squareWin.length
    if (squareWin.length === squareArray.length / 2) {
      resultDisplay.innerText = `You didn't SCHRUTE this one!`
    }
  }

  // FLIP EVENT
  gameTimer()
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
// Game Timer Function
function gameTimer() {
  let sec = 120
  let timer = setInterval(() => {
    document.getElementById('time-remaining').innerHTML = sec
    sec--
    if (sec <= -1) {
      clearInterval(timer)
      document.querySelector('.memory-board').style.display = 'none'
      resultDisplay.innerText = `You didn't SCHRUTE this one!`
    }
  }, 2000)
}
