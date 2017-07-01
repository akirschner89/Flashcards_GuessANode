var newCloze = function (full, cloze) {
	this.fullText = full;
	this.cloze = cloze;
	this.partial = this.fullText.slice(this.cloze.length + 1);
}

newCloze.prototype.printInfo = function() {
  console.log("\nFull Sentence: " + this.fullText + "\nCloze Sentence: " + this.cloze + "\nPartial Sentence: " + this.partial + "\n-------------------------");
};


module.exports = newCloze;