// select btn handler
function selectBtnHandler(){
    let count = 1
    document.getElementById('player_card').addEventListener('click', (e) => {
        const playerList = document.getElementById('selected_player')
        if(e.target.tagName === "BUTTON" && count <=5){
            e.target.disabled = true
            e.target.style.backgroundColor = '#7C7C7C'
            const playerName = e.target.previousElementSibling.innerText;
            playerList.innerHTML += `<li>${count} ${playerName}</li>`
            count++
        }
    })
}

// get a value of a single input field
function getInputFieldValue(id){
    const inputValue = document.getElementById(id)
    if(isNaN(parseInt(inputValue.value))){
        window.alert('Please enter a valid number to the field')
    }else
        return parseInt(inputValue.value)
}

// get the size of selected player
function getSelectedPlayerSize(){
    const selectedPlayer = document.querySelector('#selected_player')
    return selectedPlayer.childElementCount
}

// player expenses btn handler
function playerExpensesBtnHandler(){
    document.getElementById('player_expense_btn').addEventListener('click', (e) => {
        const perPlayerExpense = getInputFieldValue('per_player')
        const size = getSelectedPlayerSize()
        document.getElementById('player_expenses').innerText = perPlayerExpense * size
    })
}


// calculate total btn handler