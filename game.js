let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset")
let msgcontainer=document.querySelector(".msgcontainer")
let msg=document.querySelector(".msg")
let newbtn=document.querySelector("#newbtn")

let turn=true
  
const winningpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
    if (turn){
        box.innerText="O";
        turn=false;
    }
    else{
        box.innerText="X";
        turn=true;
    }
    box.disabled=true;
    checkwinner()
 });
    
});

const checkwinner = () =>{
    for (let pattern of winningpatterns)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                 showWinner(pos1)
            }
        }
   }
}

const showWinner = (winner) =>{
    msg.innerText=`winner of the game is ${winner}`
    msgcontainer.classList.remove("hide")
    disableboxes()
}

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled=true
    }
}

const resetbutton = () =>{
    turn=true
    enableboxes()
    msgcontainer.classList.add("hide")
}
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=""
    }
}
newbtn.addEventListener("click",resetbutton)
resetbtn.addEventListener("click",resetbutton)

