$(".image").hide()
var upper = 100;
var rand = randInt(upper);
var counter = 0;
var record = 5;
console.log(rand)

$("input").change(guessMyNumber)
function guessMyNumber(){
  var myInput = $("input").val()
myInput=myInput*1


  if (counter < 5) {
    counter++;
    var newCount = counter;
    if (myInput > upper) {
      window.alert( "Out of bounds! Please try a number between 0 and " + upper);
    } else if (myInput === rand) {
      upper++;
      rand = randInt(upper);
      if (counter < record) {
        record = counter;
        counter = 0;
        $(".image").fadeIn(5000)
        $(".image").fadeOut(5000)
        window.alert( 
          "You guessed my number! in " +  newCount +
          " times  NEW RECORD SET " +  record
        );
      

      }
      window.alert( "You guessed my number! in " + newCount + " times");
    } else if (myInput!=rand){

    window.alert( "Nope! That wasn't it!");
  } }else {
    upper--;
    rand = randInt(upper);
    return "game over";
  }
}

function randInt(n) {
  return Math.floor(Math.random() * (n + 1));
}
