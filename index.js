// let gameOver = new Audio('resources/gameover.mp3')
let move = new Audio('resources/Move.mp3')
let win = new Audio('resources/win.mp3')
let excited = document.getElementsByClassName('excited')[0] 
let boxes = document.getElementsByClassName('box')
let isGameOver = false
let reset = document.getElementById('reset')


// function to change the turn
let turn = 'X';
let changeTurn = () =>{
    return turn ==="X"? "0" : "X"
}

// function to check winner
let checkWin = () => {
    // console.log('you win')
    let boxes = document.getElementsByClassName('boxInfo')
    let wins = [
      [0, 1, 2, 5, 5, 0],
      [3, 4, 5, 5, 15, 0],
      [6, 7, 8, 5, 25, 0],
      [0, 3, 6, -5, 15, 90],
      [1, 4, 7, 5, 15, 90],
      [2, 5, 8, 15, 15, 90],
      [0, 4, 8, 5, 15, 45],
      [2, 4, 6, 5, 15, -45],
    ];

    wins.forEach(e=>{
        if (
          boxes[e[0]].innerText === boxes[e[1]].innerText &&
          boxes[e[1]].innerText === boxes[e[2]].innerText &&
          boxes[e[0]].innerText !== ''
        ) {
          document.querySelector(".gameInfo").innerText =
            boxes[e[0]].innerText + " won";
          win.play();
          isGameOver = true;
          document
            .querySelector(".excited")
            .getElementsByTagName("img")[0].style.display = "block";
            document.querySelector('.line').style = `transform: translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg);`
            document.querySelector('.line').style.width = '20vw'
        } else {
            // document.querySelector(".gameInfo").innerText = 'its a draw'
        }
    })
}

// main Game logic
Array.from(boxes).forEach((element)=>{
    let boxInfo = element.querySelector('.boxInfo')
    element.addEventListener('click', ()=>{
        if(boxInfo.innerText===''){
            boxInfo.innerText = turn;
            turn = changeTurn()
            move.play()
            checkWin()
            if(!isGameOver){
                document.getElementsByClassName("gameInfo")[0].innerText =
                "Turn for " + turn;
            }
            
        }
    })
})

// add event listener for reset
reset.addEventListener('click', ()=>{
    let boxes = document.querySelectorAll('.boxInfo')
    Array.from(boxes).forEach(element =>{
        element.innerText = ''
        document.querySelector('.excited').getElementsByTagName('img')[0].style.display = 'block'
    })
    turn = 'X'
    isGameOver = 'false'
    document.getElementsByClassName("gameInfo")[0].innerText ="Turn for " + turn;
    document.querySelector(".excited").getElementsByTagName("img")[0].style.display = "none";
    document.querySelector(".line").style.width = "0vw";

})