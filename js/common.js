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


