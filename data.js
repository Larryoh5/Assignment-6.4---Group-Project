/*
============================================
; Title: Questions
; Author: Group Project Eunice Lim and Larry Ohaka
; Date: 5 March 2021
; Description: JavaScript of questions
;===========================================
*/

var Questions = [
	{
		Question: "1. What kind of database is MongoDB?", 
		Answers: [
			"Relational",
			"Non-Relational",
			"Static",
            "Magical"
        ],
		Selected : '',
        CorrectAns: "Non-Relational"
	},
	{
		Question: "2. How do you start writing a FOR loop?", 
		Answers: [
			"for (j=0; j < array.length; j ++)",
			"for (j = 0, j < 0, j ++)",
			"for (j =0, j < array.length, j ++)",
			"for j = 0, j < array.length, j++"
        ],
		Selected : '',
        CorrectAns: "for (j=0; j < array.length; j ++)"
	},
	{
		Question: "3. What does a break; do?", 
		Answers: [
			"It breaks your computer",
			"It causes a loop or switch to exit",
			"It breaks the function call",
			"It breaks itself"
        ],
		Selected : '',
        CorrectAns: "It causes a loop or switch to exit"
	},
	{
		Question: "4. What does MVVM stand for?", 
		Answers: [
			"Model View ViewModel",
			"Model Viewing ViewModel",
			"Magical View Versus Muggles",
			"Model Vim View Model"
        ],
		Selected : '',
        CorrectAns: "Model View ViewModel"
	},
	{
		Question: "5. Which of the following is a pattern that keeps track of changes in code and alerts you?", 
		Answers: [
			"The Owl Watcher",
			"The Singleton",
			"The Iterator",
			"The Observer"
        ],
		Selected : '',
        CorrectAns: "The Observer"
	},
    {
        Question: "6. Which of the following word is a JavaScript reserved word in strict mode?",
        Answers: [
     	   	"let",
       		"function",
        	"during",
       	 	"for"
		],
        Selected : '',
        CorrectAns: "let"
    },
    {
        Question: "7. What tag should you use to add JavaScript in a HTML document?",
        Answers: [
        	"<JavaScript>",
        	"<js>",
        	"<script>",
       	 	"<Java>"
		],
        Selected : '',
        CorrectAns: "<script>"
    },
    {
        Question: "8. Which is the correct JS array format?",
        Answers:[
        "var myArr = (thingOne, thingTwo)",
        "var myArr = [array1, array2, array3]",
        "var myWand = [wand1, wand2, wand3]",
        "var myPets = [“Hedwig”, “Crookshanks”, “Pig”]"
		],
        Selected : '',
        CorrectAns: "var myPets = [“Hedwig”, “Crookshanks”, “Pig”]"
    },
    {
        Question: "9. What kind of programing language is JavaScript?",
        Answers:[
        "Server",
        "Client",
        "Database",
        "Magical"
		],
        Selected : '',
        CorrectAns: "Client"
    },
    {
        Question: "10. Which is the correct format to change JavaScript syntax to HTML? <p  class = “quiz”>This is end of the quiz</p>",
        Answers: [
        "document.getElementById(“quiz”).innerHTML=“I am done!”;",
        "document.getElementByClassName(“quiz”).innerHTML=“I am done!”;",
        "document.getElementsByClassName(“quiz”).innerHTML=”I am done!”;",
        "document.getElementByClass(“quiz”).innerHTML=“I am done!”;"
		],
        Selected : '',
        CorrectAns: "document.getElementByClassName(“quiz”).innerHTML=“I am done!”;"
    } 
]; 