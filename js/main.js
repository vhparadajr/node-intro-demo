//coin flip game
//user clicks heads or tails
//computer determines flip
//show the user if they won or lost in the dom

//event listener for heads
document.getElementById("Heads").onclick = flipHeads
//event listener for Tails
document.getElementById("Tails").onclick = flipTails


//function if user chose heads
function flipHeads(){
  //generate flip
  var flip = genRand() //.01 to .99
  //determine if user won
  if( flip < .5){
    document.getElementsByTagName('h1')[0].innerHTML ="You Won" //notice this says element(s) & that we linked to an empty field in the innerHTML
  }else{
    document.getElementsByTagName('h1')[0].innerHTML ="You Lose"
  }
}
//function if user chose tails
function flipTails(){
  //generate flip
  var flip = genRand() //.01 to .99
  //determine if user won
  if( flip < .5){
    document.getElementsByTagName('h1')[0].innerHTML ="You Won" //notice this says element(s) & that we linked to an empty field in the innerHTML
  }else{
    document.getElementsByTagName('h1')[0].innerHTML ="You Lose"
  }
}

function genRand(){
  return Math.random()
}
