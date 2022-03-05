'use strict'

let BGcolor = "gray" ;
const NewGameButton = document.querySelector('.NewGame'); 
const easyMode = document.querySelector('.EasyMode');
const hardMode = document.querySelector('.HardMode');
const Answer = document.querySelector('.answer');
const Score = document.querySelector('.score');
const header = document.querySelector('.ColorsInRGB') ;

let box = [];
 box[0] = document.querySelector('.Box1');
 box[1] = document.querySelector('.Box2');
 box[2] = document.querySelector('.Box3');
 box[3] = document.querySelector('.Box4');
 box[4] = document.querySelector('.Box5');
 box[5] = document.querySelector('.Box6');

let hasWin = false ; 
 let colorOfBox = [];  // array of obj {x,y,z} 
 let answerIndex ; 
 let Mode = 3 ; // for easy =3 ,, for hard = 6 
 changeState();

 function setColors (end){
   let s = new Set();
   s.add("gray");
   for(let i= 0;i<end;i++){
       let obj = {
         x : Math.floor(Math.random()*255) ,
         y : Math.floor(Math.random()*255) ,
         z : Math.floor(Math.random()*255) 
       }

       while(s.has(obj)){
        obj.x = Math.floor(Math.random()*255) ,
        obj.y = Math.floor(Math.random()*255) ,
        obj.z = Math.floor(Math.random()*255) 
       }


       colorOfBox.push(obj) ; 
       let bgColor = "rgb(" + obj.x + "," + obj.y + "," + obj.z + ")" ;
       s.add(bgColor) ;
       box[i].style.backgroundColor = bgColor ;
   }
 }

  function changeState(){
    header.style.backgroundColor = "yellow" ;
    NewGameButton.innerHTML = "New Colors" ;
    Score.innerHTML="" ;
    hasWin = false ;
    colorOfBox= [];
    setColors(Mode) ;
    answerIndex = Math.floor(Math.random()*Mode) ;
    Answer.innerHTML = `rgb(${colorOfBox[answerIndex].x},${colorOfBox[answerIndex].y},${colorOfBox[answerIndex].z})`;
     
  }
  for(let i=0;i<6;i++){
    box[i].addEventListener('click',function(e){
      e.preventDefault() ;
     if(!hasWin){
        if(answerIndex===i){
          for(let j=0;j<Mode;j++){
            box[j].style.backgroundColor = box[i].style.backgroundColor ;
          }
          header.style.backgroundColor =  box[i].style.backgroundColor ;
          NewGameButton.innerHTML = "Play Again!";
          Score.innerHTML = "Correct";
          hasWin = true ;
        }else{
          box[i].style.backgroundColor = BGcolor ;
          Score.innerHTML = "Try Again" ;
        }
     }
    })
  }

  NewGameButton.addEventListener('click',function(e){
    e.preventDefault() ;
    changeState();
  });

  easyMode.addEventListener('click',function(e){
    e.preventDefault() ;
    Mode = 3 ;
    for(let j=3;j<6;j++){
       box[j].style.backgroundColor = "gray" ;
    }
    changeState();
  });


  hardMode.addEventListener('click',function(e){
    e.preventDefault() ;
    Mode = 6 ;
  
    changeState();
  });
   
   
  

