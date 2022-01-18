"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assigment
// const ageJohn = 30;
// const ageMark = 30;

// // Deklaration
// let isJohnOlder, isJohnEqual;

// //Test
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

// // Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);

// IF 
// if(true)
// if(false)
// if(isJohnOlder)
// 'if(ageJohn > ageMark)
// {
//     console.log("John ist älter.")
// }'

// IF ELSE
// if (isJohnOlder) {
//     // Ja-Zweig / true
//     console.log("John ist älter.");
// } else {
//     // Nein-Zweig / false
//     console.log("John ist jünger.");
// }

// Ternary Schreibweise
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");

// IF - ELSE IF

// if (isJohnOlder)
// {
//     console.log("John ist älter.");
// }

// // 1. Alternative
// else if(isJohnEqual)
// {
//     console.log("John ist gleich alt.");
// }
// // evl. weitere Alternative
// else
// {
//     console.log("John ist jünger.");
// }

// Fallunterscheidung 

const firstName = "Jane";
let job;

job = "driver";
job = "diver";
job = "artist";
job = "instructor";

switch (job) {
    case "driver": // test auf gleichkeit
        console.log(firstName + " fährt Taxi");
        break;
        
    case "diver": // test auf gleichkeit
        console.log(firstName + " taucht im Rhein");
        break;

    case "artist": // test auf gleichkeit
    case "instructor":
        console.log(firstName + " malt ein Bild");
        break;

    default: 
        console.log(firstName + " hello");
        break;
}











