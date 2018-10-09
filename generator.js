// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const quotes = require("./simpsonQuotes")
const ralphQuotes = require("./ralphQuotes")
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the sentences property
function GenerateNewText() {
  // Add property to the object
  this.sentences = ["Simpson, Homer Simpson. He's the greatest guy in history. From the town of Springfield, he's about to hit a chestnut tree. AAH!", 
  ...quotes,
  ...ralphQuotes];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
  if(randomSentence === undefined) {
    console.log(undefined, "path")
    console.log(randomSentence, "variable")
    console.log(Math.floor(Math.random() * this.sentences.length), "math part/index")
    console.log(this.sentences[Math.floor(Math.random() * this.sentences.length)], "check if undefined")
  }
	return randomSentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 250;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    var sentance = this.getRandomSentence()
    if (sentance !== undefined) {
      if (firstSentence) {
        paragraph = paragraph.concat(this.getRandomSentence());
        firstSentence = false;
      } else {
        paragraph = paragraph.concat(" " + this.getRandomSentence());
      }
    }
  }
  return paragraph;
}

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  return paragraphHTML;
}

module.exports = loremIpsum;