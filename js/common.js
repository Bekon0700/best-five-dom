// get the value of a single input field
function getInputFieldValue(id){
    const inputValue = document.getElementById(id)
    const inputValueInt = parseInt(inputValue.value)
    if(isNaN(inputValueInt)){
        window.alert('Please enter a valid number to above input field/fields')
        return false
    }else
        return inputValueInt
}

// get the size of selected player
function getSelectedPlayerSize(){
    const selectedPlayer = document.querySelector('#selected_player')
    return selectedPlayer.childElementCount
}

// Check if any input field valus is less than or equal 0
function isPositiveExpense(value){
    return value > 0 ? true : false
}