
const randomNumber = function() {


	let randomized = Math.ceil(Math.random() * 75);
    let randomInputField = document.getElementById('random')
    // let randomInputFieldValue = randomInputField.innerText
    randomInputField.value = randomized
    let bingoCellNumber = document.getElementsByTagName('h3')
    for(let i=0; i<bingoCellNumber.length; i++){        
        if(parseInt(bingoCellNumber[i].innerText) === randomized){
            bingoCellNumber[i].classList.add('selected')    }
}
}

window.onload = function(){
    let bingoCard = document.getElementById('bingo')
    for(let i=1; i<=76; i++){
        let cell = document.createElement('div')
        cell.classList.add('numbers')
        let numbers = document.createElement('h3')
        numbers.innerText = [i]
        cell.appendChild(numbers)
        bingoCard.appendChild(cell)

        }       
    }












// window.onload = function(){
//     let randomArray = []
//     let count = 0
//     // let randomNumbers = Math.ceil(Math.random()*76)
//     let bingoCard = document.getElementById('bingo')
//     for(let i=0; i<75; i++){
//         randomArray[i] = randomNumber()
//         count = randomArray[i]
//         // let count = randomNumbers + i
//         let cell = document.createElement('div')
//         cell.classList.add('numbers')
//         let numbers = document.createElement('h3')

//         for(let j=0; j<randomArray.length; j++){                   
//             numbers.innerText = count
//             cell.appendChild(numbers)
//             bingoCard.appendChild(cell)
//         }
        
        

        // for (var i = 0; i < 20; i++) {
        //     var count = 0;
        //     for (var j = 0; j < Math.floor(Math.random() * 20); j++) {
        //         count++;
        //     }
        //     console.log(count);
        
    
