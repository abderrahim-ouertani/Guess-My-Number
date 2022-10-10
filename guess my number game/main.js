// var upper = 10;
// var rand = randInt(upper);
// var counter = 0;
// var record = 5;

// function guessMyNumber(n) {
//   if (counter < 5) {
//     counter++;
//     var newCount = counter;
//     if (n > upper) {
//       return "Out of bounds! Please try a number between 0 and " + upper;
//     } else if (n === rand) {
//       upper++;
//       rand = randInt(upper);
//       if (counter < record) {
//         record = counter;
//         counter = 0;
//         return (
//           "You guessed my number! in " +
//           newCount +
//           " times  NEW RECORD SET " +
//           record
//         );
//       }
//       return "You guessed my number! in " + newCount + " times";
//     }

//     return "Nope! That wasn't it!";
//   } else {
//     upper--;
//     rand = randInt(upper);
//     return "game over";
//   }
// }

// function randInt(n) {
//   return Math.floor(Math.random() * (n + 1));
// }