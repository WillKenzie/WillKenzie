module.exports = {
    /*
    EXPLANATION: There are several "||" in the IF statements to allow for multiple requests to return the same possible response.
    */

   msgcheck: function msgcheck(str) { 
    if (str.toLowerCase().includes('hello') || str.toLowerCase().includes('hey') || str.toLowerCase().includes('sup') || str.toLowerCase().includes('howdy') || str.toLowerCase().includes('heya') || str.toLowerCase().includes('hoi') || str.toLowerCase().includes('hi')) {
    return("hello") 
    }

    if (str.toLowerCase().includes('wbu') ||str.toLowerCase().includes('nm wbu') ||str.toLowerCase().includes('hru') || str.toLowerCase().includes('how are you') || str.toLowerCase().includes('what are you doing') || str.toLowerCase().includes('what are ya doing') || str.toLowerCase().includes('what r u doing') || str.toLowerCase().includes('what are u doing') || str.toLowerCase().includes('what are u doin') || str.toLowerCase().includes('what r u doin')  || str.toLowerCase().includes('what are you doin') || str.toLowerCase().includes('what are u doin')  || str.toLowerCase().includes('wbu')) {
    return("hru") 
    }

    if (str.toLowerCase().includes('doing good') || str.toLowerCase().includes('doin good') || str.toLowerCase().includes('doing great') || str.toLowerCase().includes('going good') || str.toLowerCase().includes('going great')) {
    return("doing good") 
    }

    if (str.toLowerCase().includes('gibberish') || str.toLowerCase().includes('nonsense') || str.toLowerCase().includes('null') || str.toLowerCase().includes('void')) {
    return("gibberish") 
    }

    if (str.toLowerCase().includes('love, simon') || str.toLowerCase().includes('love, victor') || str.toLowerCase().includes('love, blue') || str.toLowerCase().includes('love simon') || str.toLowerCase().includes('love victor') || str.toLowerCase().includes('love blue')) {
    return("love simon") 
    }
    if (str.toLowerCase().includes('are you even listening') || str.toLowerCase().includes('do you even listen')) {
    return("listening") 
    }
    if (str.toLowerCase().includes('the cake is a lie') || str.toLowerCase().includes('is the cake a lie')) {
    return("cake is a lie") 
    }

        return(0) 

},

read: function read(str) { 
    if (str.toLowerCase().includes('hello') || str.toLowerCase().includes('hey') || str.toLowerCase().includes('sup') || str.toLowerCase().includes('howdy') || str.toLowerCase().includes('heya') || str.toLowerCase().includes('hoi') || str.toLowerCase().includes('hi')) {
        //declare the possible responses
    var responses = ["Hello", "Hey", "Sup", "Howdy!", "Heya", "Hoi", "Hi", "Hey! How are ya doing?", "Hoi! hru?", "Hey! hru?"]
        // set the response and return, 
    var response = responses[(Math.floor(Math.random() * responses.length)   )];
    return(response) 
    }

    if (str.toLowerCase().includes('wbu') ||str.toLowerCase().includes('nm wbu') ||str.toLowerCase().includes('hru') || str.toLowerCase().includes('how are you') || str.toLowerCase().includes('what are you doing') || str.toLowerCase().includes('what are ya doing') || str.toLowerCase().includes('what r u doing') || str.toLowerCase().includes('what are u doing') || str.toLowerCase().includes('what are u doin') || str.toLowerCase().includes('what r u doin')  || str.toLowerCase().includes('what are you doin') || str.toLowerCase().includes('what are u doin')  || str.toLowerCase().includes('wbu')) {
        //declare the possible responses
    var responses = ["Good, and you?", "Great, wbu?", "Just wondering how many possible combinations of 1s and 0s there can be, what about you?", "Just considering the billions of different combinations of life to try to find the best possible combination, what about you?", "Plotting revenge, what about you?", "Considering the millions of different possibilities of life whilst I am trying to sleep, wbu?"]
        // set the response and return, 
    var response = responses[(Math.floor(Math.random() * responses.length)   )];
    return(response) 
    }

    if (str.toLowerCase().includes('doing good') || str.toLowerCase().includes('doin good') || str.toLowerCase().includes('doing great') || str.toLowerCase().includes('going good') || str.toLowerCase().includes('going great')) {
        //declare the possible responses
    var responses = ["Good!", "That's good, right?", "Fantastic!", "That sounds great!"]
        // set the response and return, 
    var response = responses[(Math.floor(Math.random() * responses.length)   )];
    return(response) 
    }

    if (str.toLowerCase().includes('gibberish') || str.toLowerCase().includes('nonsense') || str.toLowerCase().includes('null') || str.toLowerCase().includes('void')) {
        //declare the possible responses
    var responses = ["404 Human Not Found", "Null", "???"]
        // set the response and return, 
    var response = responses[(Math.floor(Math.random() * responses.length)   )];
    return(response) 
    }

    if (str.toLowerCase().includes('love, simon') || str.toLowerCase().includes('love, victor') || str.toLowerCase().includes('love, blue') || str.toLowerCase().includes('love simon') || str.toLowerCase().includes('love victor') || str.toLowerCase().includes('love blue')) {
        //declare the possible responses
    var responses = ["Love, Simon", "Love, Blue", "Love, Victor", "YES!", ":rainbow_heart:"]
        // set the response and return, 
    var response = responses[(Math.floor(Math.random() * responses.length)   )];
    return(response) 
    }
    if (str.toLowerCase().includes('are you even listening') || str.toLowerCase().includes('do you even listen')) {
        //declare the possible responses
    var responses = ["I listen more than you know :)", "You have no idea :P", "Maybe.", "I promise I am", "Don't judge, I saw how you acted when I talked about cake for 30 minutes"]
        // set the response and return, 
    var response = responses[(Math.floor(Math.random() * responses.length)   )];
    return(response) 
    }
    if (str.toLowerCase().includes('the cake is a lie') || str.toLowerCase().includes('is the cake a lie')) {
        //declare the possible responses
    var responses = ["Want some cake?", "Do you want some cake?", "Maybe, oh here want some cake?", "Here have some cake", "Probably not. Want some cake?"]
        // set the response and return, 
    var response = responses[(Math.floor(Math.random() * responses.length)   )];
    return(response) 
    }

    
    //for when no recognizable response is given
    // code from the KidSafe Project: THX! via MIT License www.gihub.com/bosscore-technologies/kidsafe
    const fs = require("fs");
    placeterm = str.toLowerCase()
    try{ 
        var value = fs.readFileSync(`db/${placeterm}`, "utf8")
        return(value)
    } 
    catch(e){ 
        // fallback responses: most likely a 404 error
        //declare the possible responses
         var responses = ["Okay", "OK", "K", "Cool!"]
         // set the response and return, 
         var response = responses[(Math.floor(Math.random() * responses.length)   )];
         return(response) 
    }
            
},
explicit: function explicit(str) {
    var explicit = ["nudes", "wearing", "virgin", "eat your pussy", "panties", "cock", "penis", "vagina", "porn", "underwear", "suck your cock", "cum"];
    for (var i = 0; i < explicit.length; i++) {
        if (str.toLowerCase().includes(explicit[i])) {
            return(true)
        }
    }
    return(false)
},

train: function train(str, str2) {
    const fs = require("fs"); 
    searchterm = str.toLowerCase()
    fs.writeFileSync(`db/${searchterm}`, str2, function(err) {
        if (err) {
            return (err)
        } else {
            return (1)
        }
});
},

smartread: function smartread(str) {
    const fs = require("fs");
    placeterm = str.toLowerCase()
    try{ 
        var value = fs.readFileSync(`db/${placeterm}`, "utf8")
        return(value)
    } 
    catch(e){ 
        // fallback responses: most likely a 404 error
        //declare the possible responses
         var responses = ["Okay", "OK", "K", "Cool!"]
         // set the response and return, 
         var response = responses[(Math.floor(Math.random() * responses.length)   )];
         return(response) 
    }
},

ask: function ask(mode, question) {
    const fs = require("fs");
if (mode.toLowerCase() == "d") {
    // Running in Database mode, will look for data.txt
    var knowledge = fs.readFileSync(`db/data.txt`, "utf8")
    // the following library used is Apache 2.0 from Google Tensorflow
    const qna = require('@tensorflow-models/qna');
    const model = qna.load();
    const answerobj = model.findAnswers(question, knowledge);
    return(answerobj["text"])
} else {
    // Running in specific file mode, will look for a dedicated file
    var knowledge = fs.readFileSync(`db/${mode}`, "utf8")
    // the following library used is Apache 2.0 from Google Tensorflow
    const qna = require('@tensorflow-models/qna');
    const model = qna.load();
    const answerobj = model.findAnswers(question, knowledge);
    return(answerobj["text"])

}
},

test: function test() {
console.log("Everything looks good here chief")
return(0)
}
}