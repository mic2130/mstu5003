// An array of biology words for 1st graders
var biologyWords = [
	"rose",
	"daisy",
	"chrloroplast",
	"leaf",
	"chlorophyll",
	"rhyzomes",
	"internodes",
	"water",
	"soil",
	"sun",
	"phytomorphology",
	"air"
];

var words = [
	"pop",
	"rose",
	"daisy",
	"chrloroplast",
	"leaf",
	"pencil",
	"chlorophyll",
	"rhyzomes",
	"internodes",
	"coffee",
	"water",
	"soil",
	"scarf",
	"sun",
	"phytomorphology",
	"air"
];

var bioWords = [];

function showBiologyWords(){
	for (var i = 1; i < words.length; i++ ){
		if (words[i] === biologyWords){
			bioWords.push(words[i]);
		}
	}
}

console.log(bioWords);

// Create a function that takes an array and returns an array of appropriate biology words for kids in 1st grade.
