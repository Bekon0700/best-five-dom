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

// get the value of a single input field
function getInputFieldValue(id){
    const inputValue = document.getElementById(id)
    if(isNaN(parseInt(inputValue.value))){
        window.alert('Please enter a valid number to above input field/fields')
        return 0
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
        if(size === 0){
            window.alert('Please select some player to build your team.')
        }else{
            const playerExpense = perPlayerExpense * size
            document.getElementById('player_expenses').innerText = playerExpense
        }
    })
}


// calculate total btn handler
function calculateTotalBtnHandler(){
    document.getElementById('total_calculate_btn').addEventListener('click', (e) => {
        const managerBill = getInputFieldValue('manager')
        const coachBill = getInputFieldValue('coach')
        const playerExpenses = document.getElementById('player_expenses').innerText
        if(managerBill || coachBill === 0){
            document.getElementById('total').innerText = 0
        }else{
            document.getElementById('total').innerText = managerBill + coachBill + parseInt(playerExpenses)
        }
    })
}