const elInput = document.getElementById('input')
const elBtn = document.getElementById('btn')
const elResult = document.getElementById('result')

elBtn.addEventListener('click', function() {    
    let inputValue = elInput.value 

    if (inputValue == 15000) {
        elResult.textContent = 'Sizning pulingiz oshga yetadi'
    } else if (inputValue == 3000){
        elResult.textContent == 'Sizning pulingiz somsaga yetadi'
    } else if (inputValue == 2000){
        elResult.textContent == 'Sizning pulingiz gummaga yetadi'
    }
})