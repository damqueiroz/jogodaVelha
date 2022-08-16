let X = document.querySelector(".X");
let O = document.querySelector(".O");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// contador de jogadas

let player1 = 0;
let player2 = 0;

//add evento click aos boxes

for (let i = 0; i < boxes.length; i++) {

    //quando alguem clica na caixa

    boxes[i].addEventListener("click", function () {
        let el = checkEl(player1, player2);


        //verifica se ja tem X ou O
        if (this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);

            //computar jogadas

            if (player1 == player2) {
                player1++;

                if(secondPlayer == "ai-players"){
                    //funcao executar a jogada
                    computerPlay();
                    player2++;
                }

            } else {
                player2++;
            }

            //checa quem venceu
            checkWinCondition();
        }

    });

}

//evento para saber modo de jogo
for(let i = 0; i < buttons.length; i++){

    buttons[i].addEventListener("click", function () {

        secondPlayer = this.getAttribute("id");

        for(let j = 0; j < buttons.length; j++){
            buttons[j].style.display = "none";
        }

        setTimeout(function () {
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 500);
    });
}

//saber quem joga
function checkEl(player1, player2) {

    if (player1 == player2) {
        //X
        el = X;
    } else {
        //O
        el = O;
    }
    return el;
}

//saber quem ganhou

function checkWinCondition() {
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    //horizontais

    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == 'X' && b2Child == 'X' && b3Child == 'X') {
            //X
            declaraWinner('X');
        } else if(b1Child == 'O' && b2Child == 'O' && b3Child == 'O') {
            //O
            declaraWinner('O');

        }

    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == 'X' && b5Child == 'X' && b6Child == 'X') {
            //X
            declaraWinner('X');
        } else if(b4Child == 'O' && b5Child == 'O' && b6Child == 'O') {
            //O
            declaraWinner('O');

        }

    }

    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == 'X' && b8Child == 'X' && b9Child == 'X') {
            //X
            declaraWinner('X');
        } else if(b7Child == 'O' && b8Child == 'O' && b9Child == 'O') {
            //O
            declaraWinner('O');

        }

    }
    //verticais
    
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == 'X' && b4Child == 'X' && b7Child == 'X') {
            //X
            declaraWinner('X');
        } else if(b1Child == 'O' && b4Child == 'O' && b7Child == 'O') {
            //O
            declaraWinner('O');

        }

    }

    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == 'X' && b5Child == 'X' && b8Child == 'X') {
            //X
            declaraWinner('X');
        } else if(b2Child == 'O' && b5Child == 'O' && b8Child == 'O') {
            //O
            declaraWinner('O');

        }

    }

    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == 'X' && b6Child == 'X' && b9Child == 'X') {
            //X
            declaraWinner('X');
        } else if(b3Child == 'O' && b6Child == 'O' && b9Child == 'O') {
            //O
            declaraWinner('O');

        }

    }

    //Diagonais

    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == 'X' && b5Child == 'X' && b9Child == 'X') {
            //X
            declaraWinner('X');
        } else if(b1Child == 'O' && b5Child == 'O' && b9Child == 'O') {
            //O'
            declaraWinner('O');

        }

    }

    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == 'X' && b5Child == 'X' && b7Child == 'X') {
            //X
            declaraWinner('X');
        } else if(b3Child == 'O' && b5Child == 'O' && b7Child == 'O') {
            //O
            declaraWinner('O');

        }

    }

    //deu velha
    let counter = 0;

    for (let i = 0; i < boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            counter++;
    }
}
if(counter == 9){
    console.log("Deu velha!");
    }
}

//Limpa o jogo, declara vencedor e atualiza placar

function declaraWinner(winner){

    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardY = document.querySelector("#scoreboard-2");
    let msg = "";

    if(winner == 'X'){
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O jogador 1 foi o vencedor!";
    }else if(winner == 'O'){
        scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
        msg = "O jogador 2 foi o vencedor!";
    } else {
        msg = "Deu velha!";
    }

    //exibe a mensagem

    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    //esconde message
    setTimeout(function(){
        messageContainer.classList.add("hide");
    }, 1000);

    //zera as jogas
    player1 = 0;
    player2 = 0;

    //remove X e O
    let boxToRemove = document.querySelectorAll(".box div");
    for (let i = 0; i < boxToRemove.length; i++) {
        boxToRemove[i].parentNode.removeChild(boxToRemove[i]);

    }

}

function computerPlay(){

    let cloneO = O.cloneNode(true);
    counter = 0;
    filled = 0;

    for(let i = 0; i < boxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * 5);

        //só preenche se estiver vazio o filho
        if(boxes[i].childNodes[0] == undefined){
            if(randomNumber <= 1){
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }

        //checagem de quantas foram preenchidas
        } else{
            filled++;
        }
    }
    if(counter == 0 && filled < 9){
        computerPlay();
    }
}