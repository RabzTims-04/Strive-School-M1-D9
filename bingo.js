
// function randomUniqueNum(range, outputCount) {

//     let arr = []
//     for (let i = 1; i <= range; i++) {
//       arr.push(i)
//     }
  
//     let result = [];
  
//     for (let i = 1; i <= outputCount; i++) {
//       const random = Math.floor(Math.random() * (range - i));
//       result.push(arr[random]);
//       arr[random] = arr[range - i];
//     }
  
//     return result;
//   }

  const fillArray = function () {
    const arr = [];
    for (let i = 0; i < 76; i++) {
      arr.push(i + 1);
    }
    return arr;
  };

  //this randon number is going to 

  const randomNumber = function(range) {

      // let randomArray = []
      let randomized = Math.ceil(Math.random() * range.length);
      let random = range.splice(randomized, 1)[0]
      return random
  }

  const createRandom = function(range){
    let randomNumber = randomNumber(range)
    let randomInputField = document.getElementById('random')
    randomInputField.value = randomNumber
    //let randomized = randomUniqueNum(76, 76)
    // let randomInputFieldValue = randomInputField.innerText
    let bingoCellNumber = document.getElementsByTagName('h3')

    // if(!randomArray.includes(randomized)){
    //   randomArray.push(randomized)
    
      for(let i=0; i<76; i++){           
          if(parseInt(bingoCellNumber[i].innerText) === randomNumber){
            bingoCellNumber[i].classList.add('selected') 
      }         
    }
    console.log(randomized);
}
// else{
//   randomInputField.value =  randomNumber()
// }
  
      

const userBoard = function(){

  let randomArray = []
    let count = 0
    let randomNumbers = Math.ceil(Math.random()*76)
    let bingoCard = document.getElementById('bingo')
    for(let i=0; i<23; i++){
        randomArray[i] = randomNumbers
        count = randomArray[i]
        // let count = randomNumbers + i
        let board = document.getElementById('newUserBoard')
        board.classList.add('board')
        let boardCells = document.createElement('h4')

        for(let j=0; j<randomArray.length; j++){                   
          boardCells.innerText = count
            board.appendChild(boardCells)
            // bingoCard.appendChild(cell)
        }

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
        const range = fillArray()

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
        
    
