// Main function
function shuffleSlides() {
  // Call active presentation object
  let p = SlidesApp.getActivePresentation()

  // Get all unique slide ids
  var slideIDs = p.getSlides().map(s => s.getObjectId())

  // Generate an array of random numbers between 1 and the total number of slides
  var randomNumbers = getRandomNumbers(slideIDs.length)
  
  // Move the slides
  for(i=0; i<=slideIDs.length-1; i++){
    // Logger.log(i+1 + ': Moving slide ' + slideIDs[i] + ' to index ' + randomNumbers[i])
    p.getSlideById(slideIDs[i]).move(randomNumbers[i])
  }
}


// This function generates the random numbers
// Code taken from: https://stackoverflow.com/a/2450976
function getRandomNumbers(max) {
  // Create array of numbers from 1 to max
  let array = Array.from({length: max}, (_, i) => i + 1)

  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


// Creates the custom menu item
// Only needs to run once
function createMenuItems(){
  let ui = SlidesApp.getUi()
    .createMenu('Scripts')
    .addItem('Shuffle Slides', 'shuffleSlides')
    .addToUi()
}
