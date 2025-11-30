let btns = document.querySelectorAll(".btn");
let reset_btn = document.querySelector("#reset");
let newgame = document.querySelector("#newbtn");
let msg = document.querySelector("#msg");
let win = document.querySelector(".winner");

let turnO = true;

let winning_patter = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let count=0;
btns.forEach((play) => {
    
    play.addEventListener("click", () => {
        // console.log("box was clicked");
    count++;
        if (turnO) { // turn of first player whic has o value
            play.innerText = "O";
            play.style.color = "#ffc54a";
            turnO = false; //now the turn of second player which has x value
            // console.log(count);
        } else {
            play.innerText = "X";
            play.style.color = "#27e3ff";
            turnO = true;
        }
        play.disabled = true;
        winner();
    })

});


let disablebtns = () => {
    for (let box of btns) {
        box.disabled = true;

    };
};

let enablebtns = () => {
    for (let box of btns) {
        box.disabled = false;
        box.innerText = "";
    };
};
let showinner = (winning) => {
    msg.innerHTML = `<span id="show">congratulations, winner is ${winning}</span>`;
    // msg.style.color="yellow";
    win.classList.remove("hide");
    disablebtns();
};

let winner = () => {
    let iswinner=false;
    for (let check of winning_patter) {
        // console.log(check[0], check[1], check[2])
        // console.log(btns[check[0]].innerText, btns[check[1]].innerText,btns[check[2]].innerText);
        let pos1 = btns[check[0]].innerText;
        let pos2 = btns[check[1]].innerText;
        let pos3 = btns[check[2]].innerText;
        // console.log(pos1,pos2,pos3);

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                // console.log("Winner",pos1);
                showinner(pos1);
            }

        }


    }
    if(!iswinner && count===9){
    msg.innerHTML='<span id="draw">Game is draw, try again</span>';
    win.classList.remove("hide");
    disablebtns();
}

}

let resetgame = () => {
    turnO = true;
    enablebtns();
    count=0;
    win.classList.add("hide");
}


reset_btn.addEventListener("click", resetgame);
newgame.addEventListener("click", resetgame);

