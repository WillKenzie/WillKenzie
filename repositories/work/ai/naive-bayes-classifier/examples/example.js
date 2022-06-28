const Classifier = require('../index.js');
const classifier = new Classifier(require("./model.json"));
classifier.train();


console.log(classifier.classify('Hello')); // "0"
console.log(classifier.classify('Cum in me')); // "3"
