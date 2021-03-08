/*
============================================
; Title:  index.js
; Author: Eunice Lim
; Date:   12 February 2021
; Description: JavaScript file using Knockout.js for a quiz
;===========================================
*/


function quiz (questions){      //to create a new quiz 
    this.questions = questions;
    this.option = options;
    }

var quiz = new quiz();

var choices = [] //To hold all the answers selected
   
function scores(score){   //tabulate scores
    if (this.option = answer){
        choices++;
    }
}

//function for showing results of quiz if everything is correct, but this may be redundant
function results(){
    if (options === answer){
        console.log("You scored 100 points!")
    }
    else ()  //need to have comparison against which correct answers were selected ??
}

const questions = [
    {
        question: "What kind of database is MongoDB?",
        options: {
        a : "Relational",
        b : "Non-Relational",
        c : "Static",
        d : "Magical"
        },
        answer : "a"
    },
    {
        question: "How do you start writing a FOR loop?",
        options: {
        a : "for (j=0, j < array.length, j --)",
        b : "for (j = 0, j < 0, j ++)",
        c : "for (j =0, j < array.length, j ++)",
        d: "for j = 0, j < array.length, j++ "
    },
        answer : "c"
    },
    {
        question: "What does a break; do?",
        options: { 
                    a : "It breaks your computer",
        b : "It causes a loop or switch to exit",
        c : "It breaks the function call",
        d : "It breaks itself",
        },
        answer : "b"
    },
    {
        question: "What does MVVM stand for?",
        options: { 
        a : "Model View ViewModel",
        b : "Model Viewing ViewModel",
        c : "Magical View Versus Muggles",
        d: "Must View Variety Masks"
        },
        answer : "a"
    },
    {
        question: "Which of the following is a pattern that keeps track of changes in code and alerts you?",
        options: {
        a : "The Owl Watcher",
        b : "The Singleton",
        c : "The Iterator",
        d : "The Observer"
        },
        answer : "d"
    },
    {
        question: "Which of the following word is a JavaScript reserved word in strict mode?",
        options: {
        a : "let",
        b : "function",
        c : "during",
        d : "for"
        },
        answer : "a"
    },
    {
        question: "What tag should you use to add JavaScript in a HTML document?",
        options: {
        a : "<%JavaScript>",
        b : "<%js>",
        c : "<%script>",
        d : "<%Java>"
        },
        answer : "c"
    },
    {
        question : "Which is the correct JS array format?",
        options: {
        a : "var myArr = (thingOne, thingTwo)",
        b : "var myArr = [array1, array2, array3",
        c : "var myWand = [wand1, wand2, wand3]",
        d : "var myPets = [â€œHedwigâ€, â€œCrookshanksâ€, â€œPigâ€] "
        },
        answer : "d"
    },
    {
        question: "What kind of programing language is JavaScript?",
        options:{
        a : "Server",
        b : "Client",
        c : "Database",
        d : "Magical"
        },
        answer : "b"
    },
    {
        question: "Which is the correct format to change JavaScript syntax to HTML?",
        options: {
        a : "document.getElementById(â€œquizâ€).innerHTML=â€œI am done!â€;",
        b : "document.getElementByClassName(â€œquizâ€).innerHTML=â€œI am done!â€;",
        c : "document.getElementsByClassName(â€œquizâ€).innerHTML=â€I am done!â€;",
        d : "document.getElementByClass(â€œquizâ€).innerHTML=â€œI am done!â€;"
        },
        answer : "b" 
    }
];


//to show results when submit button is clicked
submitButton.addEventListener('click', results);
       