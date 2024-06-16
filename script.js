const wordDisplay = document.querySelector(".word-display");
const keyboard= document.querySelector(".keyboard");
const answer= document.querySelector(".content b");
const gif= document.querySelector(".content img");

let currentword,wrongCount=0,correctword=0;
let maxcount=6;
const guessedText = document.querySelector(".guess-text b");
let wordlength;

const getRandomWord = () =>{
 const {word , hint } = wordList[Math.floor(Math.random() * wordList.length)];
 currentword =word;
 console.log(word);
 answer.innerText=word;
 wordlength = word.length;
 const Hint =document.querySelector(".hint");
Hint.innerText=hint;
wordDisplay.innerHTML = word.split('').map(() =>'<li class="letter"></li>').join("");
}

const img =document.querySelector(".myimg");

const initGame = (button,clickedLetter) => {
  if(currentword.includes(clickedLetter))
  {
    [...currentword].forEach((letter,index) => {
        if(letter ===clickedLetter){
            wordDisplay.querySelectorAll("li")[index].innerText= letter;
              wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
              correctword++;
        }
        console.log("correct word is",correctword);
        if(correctword===wordlength){
           gif.src="images and svg/victory.gif";
           document.querySelector(".game-modal").style.display="flex";
           document.querySelector(".game-modal h4").innerText="YOU WON👍";

        }
    })
  }
    else{
        wrongCount++;
        if(wrongCount>=6){
            document.querySelector(".game-modal").style.display="flex";
        }
        else
        img.src=`images and svg/hangman-${wrongCount}.svg`;
    }
    button.style.backgroundColor="#8286c9";
  guessedText.innerText= `${wrongCount } / ${maxcount}`;
}
// for buttons 

for(let i=97;i<=122;i++){
    const button= document.createElement("button");
    button.innerText=String.fromCharCode(i);
    keyboard.appendChild(button);
    button.addEventListener("click",e => initGame(e.target,String.fromCharCode(i)))
}
getRandomWord();
console.log(wordlength);
