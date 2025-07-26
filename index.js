const maxlife = 2;

/////////////////////////////////////////////////////
let myscore =  document.querySelector("#scoreboard");
let count =0;
let livehearts= maxlife;
let scoreboard =document.querySelector("display_board")
/////////////////////////////////////////////////////////


const displayhearts =(livehearts)=>{

    


     if(livehearts ==0){
        document.getElementById('heart1').style.visibility='visible';
        document.getElementById('heart2').style.visibility='hidden';
        document.getElementById('heart3').style.visibility='hidden';
    }else if(livehearts==1){
        document.getElementById('heart1').style.visibility='visible';
        
        document.getElementById('heart2').style.visibility='visible';
        document.getElementById('heart3').style.visibility='hidden';
    }else if(livehearts==2){
        document.getElementById('heart1').style.visibility='visible';
        document.getElementById('heart2').style.visibility='visible';
        document.getElementById('heart3').style.visibility='visible';
    }

}

//////////////////////////////////////////////////////////
let updateimg =document.querySelector("#coverimg img")

const coverimg =(comp)=>{

    if(comp =="scissors"){
        updateimg.src= "scissors.png"
    }
    else if(comp == "rock"){
        updateimg.src ="rock.png"
    }
    else{
        updateimg.src = "paper.png"
    }

};
/////////////////////////////////////////////////////////

let hero= document.querySelector("#mode");
let mode ="dark";


hero.onclick =()=>{
    if(mode == "light"){
        mode = "dark";
        document.querySelector(".body").style.backgroundColor= "black";
        document.querySelector(".body").style.color= "white";
    }else{
        mode="light";
        document.querySelector(".body").style.backgroundColor = "white";
        document.querySelector(".body").style.color = "black";
    }
    console.log(mode,"is Activated");
};


///////////////////////////////////////////////////////////////////////////////////

const msg = document.querySelector("#text1");

////////////////////////////////////////////////////////////////////////////////////
const random = ()=>{

    const things= ["paper","scissors","rock"];

    let index =Math.floor(Math.random()*3);

    return things[index];

}

const draw=()=>{
    console.log("game is draw");
    msg.textContent="Game Draw! Play Again.";count++;
    
    msg.style.backgroundColor="darkslategray";
};


const playgame=  (userchoice)=>{

    /////////////////////////////////////////////

    displayhearts(livehearts);

    ///////////////////////////////////////////

    let tempscore = null;

    const comp = random();

    console.log(userchoice,"was clicked and",comp,"is computer choice");

    if(userchoice == comp){

        draw();
        
    }else if(userchoice == "rock"){
        tempscore = comp == "scissors" ?true:false;
    }else if(userchoice =="paper"){
        tempscore =  comp == "rock" ? true:false;
    }else{
        tempscore= comp=="paper" ?true:false;
    }

    if(tempscore != null){
    if(tempscore){
            console.log("you Win!");
            msg.textContent="YOU WIN!";

            if(livehearts <maxlife){
             livehearts++;
            }

            msg.style.backgroundColor="green";
            count++;count++;

        }else{
            console.log("You lose!");
            msg.textContent="YOU Lost!";
            msg.style.backgroundColor="red";
            livehearts--;
            if(livehearts == -1){

                scoreboard.textContent= `Your Final Score : ${count}`
        
        
       

    }
        }
    }
    //////////////////////////////////////////
    coverimg(comp);

    ///////////////////////////////////////////////
    console.log("your hearts is ",livehearts);
  scoreupdate(count,livehearts);
/////////////////////////////////////////////(
if(livehearts==-1){
    livehearts=maxlife;
    count=0;

}

displayhearts(livehearts);

///////////////////////////////////////////////

};

const scoreupdate=(count,livehearts)=>{

    if(livehearts==-1){
         myscore.textContent = `Your Final Score : ${count}`;

        
    }

    else if(count==0){
        myscore.style.backgroundColor="aquamarine";
        myscore.textContent = `Your score : ${count}`;

    }else{
        myscore.style.backgroundColor="blueviolet";
        myscore.textContent = `Your score : ${count}`;

    }
    
}

const choices =document.querySelectorAll(".choice");

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userchoice =choice.getAttribute("id");
        playgame(userchoice);

    // myscorecore.textContent =`Your score : ${count}`;




        
        
        


    });
});
///////////////////////////////////////////////////////////

