randomnumber=Math.floor(Math.random()*100+1)
console.log("random number:", randomnumber)
chance=6
score=0


function guess() {
  guessnumber=document.getElementById("guessnumber").value
//  console.log("guess number: ",guessnumber)
//  console.log("random number: ", randomnumber)
  result=document.getElementById("result")
  guessbutton=document.getElementById("guess")
  chance_id=document.getElementById("chance")

  if (guessbutton.innerHTML=="New") {
    newgame()
  } else { 
    if (guessnumber>randomnumber) {
      result.innerHTML="Your number is too large!! Keep Trying"
      chance--
    }
    else if (guessnumber<randomnumber) {
      result.innerHTML="You number is too small!! Keep Trying"
      chance--
    }  else if (guessnumber==randomnumber) {
      result.innerHTML="Bingo!! You won"
      document.getElementById("guess").innerHTML="New"
      score+=10
      document.getElementById("score").innerHTML="Score: "+score
    } 
  }

  if (chance>0) {
    chance_id.innerHTML="Chances: "+chance
  } 
  else {
    result.innerHTML="Sorry!! You Lost"
    document.getElementById("guess").innerHTML="New"
    chance_id.innerHTML="Chances: "+chance
  }
}

function newgame() {
  randomnumber=Math.floor(Math.random()*100+1)
  document.getElementById("guess").innerHTML="Submit"
  document.getElementById("result").innerHTML="!"
  document.getElementById("guessnumber").value=""
  chance=6
  chance_id.innerHTML="Chances: 6"
  console.log("new random number: ", randomnumber)
}
