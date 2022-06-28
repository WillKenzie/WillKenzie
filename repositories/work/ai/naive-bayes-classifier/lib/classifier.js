/* Modified by William Kenzie (c) 2022 */

class Classifier {
  constructor(model) {
    this.stemmer = require("./stemmers/porter");
    this.docs = [];
    this.lastAdded = 0;
    this.features = {};
    this.classFeatures = {};
    this.classTotals = {};
    this.totalExamples = 1;
    this.smoothing = 1;

    for (const label of Object.keys(model)) {
      this.addDocuments(model[label], label)
    }
  }
  addDocument = (doc, label) => {
    if (!this._size(doc)) {
      return;
    }

    if (this._isString(doc)) {
      doc = this.stemmer.tokenizeAndStem(doc);
    }

    var docObj = {
      label: label,
      value: doc
    };

    this.docs.push(docObj);

    // Add token (feature) to features map
    for (var i = 0; i < doc.length; i++) {
      this.features[doc[i]] = 1;
    }

  };
  addDocuments = (docs, label) => {
    for (const doc of docs) {
      this.addDocument(doc, label);
    }
  };
  docToFeatures = doc => {
    var features = [];

    if (this._isString(doc)) {
      doc = this.stemmer.tokenizeAndStem(doc);
    }

    for (var feature in this.features) {
      features.push(Number(!!~doc.indexOf(feature)));
    }

    return features;
  };
  classify = doc => {
    /* 
    Regexp from Stackoverflow user Caleb Miller 
    Remove emoji
    */
    doc.replaceAll(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2580-\u27BF]|\uD83E[\uDD10-\uDDFF]/g, "");

    /* Remove double spaces */
    doc.replaceAll("  ", " ")
    doc.replaceAll("  ", " ")

    /* Get classifications */
    var classifications = this.getClassifications(doc);
    if (!this._size(classifications)) {
      throw "Not trained";
    }
    return classifications[0].label;
  };
  train = () => {
    var totalDocs = this.docs.length;
    for (var i = this.lastAdded; i < totalDocs; i++) {
      var features = this.docToFeatures(this.docs[i].value);
      this.addExample(features, this.docs[i].label);
      this.lastAdded++;
    }
  };
  addExample = (docFeatures, label) => {
    if (!this.classFeatures[label]) {
      this.classFeatures[label] = {};
      this.classTotals[label] = 1;
    }

    this.totalExamples++;

    if (this._isArray(docFeatures)) {
      var i = docFeatures.length;
      this.classTotals[label]++;

      while (i--) {
        if (docFeatures[i]) {
          if (this.classFeatures[label][i]) {
            this.classFeatures[label][i]++;
          } else {
            this.classFeatures[label][i] = 1 + this.smoothing;
          }
        }
      }
    } else {
      for (var key in docFeatures) {
        value = docFeatures[key];

        if (this.classFeatures[label][value]) {
          this.classFeatures[label][value]++;
        } else {
          this.classFeatures[label][value] = 1 + this.smoothing;
        }
      }
    }
  };

  probabilityOfClass = (docFeatures, label) => {
    var count = 0;
    var prob = 0;

    if (this._isArray(docFeatures)) {
      var i = docFeatures.length;

      // Iterate though each feature in document.
      while (i--) {
        // Proceed if feature collection.
        if (docFeatures[i]) {
          /*
           * The number of occurances of the document feature in class.
           */
          count = this.classFeatures[label][i] || this.smoothing;
          prob += Math.log(count / this.classTotals[label]);
        }
      }
    } else {
      for (var key in docFeatures) {
        count = this.classFeatures[label][docFeatures[key]] || this.smoothing;
        prob += Math.log(count / this.classTotals[label]);
      }
    }
    var featureRatio = (this.classTotals[label] / this.totalExamples);
    prob = featureRatio * Math.exp(prob);

    return prob;
  };
  getClassifications = doc => {
    var classifier = this;
    var labels = [];

    for (var className in this.classFeatures) {
      labels.push({
        label: className,
        value: classifier.probabilityOfClass(this.docToFeatures(doc), className)
      });
    }

    return labels.sort((x, y) => {
      return y.value - x.value;
    });
  };

  restore = classifier => {
    this.docs = classifier.docs;
    this.lastAdded = classifier.lastAdded;
    this.features = classifier.features;
    this.classFeatures = classifier.classFeatures;
    this.classTotals = classifier.classTotals;
    this.totalExamples = classifier.totalExamples;
    this.smoothing = classifier.smoothing;
    this.stemmer = stemmer;
    return this;
  };

  _isString = s => {
    return typeof s === "string" || s instanceof String;
  };

  _isArray = s => {
    return Array.isArray(s);
  };

  _isObject = s => {
    return s instanceof Object;
  };

  _size = s => {
    if (this._isArray(s) || this._isString(s) || this._isObject(s)) {
      return s.length;
    }
    return 0;
  };
}

module.exports = Classifier;
