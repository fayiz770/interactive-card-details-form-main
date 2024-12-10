const cardName = document.getElementById('card-name')
const cardsElement = document.getElementById('cards-section')
let cardNumber = '0000 0000 0000 0000'
let cardHolderName = 'jane appleseed'
let month = '00'
let year = '00'
let cvc = '000'

document.addEventListener('keyup', (e) => {
    if(e.target.dataset.cardName){
        cardHolderName = e.target.value
    }else if(e.target.dataset.number){
        cardNumber = e.target.value
    }else if(e.target.dataset.month){
        month = e.target.value
    }else if(e.target.dataset.year){
        year = e.target.value
    }else if(e.target.dataset.cvc){
        cvc = e.target.value
    }
    render(cardNumber, cardHolderName, month, year, cvc)
})

function render(cardNumber, name, month, year, cvc) {
    cardsElement.innerHTML =`
        <div class="card-front" id="card-front">
            <img src="./images/card-logo.svg" alt="card logo" class="card-logo">
            <div class="card-number-display">${cardNumber}</div>
            <div class="card-details">
                <span class="card-name" id="card-name">${name}</span>
                <span class="card-date">${month}/${year}</span>
            </div>
        </div>
        <div class="card-back">
            <span class="card-cvc">${cvc}</span>
        </div>
    `
}

render(cardNumber, cardHolderName, month, year, cvc);