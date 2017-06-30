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
                if (cardCount < 5) {
                    console.log("New basic card");

                    inquirer.prompt([{
                            name: "question",
                            type: "input",
                            message: "What is the question for the front of the card?"
                        }, {
                            name: "answer",
                            type: "input",
                            message: "What is the answer for the back of the card?"
                        }]).then(function(carddata) {
                        	var newCard = new newBasic(carddata.front, carddata.back);
                        	cardDeck.push(newCard);
                        	cardCount++;
                        });
                        newCardQuestion();
                } else {
                	//print all the card front & back info
                	console.log("Here is your deck of cards!" + "\n---------------");
                	for (var x = 0; x < cardDeck.length; x++) {
                		cardDeck[x].printInfo();
                	}
                	console.log("---------------");
        
                    //function reviewDeck()???
                }
            }
//to start the process
newCardQuestion();

            //function for a deck of cloze cards
            //inquirer for full & cloze values up to five times
            //print all the card full, cloze, partial values
            //function reviewDeck()???
