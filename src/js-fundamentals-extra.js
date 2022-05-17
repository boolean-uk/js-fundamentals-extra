// SecondsInHours
//
// Create a function that takes a number of hours and returns the number of
// seconds in those hours.
//
// Remember to update the module.exports definition at the bottom of the file
// with a reference to your function.
//

const strings = require("../../js-fundamentals/src/data-types/strings");

// TODO: write code below
function secondsInHours(hours) {
  let secondsInHour = 60 * 60;
  return hours * secondsInHour;
}

// MilesTravelled
//
// Create a function that takes a number representing speed in miles per hour,
// a duration in minutes, and returns the distance travelled in miles rounded
// *up* to the nearest whole mile. You can use the Math.ceil function to
// perform the rounding. You can assume only whole numbers will be provided
// to the function.
//
// Remember to update the module.exports definition at the bottom of the file
// with a reference to your function.
//
// TODO: write code below
function MilesTravelled(speed, minutes) {
  let hours = minutes / 60;

  console.log("Speed: ", speed, "Hours: ", hours, "MH", speed * hours);
  return Math.ceil(speed * hours); //ceil up floor down
}

// KilometersToMiles
//
// Create a function that takes a number of kilometers and converts it to miles.
// For this task assume there are exactly 1.6 kilometers in a mile. The returned
// mile distance should be rounded to the nearest mile. You can  use the Math.round
// function to do this.
//
// Remember to update the module.exports definition at the bottom of the file
// with a reference to your function.
//
// TODO: write code below
function KilometersToMiles(kilometers) {
  return Math.round(kilometers / 1.6);
}

// MakeSentence
//
// Create a function that takes a string and returns the same string with the
// first letter capitalized and a full stop added on to the end. If the string
// already ends with a full stop, question mark (?) or an exclamation mark(!)
// then a full stop should not be added.
//
// You may need to the use `String.substring` method.
//
// Remember to update the module.exports definition at the bottom of the file
// with a reference to your function.
//
// TODO: write code below
function MakeSentence(str) {
  let first = str.substring(0, 1).toUpperCase();
  let newfirst = first + str.substring(1, 1);
  let last = str.substring(str.length - 1);
  //substring lenght end-start=between
  if (last == "." || last == "?" || last == "!") {
    str = newfirst + str.substring(1, str.length);
  } else {
    str = newfirst + str.substring(1, str.length) + ".";
  }

  return str;
}

// FileExtension
//
// Create a function that takes a filename as a string and returns the file extension
// - i.e. `image.png` should return `png`. If the file has no extension then an empty
// string should be returned. You may need to the use `String.substring` method and
// the `String.lastIndexOf` method.
//
// Remember to update the module.exports definition at the bottom of the file
// with a reference to your function.
//
// TODO: write code below
function FileExtension(filename) {
  let indexof = filename.lastIndexOf(".");
  console.log("indexof" + indexof);
  let ext = "";
  if (indexof > -1) {
    ext = filename.substr(indexof + 1, filename.length);
  }

  return ext;
}
// Range
//
// Create a function that takes an array of numbers and returns the difference
// between the highest and lowest numbers in the array. You can assume the array
// will always contain at least 1 number (it will never be empty)
//
// Remember to update the module.exports definition at the bottom of the file
// with a reference to your function.
//
// TODO: write code below
function Range(numbers) {
  let max = numbers[0];
  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  let diff = max - min;
  return diff;
}

// CheckTransactions
//
// Create a function that checks if a list of banking transactions is valid for
// a given account.
//
// The function should accept 3 arguments. The first is an array containing a
// list of transactions to apply to the account balance. Positive numbers are
// deposits and negative numbers are withdrawals. The second argument is the
// account starting balance and the third is the account overdraft. The function
// should return false if applying the list of transactions causes the account
// balance to go below the overdraft value at any point.
//
// Remember to update the module.exports definition at the bottom of the file
// with a reference to your function.
//
// TODO: write code below
function CheckTransactions(opt, balance, overdraft) {
  //Transactions [10, 5, 10] applied to 0 starting balance returns true",
  let status;

  let total = balance + overdraft;

  for (var i = 0; i < opt.length; i++) {
    total = opt[i] + total;
    status = true;
    if (total < 0) {
      status = false;
      break;
    }
  }
  return status;
}

// FilmsInGenre
//
// Create a function that takes an array of film objects, a film genre, and returns
// an array of film names that match the supplied genre. Each film object contains a
// `name` key that contains the film name and a 'genre' key that contains an array
// of strings describing what genres the film belongs to. See the spec file for
// example data.
//
// Remember to update the module.exports definition at the bottom of the file
// with a reference to your function.
//
// TODO: write code below
function FilmsInGenre(films,keyword){
let singleFilm=[];
let keywordFilms=[];
for(var i=0;i<films.length;i++){
for(var j=0;j<films[i].genres.length;j++){
  singleFilm = films[i].genres[j];
  if(singleFilm==keyword){
      keywordFilms.push(films[i].name);
  }
  console.log(singleFilm,keywordFilms);
}
}
return keywordFilms;

}

// TODO: change undefined to be the name of the functions you defined
module.exports = {
  //SecondsInHours
  a: secondsInHours,

  //MilesTravelled,
  b: MilesTravelled,

  //KilometersToMiles,
  c: KilometersToMiles,

  //MakeSentence
  d: MakeSentence,

  //FileExtension
  e: FileExtension,

  //Range
  f: Range,

  //CheckTransactions
  g: CheckTransactions,

  //FilmsInGenre
  h: FilmsInGenre,
};
