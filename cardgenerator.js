var newBasic = require("./basicCard.js");
var newCloze = require("./clozeCard.js");
var inquirer = require("inquirer");

var cardDeck = [];
var cardCount = 0;


//inquirer.prompt if you want to create basic or cloze
function newCardQuestion() {
inquirer.prompt({
        name: "cardtype",
        type: "list",
        message: "Would you like to create Basic or Cloze flashcards?",
        choices: ["Basic", "Cloze"]
    }).then(function(answer) {

            //.then if .answer === basic
            if (answer.cardtype === "Basic") {
                deckOfBasic();
            }
            //.then else create new cloze
            else {
                deckOfCloze();
            }
    });
};
            //function for a deck of basic cards
            function deckOfBasic() {
                //inquirer for front & back values up to five times
                if (cardCount < 3) {
                    console.log("\nNew basic card"  + "\n-------------------------");
                    // console.log("This many cards in the deck: " + cardCount);

                    inquirer.prompt([{
                            name: "question",
                            type: "input",
                            message: "What is the question for the front of the card?"
                        }, {
                            name: "answer",
                            type: "input",
                            message: "What is the answer for the back of the card?"
                        }]).then(function(cardinfo) {
                        	var newCard = new newBasic(cardinfo.question, cardinfo.answer);
                        	cardDeck.push(newCard);
                        	cardCount++;
                        	deckOfBasic();
                        });

                } else {
                	//print all the card front & back info
                	console.log("\nHere's your deck of basic cards!" + "\n-------------------------");
                	for (var x = 0; x < cardDeck.length; x++) {
                		cardDeck[x].printInfo();
                	}
                	// console.log("-------------------------");
        
                    //function reviewDeck()???
                }
            }

            //function for a deck of cloze cards
            function deckOfCloze() {
            //inquirer for full & cloze values up to five times
            if (cardCount < 3) {
                    console.log("\nNew cloze card"  + "\n-------------------------");
                    // console.log("This many cards in the deck: " + cardCount);

                    inquirer.prompt([{
                            name: "full",
                            type: "input",
                            message: "What is the complete sentence for the card?"
                        }, {
                            name: "cloze",
                            type: "input",
                            message: "What is the cloze statement at the beginning of the sentence??"
                        }]).then(function(cardinfo) {
                        	var newCard = new newCloze(cardinfo.full, cardinfo.cloze);
                        	cardDeck.push(newCard);
                        	cardCount++;
                        	deckOfCloze();
                        });

                } else {
                	//print all the card front & back info
                	console.log("\nHere's your deck of cloze cards!" + "\n-------------------------");
                	for (var x = 0; x < cardDeck.length; x++) {
                		cardDeck[x].printInfo();
                	}
                	// console.log("-------------------------");
        
                    //function reviewDeck()???
                }
            //print all the card full, cloze, partial values
            //function reviewDeck()???
        }

//to start the process
newCardQuestion();


