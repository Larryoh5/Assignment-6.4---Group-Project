/*
============================================
; Title: Quiz ViewModel
; Author: Group Project Eunice Lim and Larry Ohaka
; Date: 5 March 2021
; Description: Using Knockoutjs for the quiz. This is the View Model.
;===========================================
*/ 

function QuizViewModel() {
    this.Questions = ko.observableArray(Questions);
    
    this.CheckAnswers = function () {
        
        var MyAnswers = [];
        var Ques = [];
        var CorrectAns = [];
        var WrongQues = [];
        var rank = '';
        var percentage = 0;
        
        ko.utils.arrayForEach(this.Questions(), function(item)
        {
            if (item.Selected != '') {
                // add question to array
                Ques.push(item.Question);
                
                // add selected answer
                MyAnswers.push(item.Selected);
                // add correct answer
                CorrectAns.push(item.CorrectAns);
                // test that we have the selected answers
                console.log('the selected is : ', MyAnswers);
            }
        });
        if (this.Questions().length != MyAnswers.length) {
            alert('Please complete all questions');
            return;
        }
        var Correct = 0;
        for (var i = 0; i < MyAnswers.length; i++) {
            Correct+= (MyAnswers[i] == CorrectAns[i]) ? 1 : 0;
            // add questions user got WrongQues
            if(MyAnswers[i] !== CorrectAns[i]){
                WrongQues.push(Ques[i]+ " The correct answer is: "+CorrectAns[i]);
                //push corresponding answers here in a new array
            }
        }
        
        percentage = (Correct / MyAnswers.length)*100 + "%";
        
        // assign rank
        if (percentage < 60){
            rank = 'Beginner';
        } 
        else if (percentage > 60 && percentage < 80){
            rank = 'Novice';
        }
        else{
            rank = 'Expert';
        }
        var rques = WrongQues.toString();
        
        //alert(percentage+' '+rank+' '+WrongQues);
        if(rank !== '' ){
            window.location.assign("summary.html?percentage="+percentage+"&rank="+rank+"&ques="+rques);
        }

    }
    this.ClearAnswers = function () {
       var radios = document.getElementsByTagName("input");
       console.log('list : ', radios);
       for (i = 0; i < radios.length; i++) 
            {
                if (radios[i].type == "radio")
                {
                    radios[i].checked = false; 
                }
            }
        }
    
}

ko.applyBindings(new QuizViewModel()); 
