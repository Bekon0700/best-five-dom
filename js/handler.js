// select btn handler
function selectBtnHandler(){
    let count = 1
    document.getElementById('player_card').addEventListener('click', (e) => {
        const playerList = document.getElementById('selected_player')
        if(e.target.tagName === "BUTTON" && count <=5){
            e.target.disabled = true
            e.target.style.backgroundColor = '#7C7C7C'

            const playerName = e.target.previousElementSibling.innerText;
            
            const listItem = document.createElement('li')
            listItem.innerText = `${count} ${playerName}`
            playerList.appendChild(listItem)
            
            count++
        }else if(count > 5){
            window.alert('You cannot select more than 5 players')
        }
    })
}

// player expenses btn handler
function playerExpensesBtnHandler(){
    document.getElementById('player_expense_btn').addEventListener('click', (e) => {
        const perPlayerExpense = getInputFieldValue('per_player')
        const perPlayerExpenseInt = parseInt(perPlayerExpense)
        const size = getSelectedPlayerSize()
        if(size === 0){
            window.alert('Please select some player to build your team.')
        }if(!isPositiveExpense(perPlayerExpenseInt)){
            window.alert('Please enter a number greater than 0 as player expenses')
        }else{
            const playerExpense = perPlayerExpenseInt * size
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

        if(managerBill === false || coachBill === false){
            document.getElementById('total').innerText = 0
        }if(!isPositiveExpense(managerBill) || !isPositiveExpense(coachBill)){
            window.alert('Please enter a number greater than 0 as expenses')
        }
        else{
            document.getElementById('total').innerText = managerBill + coachBill + parseInt(playerExpenses)
        }
    })
}