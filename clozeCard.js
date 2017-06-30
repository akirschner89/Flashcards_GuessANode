var newCloze = function (full, cloze) {
	this.fullText = full;
	this.cloze = cloze;
	this.partial = this.full - this.cloze;
	//if string cloze is an index of the string full
	//find the index number or value? of the full string where cloze is (starts at 0)
	//delete the cloze string value from the full string
	//else throw an error that it's not a cloze
	//restart???
}

newCloze.prototype.printInfo = function() {
  console.log("Partial Sentence: " + this.partial + "\nCloze Sentence: " + this.cloze
   + "\nFull Sentence: " + this.fullText + "\n-------------------------");
};


module.exports = newCloze;