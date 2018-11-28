//1.1 Using ES6 Feature

String.prototype.filterWords = function(arr){
    let wordsArray = this.split(' ');
     let changedWords = wordsArray.map((word)=>{
        if(arr.indexOf(word) > -1){
            return "***";
        }else{
            return word;
        }
    });
     return changedWords.join(' ');
    // let myString = this.valueOf(this);
    // for(let a of arr){
    //     console.log(a);
    //     myString = myString.replace(a,"***");
    //     console.log(myString);
    // }
}
console.log("This house is nice !".filterWords(["house","nice"]));

// 1.2 Using Promise

String.prototype.filterWords = function (arr) {
    let myString = this.valueOf(this);
    let newString;
    let filterPromise = function () {
        return new Promise(function (resolve, reject) {
            if (Array.isArray(arr)) {
                let wordsArray = myString.split(' ');
                let changedWords = wordsArray.map((word) => {
                    if (arr.indexOf(word) > -1) {
                        return "***";
                    } else {
                        return word;
                    }
                });
                newString = changedWords.join(' ');
                resolve(newString);
            } else {
                reject("FilterWords Rejected");
            }
        })
    }

    filterPromise().then(data => {
        newString = data;
    })
    return newString;
}

console.log("This house is nice !".filterWords(["house", "nice"]));

// 1.3 Async - Await

String.prototype.filterWords = async function(notAllowedWords){
    let that = this;
    let doFilter = function(){
        return new Promise(function(resolve,reject){
            if(Array.isArray(notAllowedWords)){
                let wordsInString = that.split(' ');
                let updatedWords = wordsInString.map(word => {
                    if(notAllowedWords.indexOf(word) > -1){
                        return "***";
                    }
                    return word;
                });
            
               let updatedSentence = updatedWords.join(" ");
               resolve(updatedSentence);
            }else{
                reject("Method parameter should be Array.");
            }
        });
    };

    try{
        let result = await doFilter();

        return result;
    }catch(error){
        console.log(error);
    }

}

"This house is nice !!".filterWords(["house","nice"]).then(data=>{console.log(data)});

// 1.4  Observables


const rx = require('rxjs');
const rxOps = require('rxjs/operators');


String.prototype.filterWords = function (notAllowedWords) {
    rx.from(this.split(" "))
        .pipe(
            rxOps.map((word) => { if (notAllowedWords.indexOf(word) > -1) { return "***" } else { return word } }), 
            rxOps.reduce((word1, word2) => word1 + " " + word2)
        )
        .subscribe((updatedSentence) => { console.log(updatedSentence) }, (error) => console.log(error), null)
}

"This house is nice !!".filterWords(["house","nice"]);
