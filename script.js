randomnumber=Math.floor(Math.random()*100+1)
console.log("random number:", randomnumber)

/*
function draw() {
  luckyNumber = document.getElementById("lucky-number")
  randomnumber = Math.random()
  luckyNumber.innerHTML = Math.floor(randomnumber*10+10+1)
  console.log("lucky-number: ",luckyNumber)
}
  */

function guess() {
  guessnumber=document.getElementById("guessnumber").value
//  console.log("guess number: ",guessnumber)
//  console.log("random number: ", randomnumber)
  result=document.getElementById("result")
  guessbutton=document.getElementById("guess")

  if (guessbutton.innerHTML=="New") {
    newgame()
  } else { 
    if (guessnumber>randomnumber) {
      result.innerHTML="Your number is too large!! Keep Trying"
    }
    else if (guessnumber<randomnumber) {
      result.innerHTML="You number is too small!! Keep Trying"
    }  else {
      result.innerHTML="Bingo!! You won"
      document.getElementById("guess").innerHTML="New"
    }
  }
}

function newgame() {
  randomnumber=Math.floor(Math.random()*100+1)
  document.getElementById("guess").innerHTML="Submit"
  document.getElementById("result").innerHTML="!"
  document.getElementById("guessnumber").value=""
  console.log("new random number: ", randomnumber)
}

/* function draw() {
	luckyNumber = document.getElementById("lucky-number");
  luckyNumber.innerHTML = Math.floor(Math.random() * 100 + 1);

} */