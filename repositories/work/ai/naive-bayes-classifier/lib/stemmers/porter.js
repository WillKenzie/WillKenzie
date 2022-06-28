/*
 * @credit: https://github.com/NaturalNode/natural/blob/master/lib/natural/stemmers/porter_stemmer.js
 */

/*
  Copyright (c) 2011, Chris Umbel
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/

/* Modified by William Kenzie (c) 2022 */

// Denote groups of consecutive consonants with a C and consecutive vowels
// with a V.
const categorizeGroups = token => {
  return token.replace(/[^aeiou]+/g, 'C').replace(/[aeiouy]+/g, 'V');
}

// Denote single consonants with a C and single vowels with a V
const categorizeChars = token => {
  return token.replace(/[^aeiou]/g, 'C').replace(/[aeiouy]/g, 'V');
}

// Calculate the "measure" M of a word. M is the count of VC sequences dropping
// an initial C if it exists and a trailing V if it exists.
const measure = token => {
  if (!token)
    return -1;

  return categorizeGroups(token).replace(/^C/, '').replace(/V$/, '').length / 2;
}

// Determine if a token end with a double consonant i.e. happ
const endsWithDoublCons = token => {
  return token.match(/([^aeiou])\1$/);
}

// Replace a pattern in a word. if a replacement occurs an optional callback
// can be called to post-process the result. if no match is made NULL is
// returned.
const attemptReplace = (token, pattern, replacement, callback) => {
  var result = null;

  if ((typeof pattern == 'string') && token.substr(0 - pattern.length) == pattern)
    result = token.replace(new RegExp(pattern + '$'), replacement);
  else if ((pattern instanceof RegExp) && token.match(pattern))
    result = token.replace(pattern, replacement);

  if (result && callback)
    return callback(result);
  else
    return result;
}

// Attempt to replace a list of patterns/replacements on a token for a minimum
// measure M.
const attemptReplacePatterns = (token, replacements, measureThreshold) => {
  var replacement = null;

  for (var i = 0; i < replacements.length; i++) {
    if (!measureThreshold || measure(attemptReplace(token, replacements[i][0], '')) > measureThreshold)
      replacement = attemptReplace(token, replacements[i][0], replacements[i][1]);

    if (replacement)
      break;
  }

  return replacement;
}

// Replace a list of patterns/replacements on a word. if no match is made return
// the original token.
const replacePatterns = (token, replacements, measureThreshold) => {
  var result = attemptReplacePatterns(token, replacements, measureThreshold);
  token = !result ? token : result;
  return token;
}

// Step 1a as defined for the porter stemmer algorithm.
const step1a = token => {
  if (token.match(/(ss|i)es$/))
    return token.replace(/(ss|i)es$/, '$1');

  if (token.substr(-1) == 's' && token.substr(-2, 1) != 's' && token.length > 3)
    return token.replace(/s?$/, '');

  return token;
}

// Step 1b as defined for the porter stemmer algorithm.
const step1b = token => {
  if (token.substr(-3) == 'eed') {
    if (measure(token.substr(0, token.length - 3)) > 0)
      return token.replace(/eed$/, 'ee');
  } else {
    var result = attemptReplace(token, /ed|ing$/, '', (token) => {
      if (categorizeGroups(token).indexOf('V') >= 0) {
        var result = attemptReplacePatterns(token, [['at', 'ate'], ['bl', 'ble'], ['iz', 'ize']]);
        if (result)
          return result;
        else {
          if (endsWithDoublCons(token) && token.match(/[^lsz]$/))
            return token.replace(/([^aeiou])\1$/, '$1');

          if (measure(token) == 1 && categorizeChars(token).substr(-3) == 'CVC' && token.match(/[^wxy]$/))
            return token + 'e';
        }

        return token;
      }

      return null;
    });

    if (result)
      return result;
  }

  return token;
}

// Step 1c as defined for the porter stemmer algorithm.
const step1c = token => {
  if (categorizeGroups(token).substr(-2, 1) == 'V') {
    if (token.substr(-1) == 'y')
      return token.replace(/y$/, 'i');
  }

  return token;
}

// Step 2 as defined for the porter stemmer algorithm.
const step2 = token => {
  return replacePatterns(token, [['ational', 'ate'], ['tional', 'tion'], ['enci', 'ence'], ['anci', 'ance'],
  ['izer', 'ize'], ['abli', 'able'], ['alli', 'al'], ['entli', 'ent'], ['eli', 'e'],
  ['ousli', 'ous'], ['ization', 'ize'], ['ation', 'ate'], ['ator', 'ate'], ['alism', 'al'],
  ['iveness', 'ive'], ['fulness', 'ful'], ['ousness', 'ous'], ['aliti', 'al'],
  ['iviti', 'ive'], ['biliti', 'ble']], 0);
}

// Step 3 as defined for the porter stemmer algorithm.
const step3 = token => {
  return replacePatterns(token, [['icate', 'ic'], ['ative', ''], ['alize', 'al'],
  ['iciti', 'ic'], ['ical', 'ic'], ['ful', ''], ['ness', '']], 0);
}

// Step 4 as defined for the porter stemmer algorithm.
const step4 = token => {
  return replacePatterns(token, [['al', ''], ['ance', ''], ['ence', ''], ['er', ''],
  ['ic', ''], ['able', ''], ['ible', ''], ['ant', ''],
  ['ement', ''], ['ment', ''], ['ent', ''], [/([st])ion/, '$1'], ['ou', ''], ['ism', ''],
  ['ate', ''], ['iti', ''], ['ous', ''], ['ive', ''],
  ['ize', '']], 1);
}

// Step 5a as defined for the porter stemmer algorithm.
const step5a = token => {
  var m = measure(token);

  if (token.length > 3 && ((m > 1 && token.substr(-1) == 'e') || (m == 1 && !(categorizeChars(token).substr(-4, 3) == 'CVC' && token.match(/[^wxy].$/)))))
    return token.replace(/e$/, '');

  return token;
}

// Step 5b as defined for the porter stemmer algorithm.
const step5b = token => {
  if (measure(token) > 1) {
    if (endsWithDoublCons(token) && token.substr(-2) == 'll')
      return token.replace(/ll$/, 'l');
  }

  return token;
}

class Tokenizer {
  constructor() {
    this.stopwords = ["able", "about", "above", "abroad", "according", "accordingly", "across", "actually", "adj", "after", "afterwards", "again", "against", "ago", "ahead", "ain't", "all", "allow", "allows", "almost", "alone", "along", "alongside", "already", "also", "although", "always", "am", "amid", "amidst", "among", "amongst", "an", "and", "another", "any", "anybody", "anyhow", "anyone", "anything", "anyway", "anyways", "anywhere", "apart", "appear", "appreciate", "appropriate", "are", "aren't", "around", "as", "a's", "aside", "ask", "asking", "associated", "at", "available", "away", "awfully", "back", "backward", "backwards", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "begin", "behind", "being", "believe", "below", "beside", "besides", "best", "better", "between", "beyond", "both", "brief", "but", "by", "came", "can", "cannot", "cant", "can't", "caption", "cause", "causes", "certain", "certainly", "changes", "clearly", "c'mon", "co", "co.", "com", "come", "comes", "concerning", "consequently", "consider", "considering", "contain", "containing",
      "contains", "corresponding", "could", "couldn't", "course", "c's", "currently", "dare", "daren't", "definitely", "described", "despite", "did", "didn't", "different", "directly", "do", "does", "doesn't", "doing", "done", "don't", "down", "downwards", "during", "each", "edu", "eg", "eight", "eighty", "either", "else", "elsewhere", "end", "ending", "enough", "entirely", "especially", "et", "etc", "even", "ever", "evermore", "every", "everybody", "everyone", "everything", "everywhere", "ex", "exactly", "example", "except", "fairly", "far", "farther", "few", "fewer", "fifth", "first", "five", "followed", "following", "follows", "for", "forever", "former", "formerly", "forth", "forward", "found", "four", "from", "further", "furthermore", "get", "gets", "getting", "given", "gives", "go", "goes", "going", "gone", "got", "gotten", "greetings", "had", "hadn't", "half", "happens", "hardly", "has", "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "hello", "help", "hence", "her", "here", "hereafter", "hereby", "herein", "here's", "hereupon", "hers", "herself", "he's", "hi", "him", "himself", "his",
      "hither", "hopefully", "how", "howbeit", "however", "hundred", "i'd", "ie", "if", "ignored", "i'll", "i'm", "immediate", "in", "inasmuch", "inc", "inc.", "indeed", "indicate", "indicated", "indicates", "inner", "inside", "insofar", "instead", "into", "inward", "is", "isn't", "it", "it'd", "it'll", "its", "it's", "itself", "i've", "just", "k", "keep", "keeps", "kept", "know", "known", "knows", "last", "lately", "later", "latter", "latterly", "least", "less", "lest", "let", "let's", "like", "liked", "likely", "likewise", "little", "look", "looking", "looks", "low", "lower", "ltd", "made", "mainly", "make", "makes", "many", "may", "maybe", "mayn't", "me", "mean", "meantime", "meanwhile", "merely", "might", "mightn't", "mine", "minus", "miss", "more", "moreover", "most", "mostly", "mr", "mrs", "much", "must", "mustn't", "my", "myself", "name", "namely", "nd", "near", "nearly", "necessary", "need", "needn't", "needs", "neither", "never", "neverf", "neverless", "nevertheless", "new", "next", "nine", "ninety", "no", "nobody", "non", "none", "nonetheless", "noone", "no-one", "nor", "normally", "not", "nothing", "notwithstanding", "novel", "now", "nowhere", "obviously", "of", "off", "often", "oh", "ok",
      "okay", "old", "on", "once", "one", "ones", "one's", "only", "onto", "opposite", "or", "other", "others", "otherwise", "ought", "oughtn't", "our", "ours", "ourselves", "out", "outside", "over", "overall", "own", "particular", "particularly", "past", "per", "perhaps", "placed", "please", "plus", "possible", "presumably", "probably", "provided", "provides", "que", "quite", "qv", "rather", "rd", "re", "really", "reasonably", "recent", "recently", "regarding", "regardless", "regards", "relatively", "respectively", "right", "round", "said", "same", "saw", "say", "saying", "says", "second", "secondly", "see", "seeing", "seem", "seemed", "seeming", "seems", "seen", "self", "selves", "sensible", "sent", "serious", "seriously", "seven", "several", "shall", "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "since", "six", "so", "some", "somebody", "someday", "somehow", "someone", "something", "sometime", "sometimes", "somewhat", "somewhere", "soon", "sorry", "specified", "specify", "specifying", "still", "sub", "such", "sup", "sure", "take", "taken", "taking", "tell", "tends", "th", "than", "thank",
      "thanks", "thanx", "that", "that'll", "thats", "that's", "that've", "the", "their", "theirs", "them", "themselves", "then", "thence", "there", "thereafter", "thereby", "there'd", "therefore", "therein", "there'll", "there're", "theres", "there's", "thereupon", "there've", "these", "they", "they'd", "they'll", "they're", "they've", "thing", "things", "think", "third", "thirty", "this", "thorough", "thoroughly", "those", "though", "three", "through", "throughout", "thru", "thus", "till", "to", "together", "too", "took", "toward", "towards", "tried", "tries", "truly", "try", "trying", "t's", "twice", "two", "un", "under", "underneath", "undoing", "unfortunately", "unless", "unlike", "unlikely", "until", "unto", "up", "upon", "upwards", "us", "use", "used", "useful", "uses", "using", "usually", "v", "value", "various", "versus", "very", "via", "viz", "vs", "want", "wants", "was", "wasn't", "way", "we", "we'd", "welcome", "well", "we'll", "went", "were", "we're", "weren't", "we've", "what", "whatever", "what'll", "what's", "what've", "when", "whence", "whenever", "where", "whereafter", "whereas", "whereby",
      "wherein", "where's", "whereupon", "wherever", "whether", "which", "whichever", "while", "whilst", "whither", "who", "who'd", "whoever", "whole", "who'll", "whom", "whomever", "who's", "whose", "why", "will", "willing", "wish", "with", "within", "without", "wonder", "won't", "would", "wouldn't", "yes", "yet", "you", "you'd", "you'll", "your", "you're", "yours", "yourself", "yourselves", "you've", "zero", "a", "how's", "i", "when's", "why's", "b", "c", "d", "e", "f", "g", "h", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "uucp", "w", "x", "y", "z", "I", "www", "amount", "bill", "bottom", "call", "computer", "con", "couldnt", "cry", "de", "describe", "detail", "due", "eleven", "empty", "fifteen", "fifty", "fill", "find", "fire", "forty", "front", "full", "give", "hasnt", "herse", "himse", "interest", "itse”", "mill", "move", "myse”", "part", "put", "show", "side", "sincere", "sixty", "system", "ten", "thick", "thin", "top", "twelve", "twenty", "abst", "accordance", "act", "added", "adopted", "affected", "affecting", "affects", "ah", "announce", "anymore", "apparently", "approximately", "aren", "arent", "arise", "auth", "beginning", "beginnings", "begins", "biol", "briefly", "ca",
      "date", "ed", "effect", "et-al", "ff", "fix", "gave", "giving", "heres", "hes", "hid", "home", "id", "im", "immediately", "importance", "important", "index", "information", "invention", "itd", "keys", "kg", "km", "largely", "lets", "line", "'ll", "means", "mg", "million", "ml", "mug", "na", "nay", "necessarily", "nos", "noted", "obtain", "obtained", "omitted", "ord", "owing", "page", "pages", "poorly", "possibly", "potentially", "pp", "predominantly", "present", "previously", "primarily", "promptly", "proud", "quickly", "ran", "readily", "ref", "refs", "related", "research", "resulted", "resulting", "results", "run", "sec", "section", "shed", "shes", "showed", "shown", "showns", "shows", "significant", "significantly", "similar", "similarly", "slightly", "somethan", "specifically", "state", "states", "stop", "strongly", "substantially", "successfully", "sufficiently", "suggest", "thered", "thereof", "therere", "thereto", "theyd", "theyre", "thou", "thoughh", "thousand", "throug", "til", "tip", "ts", "ups", "usefully", "usefulness", "'ve", "vol", "vols", "wed", "whats", "wheres", "whim", "whod", "whos", "widely", "words", "world", "youd", "youre"];
  }
  trim = array => {
    while (array[array.length - 1] === '')
      array.pop();

    while (array[0] === '')
      array.shift();

    return array;
  };
  tokenize = (text) => {
    // Break a string up into an array of tokens by anything non-word
    return this.trim(text.split(/\W+/));
  };
}

class Stemmer {
  constructor() { }
  stem = token => {
    return step5b(step5a(step4(step3(step2(step1c(step1b(step1a(token.toLowerCase())))))))).toString();
  };
  addStopWord = stopWord => {
    Tokenizer.stopwords.push(stopWord);
  };
  addStopWords = moreStopWords => {
    Tokenizer.stopwords = Tokenizer.stopwords.concat(moreStopWords);
  };
  tokenizeAndStem = (text, keepStops) => {
    var stemmedTokens = [];

    new Tokenizer().tokenize(text).forEach(function (token) {
      if (keepStops || new Tokenizer().stopwords.indexOf(token) == -1)
        stemmedTokens.push(this.stem(token));
    }.bind(this));

    return stemmedTokens;
  };
}

module.exports = new Stemmer();
