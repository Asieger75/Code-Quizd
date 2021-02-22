var timer = 30000;
var score = 0;
var start = document.getElementById("startButton");
console.log(start);
start.addEventListener("click", function(){
        var question = document.createElement('p');
        question.innerHTML = questions[0].question.toString();
        document.body.appendChild(question); 
        console.log( questions[0].question);

        //start creating buttons for answers//
        //3 steps
           // 1: create button
           var selection1 = document.createElement('BUTTON');
           // 2: assign button details (text, ect.)
           selection1.textContent = questions[0].selection1; 
           selection1.name = "selection1";
           // 3: add button to body of document
           document.body.appendChild(selection1);
           selection1.addEventListener("click", function () { checkAnswers(selection1, questions[0].correct) });

           var selection2 = document.createElement('BUTTON');
           selection2.innerHTML = questions[0].selection2; 
           selection2.name = "selection2";           
           document.body.appendChild(selection2);
           selection2.addEventListener("click", function () { checkAnswers(selection2, questions[0].correct) });

           var selection3 = document.createElement('BUTTON');
           selection3.innerHTML = questions[0].selection3; 
           selection3.name = "selection3";
           document.body.appendChild(selection3);
           selection3.addEventListener("click", function () { checkAnswers(selection3, questions[0].correct) });
    
           var selection4 = document.createElement('BUTTON');
           selection4.innerHTML = questions[0].selection4;
           selection4.name = "selection4";
           document.body.appendChild(selection4);
           selection4.addEventListener("click", function () { checkAnswers(selection4, questions[0].correct) });
});

function checkAnswers(button,correct)
{ 
    if(button.name.includes(correct)){
        score++;
        console.log(score);
    }else{
        timer -= 10;
        console.log(timer);
    }



}

let questions = [
    {
        question : "Is JS considered front-end or back-end?",
        selection1 : "back-end",
        selection2 : "front-end",
        selection3 : "neither",
        selection4 : "both",
        correct : "2"
    }
]

//use this button with the done/ calculate final score button to prevent the apprearance of the time's up alert
// <button onclick="clearTimeout(myVar)">Stop it</button>
