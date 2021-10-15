
const cards = [
    { name : 'cheeseburger', img : 'images/cheeseburger.png' },
    { name : 'fries', img : 'images/fries.png' },
    { name : 'hotdog', img : 'images/hotdog.png' },
    { name : 'icecream', img : 'images/icecream.png' },
    { name : 'pizza', img : 'images/pizza.png' },
    { name : 'milkshake', img : 'images/milkshake.png' },
    { name : 'cheeseburger', img : 'images/cheeseburger.png' },
    { name : 'fries', img : 'images/fries.png' },
    { name : 'hotdog', img : 'images/hotdog.png' },
    { name : 'icecream', img : 'images/icecream.png' },
    { name : 'pizza', img : 'images/pizza.png' },
    { name : 'milkshake', img : 'images/milkshake.png'  }
] 
cards.sort(() => 0.5-Math.random())

const grid = document.querySelector('.grid')
let score = document.querySelector('#score')
let points = 0
function displayCards(){

    for(let i = 0; i<cards.length; i++){
        const images = document.createElement('img')
        images.setAttribute('src', 'images/blank.png')
        images.setAttribute('data-id', i)
        images.addEventListener('click', flipcards)
        grid.appendChild(images)
    }
}
displayCards()

let chosenCardId = []
let chosenCardsName = []
let cardsWon = []
const img = document.querySelectorAll('.grid img')

function flipcards(){
    let imageId = this.getAttribute('data-id')
    img[imageId].setAttribute('src', cards[imageId].img)
    chosenCardId.push(imageId)
    chosenCardsName.push(cards[imageId].name)
    console.log(chosenCardsName)
    console.log(chosenCardId)
    if (chosenCardsName.length && chosenCardId.length == 2){
        setTimeout(checkformatch,400)
    }
}
function checkformatch(){
    let cardOne = img[chosenCardId[0]] 
    let cardTwo = img[chosenCardId[1] ]
    if (chosenCardId[0] == chosenCardId[1]){
        cardOne.setAttribute('src', 'images/blank.png')
        cardTwo.setAttribute('src', 'images/blank.png')
        alert('Ah, you cant select the same card twice')
    }
    else if (chosenCardsName[0] == chosenCardsName[1]){
        cardOne.setAttribute('src','images/white.png' )
        cardTwo.setAttribute('src','images/white.png' )
        cardOne.removeEventListener('click', flipcards)
        cardTwo.removeEventListener('click', flipcards)
        alert('Ei you got a pair correct!!')
        points = points + 2
        score.innerHTML = points
    }
    else{
        cardOne.setAttribute('src', 'images/blank.png')
        cardTwo.setAttribute('src', 'images/blank.png')
        alert('lmao try again')
    }
    chosenCardId = []
    chosenCardsName = []
}