"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assigment
const ageJohn = 30;
const ageMark = 25;

// Deklaration
let isJohnOlder, isJohnEqual;

//Test
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
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
if (isJohnOlder) {
    // Ja-Zweig / true
    console.log("John ist älter.");
} else {
    // Nein-Zweig / false
    console.log("John ist jünger.");
}

// Ternary Schreibweise
console.log( (isJohnOlder) ? "John is older" : "Mark is older");