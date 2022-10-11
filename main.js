$(".image").hide()
var upper = 10;
var rand = randInt(upper);
var counter = 0;
var record = 5;
console.log(rand)


$("input").change(guessMyNumber)
function guessMyNumber(){

    // here i will assign the value of the input to a variable
  var myInput = $("input").val()
  // then i will multiply it by 1 to convert it from string to a number so that i can work with it
myInput=myInput*1

// here is the first condition if the user gives a number higher than the upperbound an alert will pop out to him to tell him that he needs to give a number less than 10
  if (counter < 2) {
    // we will start counting from here we won't put counter in the end because we need the value and we don't want it
    counter++;
    var newCount = counter;
    if (myInput > upper) {
      window.alert( "Out of bounds! Please try a number between 0 and " + upper);
    } else if (myInput === rand) {
      upper++;
      rand = randInt(upper);
      console.log(rand)
      if (counter < record) {
        record = counter;
        counter = 0;
       $("audio")[1].play() 
        $(".image").fadeIn(2000)
        $(".image").fadeOut(2000)
        $("#photo").hide()

        $("#celebration").fadeIn(2000)
        $("#celebration").fadeOut(2000)
        

        window.alert( 
          "You guessed my number! in " +  newCount +
          " times  NEW RECORD SET " +  record
        );

     console.log(counter);
      }
      setTimeout(function(){
        $("#photo").fadeIn(2000)
      }, 4000)
      // i put counter =0 here to let the counter return to 0 even it's not a new record
      counter = 0;

      window.alert( "You guessed my number! in " + newCount + " times");
    } else if (myInput!=rand){

    window.alert( "Nope! That wasn't it!");
  } }else {
    upper--;
    rand = randInt(upper);
     window.alert("game over");

}}


function randInt(n) {
  return Math.floor(Math.random() * (n + 1));
}
