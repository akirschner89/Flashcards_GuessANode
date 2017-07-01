var newBasic = require("./basicCard.js");
var newCloze = require("./clozeCard.js");
var inquirer = require("inquirer");

var cardDeck = [];
var cardCount = 0;
var deckSize = 0;


function newCardQuestion() {
    inquirer.prompt([{
        name: "cardtype",
        type: "list",
        message: "Would you like to create Basic or Cloze flashcards?",
        choices: ["Basic", "Cloze"]
    }, {
        name: "numCards",
        type: "input",
        message: "How many cards would you like in the deck?",
        validate: function(value) {
            if (isNaN(value) === false) {
                return true;
            }
            return false;
        }
    }]).then(function(answer) {

        if (answer.cardtype === "Basic") {
            deckSize = answer.numCards;
            deckOfBasic();
        } else {
            deckSize = answer.numCards;
            deckOfCloze();
        }
    });
};

function deckOfBasic() {
    if (cardCount < deckSize) {
        console.log("\nNew basic card" + "\n-------------------------");
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
        console.log("\nHere's your deck of basic cards!" + "\n-------------------------");
        for (var x = 0; x < cardDeck.length; x++) {
            cardDeck[x].printInfo();
        }
    }
}

function deckOfCloze() {
    if (cardCount < deckSize) {
        console.log("\nNew cloze card" + "\n-------------------------");

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
            if (cardinfo.full.indexOf(cardinfo.cloze)) {
                console.log("\nSorry, the cloze statement doesn't match the full sentence, please try again");
                deckOfCloze();
            } else {
                cardDeck.push(newCard);
                cardCount++;
                deckOfCloze();
            }
        });

    } else {
        console.log("\nHere's your deck of cloze cards!" + "\n-------------------------");
        for (var x = 0; x < cardDeck.length; x++) {
            cardDeck[x].printInfo();
        }
    }
}

newCardQuestion();
