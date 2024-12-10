const names = document.getElementById('name')
const nameWarning = document.getElementById('name-warning')
const cardNumberElement = document.getElementById('card-number')
const cardNumberWarning = document.getElementById('card-number-warning')
const monthElement = document.getElementById('month')
const monthWarning = document.getElementById('month-warning')
const yearElement = document.getElementById('year')
const yearWarning = document.getElementById('year-warning')
const cvcElement = document.getElementById('cvc')
const cvcWarning = document.getElementById('cvc-warning')
const warnings = document.getElementsByClassName('warning')

names.addEventListener('input', (e) => {
    names.value = names.value.replace(/\d/g, '')
})

document.addEventListener('keypress', (e) => {
    for(let warning of warnings){
        warning.style.display = 'none'
    }
    if(e.target.dataset){
        if(e.target.dataset.cardName){
            if(e.target.value.length > 20){
                nameWarning.style.display = 'block'
            }
        }else if(e.target.dataset.number){
            if(e.target.value.length > 15){
                cardNumberElement.value = cardNumberElement.value.replace(/\d/g, '')
                cardNumberWarning.style.display = 'block'
            }
        }else if(e.target.dataset.month){
            if(e.target.value > 12 && e.target.value <= 0){
                monthWarning.style.display = 'block'
            }else if(e.target.value.length > 2){
                monthElement.value = monthElement.value.replace(/\d/g, '')
            }
        }else if(e.target.dataset.year){
            if(e.target.value.length > 4){
                yearElement.value = yearElement.value.replace(/\d/g, '')
                yearWarning.style.display = 'block'
            }
        }else if(e.target.dataset.cvc){
            if(e.target.value.length > 4){
                cvcElement.value = cvcElement.value.replace(/\d/g, '')
                cvcWarning.style.display = 'block'
            }
        }

    }
})

